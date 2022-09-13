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

class UserInfos {
    firstName: string
    lastName: string
    age: number
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
}

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
