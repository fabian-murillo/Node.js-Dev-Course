var square = x => x * x;
console.log(square(9));

var user = {
    name: 'Fabian',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi(5,6,7);
user.sayHiAlt(1,2,3);