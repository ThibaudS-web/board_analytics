import Kind from '../../models/user-performance/Kind'
import DataPerformance from '../../models/user-performance/DataPerformanceLocal'

class DataPerformanceWrapper {
    private dataPerformance: DataPerformance
    constructor(dataPerformance: DataPerformance) {
        this.dataPerformance = dataPerformance
    }

    getKindLabel(): string | null {
        switch (this.dataPerformance.kind) {
            case Kind.CARDIO:
                return 'Cardio'
            case Kind.ENERGY:
                return 'Energie'
            case Kind.ENDURANCE:
                return 'Endurance'
            case Kind.STRENGTH:
                return 'Force'
            case Kind.SPEED:
                return 'Vitesse'
            case Kind.INTENSITY:
                return 'Intensité'
            default:
                return null
        }
    }

    getValue() {
        return this.dataPerformance.value
    }
}

export default DataPerformanceWrapper
