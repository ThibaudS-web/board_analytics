import UserInfos from './UserInfos'
import KeyData from './KeyData'

class UserMainData {
    id: number
    userInfos: UserInfos
    todayScore: number
    keyData: KeyData
    score: number
    constructor(
        id: number,
        userInfos: UserInfos,
        todayScore: number,
        keyData: KeyData,
        score: number
    ) {
        this.id = id
        this.userInfos = userInfos
        this.todayScore = todayScore
        this.keyData = keyData
        this.score = score
    }
}

export default UserMainData
