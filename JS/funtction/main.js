function player () {
    console.log(`ronaldo is the best player 1`);
}
player();




let player1 = ()=>{
    console.log(`ronaldo is the best from player 2`);
    
}

player1();

// console.log(player1);


let player2 = function () {
    console.log(`ronaldo is the best from player 3`);
}

player2();



let obj = {
    name : "ronaldo",
    age : 38,
    country : "portugal"
}


// console.log(obj);
// console.log(obj.name);

// let printobj= (obj)=>{
//     console.log(obj);
    
// }
// printobj(obj);


// for (let key in obj){
//     console.log(key, obj[key]);
// } 


let pp = (oo)=>{
   for (let key in oo){
    console.log(key, oo[key]);
   }
}

// pp(obj);




let arr = [1,2,3,4,5];

// arr.forEach((elment)=>{
//     console.log(elment);

// }
// )



arr.forEach((value, index, arr) => {
    console.log(value, index, arr);
});






