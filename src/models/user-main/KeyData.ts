class KeyData {
    calorieCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
    constructor(
        calorieCount: number,
        proteinCount: number,
        carbohydrateCount: number,
        lipidCount: number
    ) {
        this.calorieCount = calorieCount
        this.proteinCount = proteinCount
        this.carbohydrateCount = carbohydrateCount
        this.lipidCount = lipidCount
    }
}

export default KeyData
