import DataPerformance from './DataPerformanceLocal'

//============================ MODEL LOCAL =============================//

/**
 * @description This is the basic model that we will use for our application. 
 * The kind property no longer exists because it is not very practical to use.
 */

class UserPerformance {
    userId: number
    data: DataPerformance[]
    constructor(userId: number, data: DataPerformance[]) {
        this.userId = userId
        this.data = data
    }
}

export default UserPerformance
