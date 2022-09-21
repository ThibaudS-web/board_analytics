import DataPerformance from './DataPerformanceLocal'
//============================ MODEL LOCAL =============================//
class UserPerformance {
    userId: number
    data: DataPerformance[]
    constructor(userId: number, data: DataPerformance[]) {
        this.userId = userId
        this.data = data
    }
}

export default UserPerformance
