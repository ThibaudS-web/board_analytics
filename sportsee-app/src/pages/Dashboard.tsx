//============================= IMPORT LIBS =============================\\
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

//============================= IMPORT DATA MODEL =============================\\
import UserPerformanceWrapper from '../UI/wrappers/UserPerformanceWrapper'
import UserPerformanceAPI from '../models/user-performance/UserPerformanceAPI'
import DataPerformanceAPIMapper from '../UI/mappers/DataPerformanceAPIMapper'
import UserPerformanceAPIMapper from '../UI/mappers/UserPerformanceAPIMapper'
import UserMainData from '../models/user-main/UserMainData'
import UserMainDataWrapper from '../UI/wrappers/UserMainDataWrapper'
import SessionActivityWrapper from '../UI/wrappers/SessionActivityWrapper'
import UserActivity from '../models/user-activity/UserActivity'
import UserAverageSessions from '../models/user-average-session/UserAverageSessions'
import PerformanceRadarCharData from '../models/user-performance/PerformanceRadarCharData'
import SessionTimeWrapper from '../UI/wrappers/SessionTimeWrapper'

//============================= IMPORT COMPONENTS =============================\\
import Barchart from '../components/barchart/Barchart'
import Linechart from '../components/linechart/Linechart'
import Radarchart from '../components/radarchart'
import Radialbarchart from '../components/Radialbarchart'
import NutrientCount from '../components/nutrients/NutrientScore'

//============================= IMPORT CALL MOCK / API =============================\\
import FetcherDataMock from '../services/FetcherDataMock'
import { FetcherDataApi } from '../services/FetcherDataApi'

import { colors } from '../utils/colors'

const ProfilWrapper = styled.div`
    margin: 70px 0 0 220px;
    @media (max-width: 1200px), (max-height: 850px) {
        margin-left: 100px;
        margin-top: 20px;
    }
`
const WelcomeUser = styled.h1`
    font-size: 48px;
    @media (max-width: 1200px), (max-height: 850px) {
        font-size: 32px;
    }
`
const Username = styled.span`
    color: #ff0101;
`
const Congrat = styled.p`
    font-weight: bold;
    margin-bottom: 70px;
    @media (max-width: 1200px), (max-height: 850px) {
        margin-bottom: 40px;
    }
`

const ChartsWrapper = styled.div`
    width: 68%;
    display: flex;
    flex-wrap: wrap;
`

const ChartWrapperSmallGraphs = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    @media (max-width: 1200px), (max-height: 850px) {
        gap: 10px;
    }
`
const NutrientCountWrapper = styled.div`
    width: 21%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const UserStatSection = styled.div`
    display: flex;
    width: 100%;
    gap: 30px;
`

const genericStyleChartWrapper = {
    backgroundColor: `${colors.primary}`,
    borderRadius: '10px',
    width: '100%',
    minWidth: '150px',
    height: '270px',
}

const ChartWrapper = styled.div`
    ${genericStyleChartWrapper}
`

const ChartPerformanceWrapper = styled.div`
    ${genericStyleChartWrapper}
    min-width: '150px';
`

export interface ApiManager {
    getUserMainData(userId: string): Promise<UserMainData>
    getUserActivity(userId: string): Promise<UserActivity>
    getUserPerformance(userId: string): Promise<UserPerformanceAPI>
    getUserAverageSession(userId: string): Promise<UserAverageSessions>
}

function Dashboard() {
    const { userId } = useParams()
    const navigate = useNavigate()

    // For switch data Api to Mock, we have to remplace FetcherDataApi by FetcherDataMock
    const apiManager: ApiManager = new FetcherDataApi()

    const dataPerformanceMapper: DataPerformanceAPIMapper =
        new DataPerformanceAPIMapper()
    const mapper = new UserPerformanceAPIMapper(dataPerformanceMapper)

    //Error States
    const [error404, setError404] = useState(false)
    const [activityErrorServer, setActivityErrorServer] = useState(false)
    const [mainDataErrorServer, setMainDataErrorServer] = useState(false)
    const [userPerformanceErrorServer, setUserPerformanceErrorServer] =
        useState(false)
    const [userAverageSessionErrorServer, setUserAverageSessionErrorServer] =
        useState(false)

    //Load States
    const [activityLoaded, setActivityLoaded] = useState(false)
    const [mainDataLoaded, setMainDataLoaded] = useState(false)
    const [userPerformanceLoaded, setUserPerformanceLoaded] = useState(false)
    const [userAverageSessionLoaded, setUserAverageSessionLoaded] =
        useState(false)

    //Data States
    const [userMainData, setUserMainData] = useState<UserMainData | null>(null)
    const [userPerformanceData, setUserPerformanceData] = useState<
        PerformanceRadarCharData[] | null
    >(null)
    const [userActivity, setUserActivity] = useState<UserActivity | null>(null)
    const [userAverageSession, setUserAverageSession] =
        useState<UserAverageSessions | null>(null)

    useEffect(() => {
        apiManager
            .getUserMainData(userId ?? '0')
            .then((data) => {
                setUserMainData(data)
                setMainDataLoaded(true)
            })
            .catch((err) => {
                setMainDataErrorServer(true)
                console.log(err)
            })

        apiManager
            .getUserActivity(userId ?? '0')
            .then((data) => {
                setUserActivity(data)
                setActivityLoaded(true)
            })
            .catch((err) => {
                setActivityErrorServer(true)
                console.log(err)
            })

        apiManager
            .getUserAverageSession(userId ?? '0')
            .then((data) => {
                setUserAverageSession(data)
                setUserAverageSessionLoaded(true)
            })
            .catch((err) => {
                setUserAverageSessionErrorServer(true)
                console.log(err)
            })

        apiManager
            .getUserPerformance(userId ?? '0')
            .then((data) => {
                const userPerformance = new UserPerformanceWrapper(
                    mapper.mapAPI(data)
                )
                setUserPerformanceData(userPerformance.getRadarChartData())
                setUserPerformanceLoaded(true)
            })
            .catch((err) => {
                setUserPerformanceErrorServer(true)
                console.log(err)
            })
    }, [userId])

    if (userId !== userMainData?.id.toString() && userMainData?.id) {
        setError404(true)
    }

    if (error404) {
        navigate('/page-not-found', { replace: true })
        console.log(error404)
    }

    if (
        activityErrorServer &&
        mainDataErrorServer &&
        userPerformanceErrorServer &&
        userAverageSessionErrorServer
    ) {
        navigate('/error-server', { replace: true })
    }

    //Wrapping component for use computed properties
    const sessionWrappers =
        userActivity?.sessions?.map((item) => {
            const wrapper = new SessionActivityWrapper(item)
            return wrapper
        }) ?? []

    const sessionAverageWrapper =
        userAverageSession?.sessions?.map(
            (session) => new SessionTimeWrapper(session)
        ) ?? []

    const mainDataWrapper = userMainData
        ? new UserMainDataWrapper(userMainData)
        : null

    return (
        <>
            <ProfilWrapper>
                <WelcomeUser>
                    Bonjour{' '}
                    <Username>
                        {userMainData?.userInfos.firstName ?? 'User not found'}
                    </Username>
                </WelcomeUser>
                <Congrat>
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </Congrat>
                <UserStatSection>
                    <ChartsWrapper>
                        <Barchart
                            loaded={activityLoaded}
                            sessions={sessionWrappers}
                        />
                        <ChartWrapperSmallGraphs>
                            <ChartWrapper>
                                <Linechart
                                    loaded={userAverageSessionLoaded}
                                    sessionsAverage={sessionAverageWrapper}
                                />
                            </ChartWrapper>
                            <ChartPerformanceWrapper>
                                <Radarchart
                                    loaded={userPerformanceLoaded}
                                    performance={userPerformanceData ?? []}
                                />
                            </ChartPerformanceWrapper>
                            <ChartWrapper>
                                <Radialbarchart
                                    loaded={mainDataLoaded}
                                    score={
                                        mainDataWrapper?.getPercentage() ?? 0
                                    }
                                />
                            </ChartWrapper>
                        </ChartWrapperSmallGraphs>
                    </ChartsWrapper>
                    <NutrientCountWrapper>
                        <NutrientCount
                            type="calorie"
                            count={
                                mainDataWrapper?.getKcalories() ??
                                'Data not found'
                            }
                        />
                        <NutrientCount
                            type="protein"
                            count={
                                mainDataWrapper?.getProteins() ??
                                'Data not found'
                            }
                        />
                        <NutrientCount
                            type="carbohydrate"
                            count={
                                mainDataWrapper?.getCarbohydrates() ??
                                'Data not found'
                            }
                        />
                        <NutrientCount
                            type="lipid"
                            count={
                                mainDataWrapper?.getLipids() ?? 'Data not found'
                            }
                        />
                    </NutrientCountWrapper>
                </UserStatSection>
            </ProfilWrapper>
        </>
    )
}

export default Dashboard
