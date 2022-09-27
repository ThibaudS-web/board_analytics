import { useNavigate } from 'react-router-dom'

import ApiResult from '../models/api/ApiResult'
import UserPerformanceAPI from '../models/user-performance/UserPerformanceAPI'
import UserActivity from '../models/user-activity/UserActivity'
import UserAverageSessions from '../models/user-average-session/UserAverageSessions'
import UserMainData from '../models/user-main/UserMainData'
import ApiManager from './ApiManager'

/** @description This class is used to retrieve all the API data necessary for the proper functioning of our application. */

export class FetcherDataApi implements ApiManager {
    navigate = useNavigate()
    API_HOST = 'http://localhost:8000'

    async getUserMainData(userId: string): Promise<UserMainData> {
        let data: UserMainData
        try {
            const result = await fetch(`${this.API_HOST}/user/${userId}`)
            data = ((await result.json()) as ApiResult<UserMainData>).data
            this.handleError(result)
            return data
        } catch (err) {
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
            this.handleError(result)
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
            this.handleError(result)
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
            this.handleError(result)
            return data
        } catch (err) {
            console.log('catch')
            throw new Error('Error API: ', err as Error)
        }
    }

    handleError(result: { status: number }) {
        if (result.status === 404) {
            this.navigate('/page-not-found', { replace: true })
        }
    }
}
