import DataPerformanceAPI from './DataPerformanceAPI'
//============================ MODEL API =============================//
class UserPerformanceAPI {
    userId: number
    // Kind object is not needed locally, it won't be mapped into model
    kind: unknown
    data: DataPerformanceAPI[]
    constructor(userId: number, kind: unknown, data: DataPerformanceAPI[]) {
        this.userId = userId
        this.kind = kind
        this.data = data
    }
}

export default UserPerformanceAPI
