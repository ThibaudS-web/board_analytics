import { DataPerformanceAPIMapper } from './DataPerformanceAPIMapper'
import {
    UserPerformanceAPI,
    UserPerformance,
} from '../../models/user-performance/UserPerformance'

export class UserPerformanceAPIMapper {
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
