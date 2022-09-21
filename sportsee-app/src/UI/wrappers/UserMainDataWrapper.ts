import UserMainData from "../../models/user-main/UserMainData"

class UserMainDataWrapper {
    private usermainData: UserMainData
    constructor(usermainData: UserMainData) {
        this.usermainData = usermainData
    }

    getPercentage() {
        let score: number

        if (this.usermainData.todayScore) {
            score = this.usermainData.todayScore
        } else {
            score = this.usermainData.score
        }

        return score * 100
    }

    getKcalories() {
        return `${this.usermainData.keyData.calorieCount} Kcal`
    }

    getProteins() {
        return `${this.usermainData.keyData.proteinCount} g`
    }

    getCarbohydrates() {
        return `${this.usermainData.keyData.carbohydrateCount} g`
    }

    getLipids() {
        return `${this.usermainData.keyData.lipidCount} g`
    }
}

export default UserMainDataWrapper
