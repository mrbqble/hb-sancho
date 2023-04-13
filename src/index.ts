interface Person {
    name: string
    dateOfBirth: string
    isTraumatized: boolean
    hasIGCSEIn3Weeks: boolean
    isTheBestPerson: boolean
}

export const congratulations = (person: Person) => {
    const today = new Date()
    const birthDay: number[] = person.dateOfBirth.split('-').map((item) => { return parseInt(item) })
    if (today.getFullYear() - birthDay[0] === 18 && today.getMonth() + 1 === birthDay[1] && today.getDate() === birthDay[2]) {
        console.log(`Happy Birthday, ${person.name}!!!`)
    }
    if (person.isTraumatized) {
        console.log('Heal faster!!!')
    }
    if (person.hasIGCSEIn3Weeks) {
        console.log('Seriously, get well soon and get that triple A*!')
    }
    console.log('We wish you all the best!!!')
    if (person.isTheBestPerson) {
        console.log('Always stay kind, empatic, educated and hard-working person as you are!')
    }
    return
}