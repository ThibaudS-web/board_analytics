import DataPerformanceAPIMapper from './DataPerformanceAPIMapper'
import UserPerformanceAPI from '../../models/user-performance/UserPerformanceAPI'
import UserPerformance from '../../models/user-performance/UserPerformanceLocal'

class UserPerformanceAPIMapper {
    dataPerformanceApiMapper: DataPerformanceAPIMapper

    constructor(dataPerformanceApiMapper: DataPerformanceAPIMapper) {
        this.dataPerformanceApiMapper = dataPerformanceApiMapper
    }

    mapAPI(userPerformanceApi: UserPerformanceAPI): UserPerformance {
        return new UserPerformance(
            userPerformanceApi.userId,
            userPerformanceApi.data.map((item) =>
                this.dataPerformanceApiMapper.mapAPI(item)
            )
        )
    }
}

export default UserPerformanceAPIMapper
