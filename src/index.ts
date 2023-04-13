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
        setTimeout(() => console.log('Heal faster!!!'), 2000)
    }
    if (person.hasIGCSEIn3Weeks) {
        setTimeout(() => console.log('Seriously, get well soon and get that triple A*!'), 5000)
    }
    if (person.isTheBestPerson) {
        setTimeout(() => console.log('Always stay kind, empatic, educated and hard-working person as you are!'), 10000)
    }
    setTimeout(() => {
        console.log('We wish you all the best!!!')
        console.log('Call realCongrats() after you read this')
    }, 15000)
    
}

export const realCongrats = () => {
    console.log("Let me ask a simple question: are you gay?")
    setTimeout(() => console.log("Well, we all know that you are gay. It is okay, don't be shy :)"), 5000)
    setTimeout(() => console.log("So there are some of gay wishes from us. Don't make any more gay decisions, my brother. Also, be careful with your presents, letters and watch your back. You know what we mean :) Check the package functions. There is stil something else waiting for you to call it."), 10000)
}

export const mainCongrats = () => {
    console.log('Welcome to the main part of this package! Finally good to see you man.');
    setTimeout(() => console.log("Ладно шутки в сторону. Дай бог тебе мозгов чтобы ты все таки начал смотреть One Piece (One Piece is REAAAL!!!)."), 5000)
    setTimeout(() => console.log("12 сыныпта кыз таба алмадын енди, надеемся хотя бы 1-курста табасын."), 10000)
    setTimeout(() => console.log("Көп сөздің қысқасы, барлығы жақсы болсын. Туылған күнің құтты болсын, біздің сүйікті досымыз!"), 15000)
}