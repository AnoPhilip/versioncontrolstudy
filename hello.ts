//hello.ts
class Greeter {
    greeting: string;
    constructor() {
        this.greeting = "Aks";
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter();
console.log(greeter.greet());