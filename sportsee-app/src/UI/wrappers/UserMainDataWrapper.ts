import UserMainData from '../../models/user-main/UserMainData'

/**
 * @description Wrapper classes format model fields into displayable data. This class only formats fields needed for UI.
 * This wrapping layer enables us to separate UI logic (wrapper class) from business logic (model class).
 * 
 * This class takes the UserMainData object as an argument. 
 * It displays the percentage relative to the user's score as well as the Kcal, proteins, carbohydrates, and lipids.
 */

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
