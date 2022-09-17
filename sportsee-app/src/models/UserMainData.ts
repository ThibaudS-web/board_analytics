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
    private usermainData: UserMainData | null
    constructor(usermainData: UserMainData | null) {
        this.usermainData = usermainData
    }

    getPercentage() {
        const score = this.usermainData?.todayScore ?? 0
        return score * 100
    }

    getKcalories() {
        return `${this.usermainData?.keyData?.calorieCount || 0} Kcal`
    }

    getProteins() {
        return `${this.usermainData?.keyData?.proteinCount || 0} g`
    }

    getCarbohydrates() {
        return `${this.usermainData?.keyData?.carbohydrateCount || 0} g`
    }

    getLipids() {
        return `${this.usermainData?.keyData.lipidCount || 0} g`
    }
}
