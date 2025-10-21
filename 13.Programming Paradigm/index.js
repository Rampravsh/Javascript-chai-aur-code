const content = {
  imperative: {
    title: "Imperative Programming",
    explanation:
      "Imperative programming is a paradigm that uses statements that change a program's state. In simple terms, you tell the computer *how* to do something.",
    example: `// Imperative approach
function doubleArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]`,
  },
  declarative: {
    title: "Declarative Programming",
    explanation:
      "Declarative programming is a paradigm that expresses the logic of a computation without describing its control flow. You tell the computer *what* you want to do, not how to do it.",
    example: `// Declarative approach
function doubleArray(arr) {
    return arr.map(num => num * 2);
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]`,
  },
  functional: {
    title: "Functional Programming",
    explanation:
      "Functional programming is a paradigm where programs are constructed by applying and composing functions. It is a declarative paradigm that avoids changing state and mutable data.",
    example: `// Functional approach
const double = (n) => n * 2;
const doubleArray = (arr) => arr.map(double);

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]`,
  },
  oop: {
    title: "Object-Oriented Programming",
    explanation:
      "Object-Oriented Programming (OOP) is a paradigm based on the concept of 'objects', which can contain data and code. The main principles are encapsulation, inheritance, and polymorphism.",
    example: `// Object-Oriented approach
class Doubler {
    constructor(numbers) {
        this.numbers = numbers;
    }

    double() {
        return this.numbers.map(num => num * 2);
    }
}

const numbers = [1, 2, 3, 4, 5];
const doubler = new Doubler(numbers);
const doubledNumbers = doubler.double();
console.log(doubledNumbers); // [2, 4, 6, 8, 10]`,
  },
  prototype: {
    title: "Prototype-based Programming",
    explanation:
      "Prototype-based programming is a style of object-oriented programming in which behavior reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.",
    example: `// Prototype-based approach
const doubler = {
    double: function(arr) {
        return arr.map(num => num * 2);
    }
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubler.double(numbers);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]`,
  },
  async: {
    title: "Asynchronous Programming",
    explanation:
      "Asynchronous programming is a means of parallel programming in which a unit of work runs separately from the main application thread and notifies the calling thread of its completion, failure or progress. The main benefits of this approach are improved application performance and responsiveness.",
    example: `// Asynchronous approach
function doubleArrayAsync(arr, callback) {
    setTimeout(() => {
        const doubled = arr.map(num => num * 2);
        callback(doubled);
    }, 1000);
}

const numbers = [1, 2, 3, 4, 5];
doubleArrayAsync(numbers, (doubledNumbers) => {
    console.log(doubledNumbers); // [2, 4, 6, 8, 10]
});`,
  },
  // event: {\n        title: 'Event-driven Programming',\n        explanation: 'Event-driven programming is a programming paradigm in which the flow of the program is determined by events such as user actions (mouse clicks, key presses), sensor outputs, or messages from other programs/threads.',\n        example: `// Event-driven approach\nconst button = document.querySelector('button');\n\nbutton.addEventListener('click', () => {\n    console.log('Button clicked!');\n});`\n    },\n    frp: {\n        title: 'Functional Reactive Programming (FRP)',\n        explanation: 'Functional Reactive Programming (FRP) is a programming paradigm for reactive programming (asynchronous dataflow programming) using the building blocks of functional programming (e.g. map, filter, reduce). FRP has been used for programming graphical user interfaces (GUIs), robotics, games, and music.',\n        example: `// Functional Reactive Programming (FRP) approach\n// Using RxJS library\nconst { fromEvent } = rxjs;\nconst { scan } = rxjs.operators;\n\nconst button = document.querySelector('button');\n\nfromEvent(button, 'click')\n    .pipe(\n        scan(count => count + 1, 0)\n    )\n    .subscribe(count => console.log(\`Clicked ${count} times\`));`\n    },\n    dataflow: {\n        title: 'Dataflow Programming',\n        explanation: 'Dataflow programming is a programming paradigm that models a program as a directed graph of data flowing between operations, thus implementing dataflow principles and architecture.',\n        example: `// Dataflow approach\n// Using a simple dataflow library\nfunction createNode(operation) {\n    return {\n        inputs: [],\n        outputs: [],\n        operation: operation,\n        connect: function(node) {\n            this.outputs.push(node);\n            node.inputs.push(this);\n        },\n        process: function(data) {\n            const result = this.operation(data);\n            this.outputs.forEach(node => node.process(result));\n        }\n    };\n}\n\nconst add = (a, b) => a + b;\nconst multiply = (a, b) => a * b;\n\nconst addNode = createNode((data) => add(data, 5));\nconst multiplyNode = createNode((data) => multiply(data, 2));\n\naddNode.connect(multiplyNode);\n\naddNode.process(10); // Result will be (10 + 5) * 2 = 30`\n    }
};

const contentContainer = document.getElementById("content");
const buttons = document.querySelectorAll("nav button");

function loadContent(paradigm) {
  const paradigmData = content[paradigm];
  contentContainer.innerHTML = `
        <div class="paradigm-content">
            <h2>${paradigmData.title}</h2>
            <p>${paradigmData.explanation}</p>
            <pre><code>${paradigmData.example}</code></pre>
        </div>
    `;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    loadContent(button.dataset.paradigm);
  });
});

// Load the imperative content by default
loadContent("imperative");
