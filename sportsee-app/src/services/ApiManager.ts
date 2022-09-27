import UserPerformanceAPI from '../models/user-performance/UserPerformanceAPI'
import UserActivity from '../models/user-activity/UserActivity'
import UserMainData from '../models/user-main/UserMainData'
import UserAverageSessions from '../models/user-average-session/UserAverageSessions'

/**
 * @description We use an interface to abstract the implementations found in the FetcherDataApi and FetcherDataMock class. 
 * This way, in our controller (The Dashboard page) we can switch the Mock / API data.
 */

interface ApiManager {
    getUserMainData(userId: string): Promise<UserMainData>
    getUserActivity(userId: string): Promise<UserActivity>
    getUserPerformance(userId: string): Promise<UserPerformanceAPI>
    getUserAverageSession(userId: string): Promise<UserAverageSessions>
}

export default ApiManager
