import {
    DataPerformanceAPI,
    DataPerformance,
    Kind,
} from '../../models/user-performance/UserPerformance'

export class DataPerformanceAPIMapper {
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