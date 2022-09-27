import Kind from '../../models/user-performance/Kind'
import DataPerformance from '../../models/user-performance/DataPerformanceLocal'

/**
 * @description Wrapper classes format model fields into displayable data. This class only formats fields needed for UI. 
 * This wrapping layer enables us to separate UI logic (wrapper class) from business logic (model class). 
 * 
 * This class has two methods, one to display the kind and one to display the value.
 */

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
