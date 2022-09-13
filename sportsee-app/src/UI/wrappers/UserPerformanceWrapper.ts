import {
    UserPerformance,
    PerformanceRadarCharData,
} from '../../models/user-performance/UserPerformance'
import { DataPerformanceWrapper } from './DataPerformanceWrapper'

export class UserPerformanceWrapper {
    private userPerformance: UserPerformance
    dataPerformanceWrappers: DataPerformanceWrapper[]
    constructor(userPerformance: UserPerformance) {
        this.userPerformance = userPerformance
        this.dataPerformanceWrappers = userPerformance.data.map((item) => {
            return new DataPerformanceWrapper(item)
        })
    }

    getRadarChartData(): PerformanceRadarCharData[] {
        return this.dataPerformanceWrappers.map((itemWrapped) => {
            return new PerformanceRadarCharData(
                itemWrapped.getKindLabel(),
                itemWrapped.getValue()
            )
        })
    }
}
