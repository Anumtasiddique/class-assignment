//Define object type using interface
interface cartype{
    brand :string
    model:String
    year:number
}

let car1:cartype={
    brand:"Honda",
    model:"civic",
    year:2023,
}
console.log(car1);

let car2: cartype={
brand:"Ford",
model:"Mustang",
year:2022,
}
console.log(car2);

let car3:cartype={
    brand:"chevrolet",
    model:"Camaro",
    year:2024,
}
console.log(car3)



//Nested object in data types in typescript


type clothing={
    type:string;
    color:string
    size:{chest:number  , waist: number};
}
let shirt:clothing={
   type:"shirt",
    color:"blue",
    size:{
        chest:40,
        waist:36,
    }
}
console.log(shirt)

//array of object <<<<<< ---------[{}]---------
let student=[
    {
        name:"ali",
        age :20,
    },
    {
        name :"sana",
        age :19,
    }
]
console.log(student);

//----------type alias---------
type userstring=string;
let username:userstring = "anumta"
console.log(username);

type numberalias=number;
let number:numberalias= 10;
console.log(number)

type laptop=string;
let product:laptop="laptopstring";
console.log(product);

