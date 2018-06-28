export class Food{
    constructor(name){
        this.name = name;
    }
}

export class Apple extends Food{
    constructor(name){
        super("苹果");
    }
}

export class Orange extends Food{
    constructor(name){
        super("橘子");
    }
}

// export Apple;
// export Orange;