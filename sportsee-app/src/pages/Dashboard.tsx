/* eslint-disable prefer-const */
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { UserPerformanceWrapper } from '../UI/wrappers/UserPerformanceWrapper'
import { UserPerformanceAPI } from '../models/user-performance/UserPerformance'
import { DataPerformanceAPIMapper } from '../UI/mappers/DataPerformanceAPIMapper'
import { UserPerformanceAPIMapper } from '../UI/mappers/UserPerformanceAPIMapper'
import { UserMainData, UserMainDataWrapper } from '../models/UserMainData'
import { SessionActivityWrapper, UserActivity } from '../models/UserActivity'
import { UserAverageSessions } from '../models/UserAverageSession'
import { PerformanceRadarCharData } from '../models/user-performance/UserPerformance'
import { SessionTimeWrapper } from '../models/UserAverageSession'

import fetchData from '../services/clientAPI'
import Barchart from '../components/barchart/Barchart'
import Linechart from '../components/linechart/Linechart'
import Radarchart from '../components/radarchart'
import Radialbarchart from '../components/Radialbarchart'

const ProfilWrapper = styled.div`
    margin: 70px 0 0 220px;
`
const WelcomeUser = styled.h1`
    font-size: 48px;
`
const Username = styled.span`
    color: #ff0101;
`
const Congrat = styled.p`
    font-weight: bold;
    margin-bottom: 70px;
`
const ChartWrapper = styled.div`
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    border: 2px red solid;
`

const ChartWrapperSmallGraphs = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

function Dashboard() {
    const dataPerformanceMapper: DataPerformanceAPIMapper =
        new DataPerformanceAPIMapper()
    const mapper = new UserPerformanceAPIMapper(dataPerformanceMapper)

    const [activityLoaded, setActivityLoaded] = useState(false)

    const [userMainData, setUserMainData] = useState<UserMainData | null>(null)
    const [userPerformanceData, setUserPerformanceData] = useState<
        PerformanceRadarCharData[] | null
    >(null)
    const [userActivity, setUserActivity] = useState<UserActivity | null>(null)
    const [userAverageSession, setUserAverageSession] =
        useState<UserAverageSessions | null>(null)

    useEffect(() => {
        async function fetchUserMainData() {
            try {
                let data: UserMainData
                data = await fetchData.getUserMainData()
                setUserMainData(data)
            } catch (err) {
                console.log(err)
            }
        }

        async function fetchUserPerformance() {
            try {
                let data: UserPerformanceAPI
                data = await fetchData.getUserPerformance()
                const userPerformance = new UserPerformanceWrapper(
                    mapper.mapAPI(data)
                )
                setUserPerformanceData(userPerformance.getRadarChartData())
            } catch (err) {
                console.log(err)
            }
        }

        async function fetchUserActivity() {
            try {
                let data: UserActivity
                data = await fetchData.getUserActivity()
                setUserActivity(data)
                setActivityLoaded(true)
            } catch (err) {
                console.log(err)
            }
        }

        async function fetchUserAverageSession() {
            try {
                let data: UserAverageSessions
                data = await fetchData.getUserAverageSession()
                setUserAverageSession(data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchUserMainData()
        fetchUserPerformance()
        fetchUserActivity()
        fetchUserAverageSession()
    }, [])

    //Wrapping component for use ours computed properties
    const sessionWrappers =
        userActivity?.sessions?.map((item) => {
            let wrapper = new SessionActivityWrapper(item)
            return wrapper
        }) ?? []

    const sessionAverageWrapper =
        userAverageSession?.sessions?.map(
            (session) => new SessionTimeWrapper(session)
        ) ?? []

    const mainDataWrapper = new UserMainDataWrapper(userMainData)

    

    return (
        <>
            <ProfilWrapper>
                <WelcomeUser>
                    Bonjour{' '}
                    <Username>{userMainData?.userInfos.firstName}</Username>
                </WelcomeUser>
                <Congrat>
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </Congrat>

                <ChartWrapper>
                    {activityLoaded && <Barchart sessions={sessionWrappers} />}
                    <ChartWrapperSmallGraphs>
                        <Linechart sessionsAverage={sessionAverageWrapper} />
                        <Radarchart performance={userPerformanceData ?? []} />
                        <Radialbarchart score={mainDataWrapper.getPercentage()} />
                    </ChartWrapperSmallGraphs>
                </ChartWrapper>
            </ProfilWrapper>
        </>
    )
}

export default Dashboard
