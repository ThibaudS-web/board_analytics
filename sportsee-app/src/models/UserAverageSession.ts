export class UserAverageSessions {
    userId: number
    sessions: SessionTime[]
    constructor(userId: number, sessions: SessionTime[]) {
        this.userId = userId
        this.sessions = sessions
    }
}

class SessionTime {
    day: number
    sessionLength: number
    constructor(day: number, sessionLength: number) {
        this.day = day
        this.sessionLength = sessionLength
    }
}
