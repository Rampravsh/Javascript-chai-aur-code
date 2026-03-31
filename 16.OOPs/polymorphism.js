// Polymorphism Example

// Polymorphism is a Greek word that means "many forms".
// In OOP, it's the ability of a single interface (like a method) to have
// different underlying implementations. In simpler terms, it allows different
// objects to respond to the same method call in their own unique way.

// This is often achieved through method overriding, where child classes
// provide their own specific implementation of a method from their parent class.

// --- Base Class (Parent) ---
// This class defines a common interface for all animals: a 'makeSound' method.
class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}

// --- Derived Classes (Children) ---

class Dog extends Animal {
    // The Dog class overrides the makeSound() method.
    makeSound() {
        console.log("Woof woof!");
    }
}

class Cat extends Animal {
    // The Cat class also overrides the makeSound() method.
    makeSound() {
        console.log("Meow");
    }
}

class Cow extends Animal {
    // And so does the Cow class.
    makeSound() {
        console.log("Moooo");
    }
}

// --- Demonstrating Polymorphism ---

// Let's create a function that takes any Animal object and tells it to make a sound.
// This function doesn't know or care if the animal is a Dog, Cat, or Cow.
// It only knows that any 'Animal' will have a 'makeSound' method.
function triggerSound(animal) {
    console.log("The animal is about to make a sound...");
    animal.makeSound(); // The magic of polymorphism happens here!
}

// Now, let's create instances of our different animal classes.
const genericAnimal = new Animal();
const myDog = new Dog();
const myCat = new Cat();
const myCow = new Cow();

// Call the same function with different types of objects.
// Notice how the output of triggerSound() changes based on the object we pass in.
// This is polymorphism: one function call ('animal.makeSound()') leads to many
// different behaviors.

triggerSound(genericAnimal); // Output: Some generic animal sound
triggerSound(myDog);         // Output: Woof woof!
triggerSound(myCat);         // Output: Meow
triggerSound(myCow);         // Output: Moooo

console.log("--- Or using an array ---");
// This is a more common way to see polymorphism in action.
const farm = [new Dog(), new Cat(), new Cow()];

farm.forEach(animal => {
    // We treat every animal the same, but they behave differently.
    animal.makeSound();
});
