import DataPerformanceAPIMapper from './DataPerformanceAPIMapper'
import UserPerformanceAPI from '../../models/user-performance/UserPerformanceAPI'
import UserPerformance from '../../models/user-performance/UserPerformanceLocal'

/**
 * @description Mapper classes apply data mapping rules between two layers of entities. This mapping layer reduces the impact of external data sources. 
 * Here, we use a mapper class to transform API data into usable local data.
 * 
 * The mapAPI() method transforms the API model into a local model.
 */

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
