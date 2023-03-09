
//객체 초기화
// let name = "noona";
// let age = 17;

//let person ={name, age}
//let person ={name:name, age:age} //올드한방식
//let person = {nameValue:name,ageValue:age};

// let person ={name, age}

// console.log(person)

//console.log(`제이름은 ${name}입니다 제 나이는 ${age}입니다`)

//let array = [1,2,3]

// let a= array[0]
// let b= array[1]
// let c= array[2]

//let [a,b,c] = array
//let [a,...rest] = array

//console.log(rest)

// let person = {
//     name:"noona",
//     age:19,
//     cute:true
// }

// let {name,...restInfo} = person

// console.log(name, restInfo)

// let a=[1,2]
// let b=[3,4]
// let c=[5,6]

//let result = a.concat(b,c)
// let result = [...a,...b,...c]
// console.log(result)

// function foo(){
//     console.log(hello)
// }

// let foo = () =>{
//     console.log("hello")
// }

// function foo(){
//     console.log("kkekeke")
//     return "haha"
// }

// let foo = () =>"haha"
// console.log(foo())

let age = 17
let person = {
    name:"hehe",
    age:20,
    getInfo:() => {
        console.log(this)
    }
}

person.getInfo()