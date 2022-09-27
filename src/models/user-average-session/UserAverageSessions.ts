import SessionTime from './SessionTime'

class UserAverageSessions {
    userId: number
    sessions: SessionTime[]
    constructor(userId: number, sessions: SessionTime[]) {
        this.userId = userId
        this.sessions = sessions
    }
}

export default UserAverageSessions
