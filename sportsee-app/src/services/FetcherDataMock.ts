import { UserActivity } from '../models/UserActivity'
import { UserMainData } from '../models/UserMainData'
import { UserAverageSessions } from '../models/UserAverageSession'
import { UserPerformanceAPI } from '../models/user-performance/UserPerformance'
import { ApiManager } from '../pages/Dashboard'

const mockUrlUserMainData = `/mock/userMainData.json`
const mockUrlUserActivity = `/mock/userActivity.json`
const mockUrlUserAverageSession = `/mock/userAverageSession.json`
const mockUrlUserPerformance = `/mock/userPerformance.json`

export class FetcherDataMock implements ApiManager {
    async getUserMainData(userId: string): Promise<UserMainData> {
        let data: UserMainData
        try {
            const result = await fetch(mockUrlUserMainData)
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
            const result = await fetch(mockUrlUserActivity)
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
            const result = await fetch(mockUrlUserAverageSession)
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
            const result = await fetch(mockUrlUserPerformance)
            data = (await result.json()) as UserPerformanceAPI
            return data
        } catch (err) {
            console.log('catch')
            throw new Error('Error API: ', err as Error)
        }
    }
}

// async function getUserMainData(): Promise<UserMainData> {
//     let data: UserMainData
//     try {
//         const result = await fetch(mockUrlUserMainData)
//         data = (await result.json()) as UserMainData
//         return data
//     } catch (err) {
//         console.log('catch')
//         throw new Error('Error API: ', err as Error)
//     }
// }

// async function getUserActivity(): Promise<UserActivity> {
//     let data: UserActivity
//     try {
//         const result = await fetch(mockUrlUserActivity)
//         data = (await result.json()) as UserActivity
//         return data
//     } catch (err) {
//         console.log('catch')
//         throw new Error('Error API: ', err as Error)
//     }
// }

// async function getUserAverageSession(): Promise<UserAverageSessions> {
//     let data: UserAverageSessions
//     try {
//         const result = await fetch(mockUrlUserAverageSession)
//         data = (await result.json()) as UserAverageSessions
//         return data
//     } catch (err) {
//         console.log('catch')
//         throw new Error('Error API: ', err as Error)
//     }
// }

// async function getUserPerformance(): Promise<UserPerformanceAPI> {
//     let data: UserPerformanceAPI
//     try {
//         const result = await fetch(mockUrlUserPerformance)
//         data = (await result.json()) as UserPerformanceAPI
//         return data
//     } catch (err) {
//         console.log('catch')
//         throw new Error('Error API: ', err as Error)
//     }
// }

const fetchData = {
    // getUserMainData,
    // getUserActivity,
    // getUserAverageSession,
    // getUserPerformance,
}

export default fetchData
