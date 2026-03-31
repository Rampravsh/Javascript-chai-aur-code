// Encapsulation Example

// Encapsulation is the concept of bundling data (properties) and the methods
// that operate on that data together within a single unit (a class).
// It also involves controlling access to that data, which is often called
// "data hiding".

// Think of a capsule for medicine. The plastic shell (the object) holds the
// powdered medicine (the data) inside. You can't directly touch the powder;
// you interact with the capsule itself. Encapsulation protects the data from
// outside interference and misuse.

// In modern JavaScript, we can use private fields (prefixing with #) to enforce
// true data hiding.

class Employee {
    // These fields are private. They cannot be accessed or modified
    // from outside the Employee class. This protects the data's integrity.
    #name;
    #salary;

    constructor(name, salary) {
        this.#name = name;

        // We can include validation logic inside the class, ensuring the
        // object is created in a valid state.
        if (salary > 0) {
            this.#salary = salary;
        } else {
            this.#salary = 0;
            console.error("Salary must be a positive number. Setting to 0.");
        }
    }

    // This is a public method, often called a "getter".
    // It provides controlled, read-only access to the private salary data.
    getSalary() {
        // We can format the data or add logic before returning it.
        return `Current salary is $${this.#salary}`;
    }

    // This is a public method, often called a "setter".
    // It provides a controlled way to *modify* the private salary data.
    giveRaise(amount) {
        if (amount > 0) {
            this.#salary += amount;
            console.log(`Congratulations! Your new salary is $${this.#salary}.`);
        } else {
            console.error("Raise amount must be positive.");
        }
    }

    // This public method uses the internal data to perform an action.
    getDetails() {
        // The method has direct access to the private fields.
        return `Employee Name: ${this.#name}, Salary: $${this.#salary}`;
    }
}

const alice = new Employee("Alice Smith", 50000);

console.log("--- Initial State ---");
console.log(alice.getDetails()); // Works perfectly

// Direct access to private fields from outside the class is impossible.
// Uncommenting these lines will cause a SyntaxError.
// console.log(alice.#name);     // Error!
// alice.#salary = 1000000;      // Error!

console.log("--- Interacting via Public Methods ---");
// We can only interact with the object through its public interface.
console.log(alice.getSalary());

alice.giveRaise(5000); // This works because we are using the public method.
console.log(alice.getSalary());

alice.giveRaise(-1000); // The internal logic protects the data.
console.log(alice.getSalary()); // Salary remains unchanged.
