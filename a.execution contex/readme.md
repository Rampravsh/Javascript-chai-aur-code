# JavaScript Execution Context

In JavaScript, the execution context is an abstract concept that holds information about the environment where the current code is being executed. It has two main components:

1.  **Memory Component (Variable Environment):** This is where all the variables and functions are stored as key-value pairs.
2.  **Code Component (Thread of Execution):** This is where the code is executed one line at a time.

There are two types of execution contexts in JavaScript:

1.  **Global Execution Context (GEC):** This is the default execution context that is created when a JavaScript file is first loaded.
2.  **Function Execution Context (FEC):** This is created whenever a function is called.

## How JavaScript Code is Executed

When a JavaScript file is loaded, the JavaScript engine creates the global execution context. The execution happens in two phases:

1.  **Memory Creation Phase:** In this phase, the JavaScript engine allocates memory to all the variables and functions. For variables, it stores `undefined`, and for functions, it stores the entire function code.
2.  **Code Execution Phase:** In this phase, the JavaScript engine executes the code line by line.

### Example

Let's consider the following JavaScript code:

```javascript
var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);
```

Here's how the execution context would look for this code:

#### Global Execution Context (During Memory Creation Phase)

```
Memory:
n: undefined
square: function { ... }
square2: undefined
square4: undefined
```

#### Global Execution Context (During Code Execution Phase)

1.  `n` is assigned the value `2`.
2.  The `square` function is called with `n` (which is `2`) as an argument. A new function execution context is created.

#### Function Execution Context for `square(2)` (During Memory Creation Phase)

```
Memory:
num: undefined
ans: undefined
```

#### Function Execution Context for `square(2)` (During Code Execution Phase)

1.  `num` is assigned the value `2`.
2.  `ans` is calculated as `2 * 2 = 4`.
3.  The function returns `ans`, which is `4`. The function execution context is deleted.

4.  The returned value (`4`) is assigned to `square2`.
5.  The `square` function is called again with `4` as an argument. A new function execution context is created.

#### Function Execution Context for `square(4)` (During Memory Creation Phase)

```
Memory:
num: undefined
ans: undefined
```

#### Function Execution Context for `square(4)` (During Code Execution Phase)

1.  `num` is assigned the value `4`.
2.  `ans` is calculated as `4 * 4 = 16`.
3.  The function returns `ans`, which is `16`. The function execution context is deleted.

4.  The returned value (`16`) is assigned to `square4`.

## The Execution Stack

The execution stack, also known as the call stack, is a stack that keeps track of all the execution contexts. The global execution context is at the bottom of the stack, and whenever a function is called, its execution context is pushed onto the top of the stack. When the function returns, its execution context is popped off the stack.
