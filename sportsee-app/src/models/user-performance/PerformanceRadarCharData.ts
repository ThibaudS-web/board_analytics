/**
 * @description This object returns the gender (speed, strength, cardio, etc...) and the associated value.
 */

class PerformanceRadarCharData {
    label: string | null
    value: number
    constructor(label: string | null, value: number) {
        this.label = label
        this.value = value
    }
}

export default PerformanceRadarCharData
