// 🚕 JavaScript-Based Cab Service – Problem Statement
class Cabservices {
    constructor() {
        this.car_type = "";
        this.bill = this.km = 0.0;
    }

    accept() {
        this.car_type = prompt("Enter car type: AC or Non-ac");
        this.km = Number(prompt("Enter KM travelled")); // ✅ Fix here
    }

    calculate() {
        if (this.car_type === "AC") {
            if (this.km <= 5) this.bill = 150;
            else this.bill = 150 + (this.km - 5) * 10;
        } 
         else if(this.car_type === "non-ac") {
            if (this.km <= 5) this.bill = 120;
            else this.bill = 120 + (this.km - 5) * 8;
        }
    }

    display() {
        console.log("Car type: " + this.car_type);
        console.log("KM travelled: " + this.km);
        console.log("Bill calculated: ₹" + this.bill);
    }
}

let obj = new Cabservices();
obj.accept();
obj.calculate();
obj.display();
