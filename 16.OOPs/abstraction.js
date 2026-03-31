// Abstraction Example

// Abstraction is the concept of hiding the complex implementation details
// and showing only the essential features of the object. It helps to reduce
// complexity and increase efficiency.

// Imagine a remote control for a TV. You press the "power" button, and the TV
// turns on. You don't need to know about the electrical signals, the circuits,
// or the power-on sequence. The complexity is hidden, and you are provided with
// a simple interface (the button).

class Car {
    // These methods can be considered "private" by convention (using an underscore).
    // They represent the complex, internal logic of the car. A user of the
    // Car object should not need to call these directly.

    _startEngine() {
        console.log("Engine started: Checking fuel, oil, and starting ignition sequence...");
    }

    _applyBrakes() {
        console.log("Brakes applied: Hydraulic pressure increased, brake pads engaged.");
    }

    _engageTransmission() {
        console.log("Transmission engaged: Ready to move.");
    }

    // These are the public methods. They provide a simple, high-level interface
    // for interacting with the car. This is the "abstraction".

    /**
     * Starts the car.
     * This method abstracts away the complex sequence of starting the engine
     * and engaging the transmission.
     */
    start() {
        this._startEngine();
        this._engageTransmission();
        console.log("Car is ready to drive.");
    }

    /**
     * Stops the car.
     * This abstracts the action of applying the brakes.
     */
    stop() {
        this._applyBrakes();
        console.log("Car has stopped.");
    }
}

const myCar = new Car();

// We interact with the car using the simple, abstracted methods.
// We don't need to know the details of _startEngine() or _applyBrakes().
console.log("--- Using the Car ---");
myCar.start();
myCar.stop();

// We could try to call the "internal" methods, but the underscore convention
// signals to other developers that these should not be used directly.
console.log("--- Calling internal methods (not recommended) ---");
myCar._startEngine();
