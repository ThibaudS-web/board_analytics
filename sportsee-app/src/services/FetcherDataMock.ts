import UserActivity from '../models/user-activity/UserActivity'
import UserMainData from '../models/user-main/UserMainData'
import UserAverageSessions from '../models/user-average-session/UserAverageSessions'
import UserPerformanceAPI from '../models/user-performance/UserPerformanceAPI'
import ApiManager from './ApiManager'

/** @description This class is used to retrieve all the mock data necessary for the proper functioning of our application. */

class FetcherDataMock implements ApiManager {
    mockUrlUserMainData = `/mock/userMainData.json`
    mockUrlUserActivity = `/mock/userActivity.json`
    mockUrlUserAverageSession = `/mock/userAverageSession.json`
    mockUrlUserPerformance = `/mock/userPerformance.json`

    async getUserMainData(userId: string): Promise<UserMainData> {
        let data: UserMainData
        try {
            const result = await fetch(this.mockUrlUserMainData)
            data = (await result.json()) as UserMainData
            return data
        } catch (err) {
            console.log('catch')
            throw new Error('Error API: ', err as Error)
        }
    }

    async getUserActivity(userId: string): Promise<UserActivity> {
        let data: UserActivity
        try {
            const result = await fetch(this.mockUrlUserActivity)
            data = (await result.json()) as UserActivity
            return data
        } catch (err) {
            console.log('catch')
            throw new Error('Error API: ', err as Error)
        }
    }

    async getUserAverageSession(userId: string): Promise<UserAverageSessions> {
        let data: UserAverageSessions
        try {
            const result = await fetch(this.mockUrlUserAverageSession)
            data = (await result.json()) as UserAverageSessions
            return data
        } catch (err) {
            console.log('catch')
            throw new Error('Error API: ', err as Error)
        }
    }

    async getUserPerformance(userId: string): Promise<UserPerformanceAPI> {
        let data: UserPerformanceAPI
        try {
            const result = await fetch(this.mockUrlUserPerformance)
            data = (await result.json()) as UserPerformanceAPI
            return data
        } catch (err) {
            console.log('catch')
            throw new Error('Error API: ', err as Error)
        }
    }
}

export default FetcherDataMock
