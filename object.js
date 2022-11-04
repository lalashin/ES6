// 4.배열

//let fruit = "banana"
//let fruit2 = "apple"
//let fruit3 ="grape"
//let fruit4 = "mango"

let fruit = ["banana", "apple", "grape", "mango"]
console.log(fruit)
console.log(fruit[3])

fruit[0]="cherry"
console.log(fruit)

fruit[2]="tomato"
console.log(fruit)

//pop():마지막에 있는 아이템을 뺌
fruit.pop()
console.log(fruit)
fruit.push("pineapple")
console.log(fruit)

//includes : 아이템이 배열에 포함하고있는가?
console.log(fruit.includes("apple"))
console.log(fruit.includes("pear"))

//indexOf : 아이템에 인덱스 번호를 알려줌
console.log(fruit.indexOf("apple"))

// 1부터 3번째 이전까지
let extrafruit = fruit.slice(1,3)
console.log(extrafruit)
console.log("original fruit",fruit)



//splice : 배열 아이템 잘라내는 역할 (시작점, 개수)
//fruit.splice(2,1)
//console.log(fruit)
fruit.splice(0,2)
console.log(fruit)