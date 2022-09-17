export class UserMainData {
    id: number
    userInfos: UserInfos
    todayScore: number
    keyData: KeyData
    constructor(
        id: number,
        userInfos: UserInfos,
        todayScore: number,
        keyData: KeyData
    ) {
        this.id = id
        this.userInfos = userInfos
        this.todayScore = todayScore
        this.keyData = keyData
    }
}

export class UserInfos {
    firstName: string
    lastName: string
    age: number
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
}

export class KeyData {
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

export class UserMainDataWrapper {
    private usermainData: UserMainData
    constructor(usermainData: UserMainData) {
        this.usermainData = usermainData
    }

    getPercentage() {
        const score = this.usermainData?.todayScore
        return score * 100
    }

    getKcalories() {
        return `${this.usermainData?.keyData?.calorieCount} Kcal`
    }

    getProteins() {
        return `${this.usermainData?.keyData?.proteinCount} g`
    }

    getCarbohydrates() {
        return `${this.usermainData?.keyData?.carbohydrateCount} g`
    }

    getLipids() {
        return `${this.usermainData?.keyData.lipidCount} g`
    }
}
