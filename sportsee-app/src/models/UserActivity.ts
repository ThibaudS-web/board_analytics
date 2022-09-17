export class UserActivity {
    userId: number
    sessions: SessionActivity[]
    constructor(userId: number, sessions: SessionActivity[]) {
        this.userId = userId
        this.sessions = sessions
    }
}

class SessionActivity {
    day: string
    kilogram: number
    calories: number
    constructor(day: string, kilogram: number, calories: number) {
        this.day = day
        this.kilogram = kilogram
        this.calories = calories
    }
}

export class SessionActivityWrapper {
    private sessionActivity: SessionActivity
    constructor(sessionActivity: SessionActivity) {
        this.sessionActivity = sessionActivity
    }

    // We create a computed property which will be used in ChartBar component.
    // We can't use a function as the component needs a static string for the property key.
    // Ca va """"créer"""" un attribut  qui s'appelle day.
    // En faisant ça, faire "wrapper.day" va appeler la fonction
    get ['day'](): number {
        return new Date(this.sessionActivity.day).getDate()
    }

    get ['kilogram'](): number {
        return this.sessionActivity.kilogram
    }

    // Ici ce qui est important c'est qu'on a désolidarisé le nom du champ dans le model vs le nom de la barre dans le graph
    // Intérêt principal : le jour où ton site est dispo en FR/EN/ES tu peux le faire
    /*Nom de la barre dans le graphe*/ get ['calories'](): number {
        return this.sessionActivity.calories /*Nom du champ*/
    }
}
