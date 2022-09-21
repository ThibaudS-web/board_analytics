import Kind from './Kind'

class DataPerformance {
    kind: Kind
    value: number
    constructor(kind: Kind, value: number) {
        this.kind = kind
        this.value = value
    }
}

export default DataPerformance
