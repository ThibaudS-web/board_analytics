import PerformanceRadarCharData from '../../models/user-performance/PerformanceRadarCharData'
import UserPerformance from '../../models/user-performance/UserPerformanceLocal'
import DataPerformanceWrapper from './DataPerformanceWrapper'

class UserPerformanceWrapper {
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

export default UserPerformanceWrapper
