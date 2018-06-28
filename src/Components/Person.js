class Person{
    constructor(name){
        this.name = name;
    }

    say (text){
        console.log(`${this.name}说:${text}`)
    }
    eat (obj){
        console.log(`${this.name}吃掉了一个${obj.name}`);
    }
}

export default Person;