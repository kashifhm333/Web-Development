# Day 34 ORP - Object-Oriented Programming & Classes

## Overview
Learn Object-Oriented Programming with ES6 classes - organize code into reusable, maintainable objects.

## Files in This Project

### 📄 `index.html`
HTML for class demonstrations

### ⚙️ `class-extend.js`
Class inheritance and extension

### ⚙️ `script.js`
Class demonstrations

## ES6 Classes

### Basic Class
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

let dog = new Animal("Dog");
dog.speak();  // "Dog makes a sound"
```

### Constructor
```javascript
class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
}

let person = new Person("John", 30, "john@example.com");
console.log(person.greet());
```

## Properties and Methods

### Instance Properties
```javascript
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.speed = 0;
    }
    
    // Instance method
    accelerate() {
        this.speed += 10;
        return this.speed;
    }
    
    brake() {
        this.speed = Math.max(0, this.speed - 10);
        return this.speed;
    }
    
    getInfo() {
        return `${this.brand} ${this.model}, Speed: ${this.speed}`;
    }
}

let myCar = new Car("Toyota", "Camry");
console.log(myCar.accelerate());  // 10
console.log(myCar.getInfo());     // "Toyota Camry, Speed: 10"
```

### Static Methods
```javascript
class Utils {
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
}

console.log(Utils.add(5, 3));       // 8
console.log(Utils.multiply(5, 3));  // 15
```

### Getters and Setters
```javascript
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    // Getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    
    // Setter
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

let person = new Person("John", "Doe");
console.log(person.fullName);  // "John Doe"

person.fullName = "Jane Smith";
console.log(person.firstName);  // "Jane"
```

## Inheritance

### Extends Keyword
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

// Dog inherits from Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name);  // Call parent constructor
        this.breed = breed;
    }
    
    speak() {
        console.log(`${this.name} barks`);
    }
    
    getInfo() {
        return `${this.name} is a ${this.breed}`;
    }
}

let dog = new Dog("Buddy", "Golden Retriever");
dog.speak();           // "Buddy barks"
console.log(dog.getInfo());  // "Buddy is a Golden Retriever"
```

### Super Keyword
```javascript
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    
    info() {
        return `Brand: ${this.brand}`;
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);  // Call parent constructor
        this.model = model;
    }
    
    info() {
        return super.info() + `, Model: ${this.model}`;
    }
}

let car = new Car("Toyota", "Camry");
console.log(car.info());  // "Brand: Toyota, Model: Camry"
```

## Practical Examples

### Bank Account Class
```javascript
class BankAccount {
    constructor(accountNumber, owner, balance = 0) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this._balance = balance;  // Private by convention
    }
    
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposited $${amount}`);
        }
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`Withdrew $${amount}`);
        } else {
            console.log("Insufficient funds");
        }
    }
    
    getBalance() {
        return this._balance;
    }
}

let account = new BankAccount("12345", "John", 1000);
account.deposit(500);      // "Deposited $500"
account.withdraw(200);     // "Withdrew $200"
console.log(account.getBalance());  // 1300
```

### Todo List Class
```javascript
class TodoList {
    constructor() {
        this.todos = [];
    }
    
    add(task) {
        this.todos.push({
            id: Date.now(),
            text: task,
            completed: false
        });
    }
    
    remove(id) {
        this.todos = this.todos.filter(t => t.id !== id);
    }
    
    complete(id) {
        let todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = true;
        }
    }
    
    getAll() {
        return this.todos;
    }
    
    getPending() {
        return this.todos.filter(t => !t.completed);
    }
}

let list = new TodoList();
list.add("Buy groceries");
list.add("Learn JavaScript");
console.log(list.getAll());
```

### Employee Hierarchy
```javascript
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    
    getSalary() {
        return this.salary;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
        this.subordinates = [];
    }
    
    addSubordinate(employee) {
        this.subordinates.push(employee);
    }
    
    getTeamSalary() {
        return this.salary + 
               this.subordinates.reduce((sum, emp) => sum + emp.getSalary(), 0);
    }
}

let manager = new Manager("John", 100000, "Engineering");
manager.addSubordinate(new Employee("Jane", 60000));
manager.addSubordinate(new Employee("Bob", 55000));
console.log(manager.getTeamSalary());  // 215000
```

## Learning Outcomes
✅ Create classes with constructors
✅ Add properties and methods
✅ Use static methods
✅ Implement getters and setters
✅ Use inheritance with extends
✅ Call parent methods with super
✅ Create practical class-based applications

## Common Mistakes
❌ Forgetting `new` keyword when instantiating
❌ Not calling `super()` in child constructor
❌ Confusing static methods with instance methods
❌ Not using `this` correctly
❌ Making everything a class (not always necessary)

## Best Practices
✅ Use classes for complex objects
✅ Keep classes focused and single-purpose
✅ Use inheritance wisely (composition often better)
✅ Use static methods for utilities
✅ Document class purpose and methods
✅ Use meaningful class and method names

## Next Steps
→ Move to **Day 35** to learn about Node.js and modules

---

*Classes help organize and structure code for better maintainability!* 📦
