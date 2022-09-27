import Kind from './Kind'

/**
 * @desciption This is the object for the data property of class UserPerformanceLocal
 */

class DataPerformance {
    kind: Kind
    value: number
    constructor(kind: Kind, value: number) {
        this.kind = kind
        this.value = value
    }
}

export default DataPerformance
