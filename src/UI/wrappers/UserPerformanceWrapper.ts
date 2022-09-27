import PerformanceRadarCharData from '../../models/user-performance/PerformanceRadarCharData'
import UserPerformance from '../../models/user-performance/UserPerformanceLocal'
import DataPerformanceWrapper from './DataPerformanceWrapper'

/**
 * @description Wrapper classes format model fields into displayable data. This class only formats fields needed for UI.
 * This wrapping layer enables us to separate UI logic (wrapper class) from business logic (model class).
 * 
 * This class makes it possible to display on the Radarchart the label of the Kind and his value.
 */

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
