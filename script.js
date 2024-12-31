class footballer {
    constructor(name, age, hobby, color,) {
        this.name = name
        this.age = age
        this.hobby = hobby
        this.color = color
    }
}

let footballer3 = new footballer("Christiano Ronaldo",39, "football", "green")
let footballer4 = new footballer("Lionel Messi", 37, "football", "magenta")



console.log("my name is", footballer4.name, "and i am", footballer4.age, "years old", "and my hobby is", footballer4.hobby, "and my favorite color is", footballer4.color)




console.log("my name is", footballer3.name, "and i am", footballer3.age, "years old", "and my hobby is", footballer3.hobby, "and my favorite color is", footballer3.color)


class actors {
    constructor(name, age, movieacted, yearreleased,) {
        this.name = name
        this.age = age
        this.movieacted = movieacted
        this.yearreleased = yearreleased
    }
}

let actors6 = new actors("willsmith", 56, "BADBOYS", "07-04-1995")
let actors9 = new actors("Auliʻi Cravalho",24,"MOANA", "23-11-2016")


console.log("the name of the actor is", actors6.name, "and i am", actors6.age, "years old", "and i am the main actor of the movie", actors6.movieacted, "and it was released in the year", actors6.yearreleased)


console.log("the name of the actor is", actors9.name, "and i am", actors9.age, "years old", "and i am the main actor of the movie", actors9.movieacted, "and it was released in the year", actors9.yearreleased)



class Teacher extends actors{
    constructor(name, age, movieacted, yearreleased, subject) {
        super(name, age, movieacted, yearreleased)
        this.subject=subject
    }
    
}
let teacher1 = new Teacher("Kemi", 29, "Deathnote", 2023, "Biology")
console.log("my name is", teacher1.name, "and i am ", teacher1.age, "years old", "and i was formally an actor and i acted", teacher1.movieacted, "and it was released in the year", teacher1.yearreleased, "and now i am your teacher for the subject", teacher1.subject)




class wrestler extends footballer{
    constructor(name, age, hobby, color, division,){
        super(name, age, hobby, color)
        this.division = division
       
    }
}

let wrestler2 = new wrestler("Roman reigns", 39, "wrestling", "Red", "smackdown",)
console.log("my name is", wrestler2.name, "and i am", wrestler2.age, "years old", "my hobby is", wrestler2.hobby, "and my best color is", wrestler2.color, "and i am currently signed under WWE i am in the divison", wrestler2.division,);