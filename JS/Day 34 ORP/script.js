// let player ={
//     name:"Ronaldo",
//     club:"real madrid"
// }

// console.log(player);


// class Player{
//     constructor(name, club){
//         this.name = name;
//         this.club = club;
//     }

// }


class Cat {
  constructor(givenName) {
    // this.name = givenName; // Takes the input and "sticks" it to the object
    console.log(`this is`,givenName);
    
  }
}

// const cat1 = new Cat("Luna");
// const cat2 = new Cat("Milo");






//                  This.
class Person {
  constructor(name) {
    // 1. WITHOUT 'this' (Local Variable)
    let localName = name; 

    // 2. WITH 'this' (Object Property)
    this.storedName = name;

    console.log("Inside Constructor - Local:", localName); 
    console.log("Inside Constructor - Stored:", this.storedName);
  }

  speak() {
    // This will work because it's attached to the object
    console.log("Speak function says: Hi " + this.storedName);

    // This will CRASH or say 'undefined' because localName died 
    // the moment the constructor finished.
    try {
      console.log("Speak function says: Hi " + localName);
    } catch (err) {
      console.log("Speak function says: I don't know who localName is!");
    }
  }
}

//const user = new Person("Alice");
//user.speak();

//console.log(user.storedName); // Works, prints "Alice"






