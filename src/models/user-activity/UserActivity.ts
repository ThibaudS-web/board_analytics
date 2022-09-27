import SessionActivity from './SessionActivity'

class UserActivity {
    userId: number
    sessions: SessionActivity[]
    constructor(userId: number, sessions: SessionActivity[]) {
        this.userId = userId
        this.sessions = sessions
    }
}

export default UserActivity
