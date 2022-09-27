import Kind from '../../models/user-performance/Kind'
import DataPerformanceAPI from '../../models/user-performance/DataPerformanceAPI'
import DataPerformance from '../../models/user-performance/DataPerformanceLocal'

/**
 * @description Mapper classes apply data mapping rules between two layers of entities. This mapping layer reduces the impact of external data sources.
 * 
 * Here we use it to associate each value (1 to 6) to our Kind enum.
 */

class DataPerformanceAPIMapper {
    mapAPI(dataPerformanceApi: DataPerformanceAPI): DataPerformance {
        let enumKind: Kind
        switch (dataPerformanceApi.kind) {
            case 1:
                enumKind = Kind.CARDIO
                break
            case 2:
                enumKind = Kind.ENERGY
                break
            case 3:
                enumKind = Kind.ENDURANCE
                break
            case 4:
                enumKind = Kind.STRENGTH
                break
            case 5:
                enumKind = Kind.SPEED
                break
            case 6:
                enumKind = Kind.INTENSITY
                break
            default:
                enumKind = Kind.UNKNOWN
                break
        }

        return new DataPerformance(enumKind, dataPerformanceApi.value)
    }
}

export default DataPerformanceAPIMapper
