import { ApiResult } from '../models/api/ApiResult'
import { UserPerformanceAPI } from '../models/user-performance/UserPerformance'
import { UserActivity } from '../models/UserActivity'
import { UserAverageSessions } from '../models/UserAverageSession'
import { UserMainData } from '../models/UserMainData'
import { ApiManager } from '../pages/Dashboard'

export class FetcherDataApi implements ApiManager {
    API_HOST = 'http://localhost:8000'

    async getUserMainData(userId: string): Promise<UserMainData> {
        let data: UserMainData
        try {
            const result = await fetch(`${this.API_HOST}/user/${userId}`)
            data = ((await result.json()) as ApiResult<UserMainData>).data
            console.log(data)
            return data
        } catch (err) {
            console.log('catch')
            throw new Error('Error API: ', err as Error)
        }
    }

    async getUserActivity(userId: string): Promise<UserActivity> {
        let data: UserActivity
        try {
            const result = await fetch(
                `${this.API_HOST}/user/${userId}/activity`
            )
            data = ((await result.json()) as ApiResult<UserActivity>).data
            return data
        } catch (err) {
            console.log('catch')
            throw new Error('Error API: ', err as Error)
        }
    }

    async getUserPerformance(userId: string): Promise<UserPerformanceAPI> {
        let data: UserPerformanceAPI
        try {
            const result = await fetch(
                `${this.API_HOST}/user/${userId}/performance`
            )
            data = ((await result.json()) as ApiResult<UserPerformanceAPI>).data
            return data
        } catch (err) {
            console.log('catch')
            throw new Error('Error API: ', err as Error)
        }
    }

    async getUserAverageSession(userId: string): Promise<UserAverageSessions> {
        let data: UserAverageSessions
        try {
            const result = await fetch(
                `${this.API_HOST}/user/${userId}/average-sessions`
            )
            data = ((await result.json()) as ApiResult<UserAverageSessions>)
                .data
            return data
        } catch (err) {
            console.log('catch')
            throw new Error('Error API: ', err as Error)
        }
    }
}
