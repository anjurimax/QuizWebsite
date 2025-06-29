const oopsQuestions = [
  {
    q: "Which concept allows multiple methods with the same name but different parameters?",
    options: ["Inheritance", "Polymorphism", "Abstraction", "Encapsulation"],
    answer: 1,
  },
  {
    q: "Which of the following is not a pillar of OOP?",
    options: ["Encapsulation", "Polymorphism", "Inheritance", "Compilation"],
    answer: 3,
  },
  {
    q: "Which concept allows multiple methods with the same name but different parameters?",
    options: ["Inheritance", "Polymorphism", "Abstraction", "Encapsulation"],
    answer: 1,
  },
  {
    q: "Which keyword is used to create a class in JavaScript?",
    options: ["function", "class", "constructor", "object"],
    answer: 1,
  },
  {
    q: "Which of the following is NOT a pillar of OOP?",
    options: ["Encapsulation", "Polymorphism", "Compilation", "Abstraction"],
    answer: 2,
  },
  {
    q: "Which keyword is used to inherit a class in JavaScript (ES6)?",
    options: ["inherits", "extends", "implements", "super"],
    answer: 1,
  },
  {
    q: "What is the purpose of the constructor in a JavaScript class?",
    options: [
      "To destroy object properties",
      "To define class name",
      "To initialize object properties",
      "To execute static methods",
    ],
    answer: 2,
  },
  {
    q: "What does the `this` keyword refer to inside a class method?",
    options: [
      "The global object",
      "The parent class",
      "The class definition",
      "The instance of the class",
    ],
    answer: 3,
  },
  {
    q: "How is encapsulation achieved in modern JavaScript?",
    options: [
      "Using `public` keyword",
      "Using `var` and `let`",
      "Using `#` for private fields",
      "Using constructor functions only",
    ],
    answer: 2,
  },
  {
    q: "Which concept is used to hide internal implementation and show only necessary features?",
    options: ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"],
    answer: 2,
  },
  {
    q: "Which method type is shared by all instances of a class via its prototype?",
    options: [
      "Instance methods",
      "Constructor methods",
      "Static methods",
      "Prototype methods",
    ],
    answer: 3,
  },
  {
    q: "What is the correct way to define a static method in a JavaScript class?",
    options: [
      "function static myFunc()",
      "static myFunc()",
      "myFunc() static",
      "const static myFunc = () => {}",
    ],
    answer: 1,
  },
  {
    q: "How do you call a method from a parent class in a child class?",
    options: [
      "super.methodName()",
      "this.parent()",
      "callParent()",
      "base.methodName()",
    ],
    answer: 0,
  },
  {
    q: "What is prototype chaining in JavaScript?",
    options: [
      "Linking of async functions",
      "Creating a chain of event listeners",
      "Linking objects to inherit properties",
      "Combining multiple arrays",
    ],
    answer: 2,
  },
  {
    q: "Which of the following is true about method overriding in JS?",
    options: [
      "You cannot override methods in JS",
      "Overriding is only allowed in global scope",
      "Child classes can override parent methods",
      "Only static methods can be overridden",
    ],
    answer: 2,
  },
  {
    q: "What is the main benefit of using getters and setters?",
    options: [
      "To perform API requests",
      "To control access to object properties",
      "To create object literals",
      "To initialize static methods",
    ],
    answer: 1,
  },
  {
    q: "How can JavaScript achieve multiple inheritance?",
    options: [
      "Using multiple extends",
      "Using mixins and Object.assign()",
      "By calling two constructors",
      "It is not possible at all",
    ],
    answer: 1,
  },
  {
    q: "Which keyword is used to refer to the parent class constructor?",
    options: ["super", "this", "parent", "base"],
    answer: 0,
  },
  {
    q: "Which of the following defines encapsulation best?",
    options: [
      "Inheritance of properties from another class",
      "Binding data and methods that operate on the data into a single unit",
      "A class having multiple methods",
      "Defining multiple functions",
    ],
    answer: 1,
  },
  {
    q: "Which OOP concept allows objects to take on more than one form?",
    options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
    answer: 3,
  },
  {
    q: "Which keyword in JavaScript is used to define private class fields?",
    options: ["_", "private", "let", "#"],
    answer: 3,
  },
  {
    q: "What will happen if a class method is marked as static?",
    options: [
      "It can be accessed via class instance",
      "It can only be accessed outside the class",
      "It belongs to the class, not instances ✅",
      "It gets executed on object creation",
    ],
    answer: 2,
  },
  {
    q: "Which method is automatically called when an object is created from a class?",
    options: ["init()", "create()", "constructor()", "build()"],
    answer: 2,
  },
  {
    q: "Which concept is demonstrated when a child class provides a specific implementation of a method already defined in the parent class?",
    options: ["Abstraction", "Overriding", "Overloading", "Encapsulation"],
    answer: 1,
  },
  {
    q: "Which feature of OOP promotes code reuse?",
    options: ["Polymorphism", "Inheritance", "Encapsulation", "Abstraction"],
    answer: 1,
  },
  {
    q: "What does 'instanceof' operator do in JavaScript?",
    options: [
      "Checks for null values",
      "Checks prototype chain for constructor",
      "Creates new instance",
      "Checks memory address of an object",
    ],
    answer: 1,
  },
  {
    q: "In which of the following is method overloading directly supported in JavaScript?",
    options: [
      "Via function name reuse",
      "Using different number of parameters",
      "It is not natively supported",
      "Using varargs",
    ],
    answer: 2,
  },
];
