import DataPerformanceAPI from './DataPerformanceAPI'

//============================ MODEL API =============================//

/**
 * @description This is the class that models the data received by the API. 
 * Kind object is not needed locally, it won't be mapped into local model.
 */

class UserPerformanceAPI {
    userId: number
    kind: unknown
    data: DataPerformanceAPI[]
    constructor(userId: number, kind: unknown, data: DataPerformanceAPI[]) {
        this.userId = userId
        this.kind = kind
        this.data = data
    }
}

export default UserPerformanceAPI
