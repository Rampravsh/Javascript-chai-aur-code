// Inheritance Example

// Inheritance allows a class (the child or subclass) to acquire the properties
// and methods of another class (the parent or superclass). This is a core
// mechanism for code reuse in OOP. The relationship is often described as
// "is-a" (e.g., a Car "is a" Vehicle).

// --- Base Class (Parent) ---
// This is the general class that other, more specific classes can inherit from.
class Vehicle {
    constructor(brand) {
        this.brand = brand;
        console.log("A new vehicle has been created.");
    }

    // A general method available to all vehicles
    startEngine() {
        return `${this.brand}'s engine has started.`;
    }

    // Another general method
    honk() {
        return "Honk honk!";
    }
}

// --- Derived Class (Child) ---
// The 'Car' class inherits from the 'Vehicle' class using the 'extends' keyword.
// This means a Car gets all of Vehicle's properties and methods.
class Car extends Vehicle {
    constructor(brand, model, year) {
        // 'super(brand)' calls the constructor of the parent class (Vehicle).
        // This is mandatory before you can use the 'this' keyword in a child constructor.
        // It sets up the properties defined in the parent class.
        super(brand);

        // Properties specific to the Car class
        this.model = model;
        this.year = year;
    }

    // Method Overriding:
    // The Car class provides its own specific implementation of the honk() method.
    // When myCar.honk() is called, this version will be used instead of the one in Vehicle.
    honk() {
        return "Beep beep!";
    }

    // This is a new method that only exists on the Car class.
    getDetails() {
        // this.startEngine(); // We can still call the inherited method from Vehicle if we want.
        return `This is a ${this.year} ${this.brand} ${this.model}.`;
    }
}


// --- Let's see it in action ---

console.log("--- Creating a Car instance ---");
const myCar = new Car("Honda", "Civic", 2024);

// 1. Calling methods inherited from Vehicle
console.log(myCar.startEngine()); // This method exists on the Vehicle class.

// 2. Calling an overridden method
// Notice it uses the Car's version of honk(), not the Vehicle's.
console.log(myCar.honk()); // Output: "Beep beep!"

// 3. Calling a method that is unique to the Car class
console.log(myCar.getDetails());

// 4. Accessing properties from both parent and child constructors
console.log(`Car Brand: ${myCar.brand}`);     // 'brand' is from the Vehicle constructor
console.log(`Car Model: ${myCar.model}`);     // 'model' is from the Car constructor
