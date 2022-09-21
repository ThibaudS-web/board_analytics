import SessionActivity from "../../models/user-activity/SessionActivity"

class SessionActivityWrapper {
    private sessionActivity: SessionActivity
    constructor(sessionActivity: SessionActivity) {
        this.sessionActivity = sessionActivity
    }

    // We create a computed property which will be used in ChartBar component.
    // We can't use a function as the component needs a static string for the property key.
    get ['day'](): number {
        return new Date(this.sessionActivity.day).getDate()
    }

    get ['kilogram'](): number {
        return this.sessionActivity.kilogram
    }

    get ['calories'](): number {
        return this.sessionActivity.calories /*Nom du champ*/
    }
}

export default SessionActivityWrapper
