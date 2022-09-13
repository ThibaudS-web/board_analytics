/* eslint-disable prefer-const */
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { UserPerformanceWrapper } from '../UI/wrappers/UserPerformanceWrapper'
import { UserPerformanceAPI } from '../models/user-performance/UserPerformance'
import { DataPerformanceAPIMapper } from '../UI/mappers/DataPerformanceAPIMapper'
import { UserPerformanceAPIMapper } from '../UI/mappers/UserPerformanceAPIMapper'
import { UserMainData } from '../models/UserMainData'
import { UserActivity } from '../models/UserActivity'

import fetchData from '../services/clientAPI'
import { UserAverageSessions } from '../models/UserAverageSession'

const ProfilWrapper = styled.div`
    margin: 70px 0 0 220px;
`

const WelcomeUser = styled.h1`
    font-size: 48px;
`
const Username = styled.span`
    color: #ff0101;
`

function Dashboard() {
    const dataPerformanceMapper: DataPerformanceAPIMapper =
        new DataPerformanceAPIMapper()
    const mapper = new UserPerformanceAPIMapper(dataPerformanceMapper)

    const [userMainData, setUserMainData] = useState({})
    const [userPerformanceData, setUserPerformanceData] = useState({})
    const [userActivity, setUserActivity] = useState({})
    const [userAverageSession, setUserAverageSession] = useState({})

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

    console.log('UserMainData: ', userMainData)
    console.log('UserPerformance: ', userPerformanceData)
    console.log('userActivity: ', userActivity)
    console.log('userAverageSession: ', userAverageSession)

    return (
        <ProfilWrapper>
            <WelcomeUser>
                Bonjour <Username>Thomas</Username>
            </WelcomeUser>
        </ProfilWrapper>
    )
}

export default Dashboard
