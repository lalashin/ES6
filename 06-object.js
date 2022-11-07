//객체
let patient = {
    name : "jimin",
    age : 17,
    disease : "cold"
}

console.log(patient)
console.log(patient.age)
console.log(patient["name"])

//이름을 바꾸고 싶을 때
patient.name = "jk"
patient["age"] = 25
console.log(patient)

let patientList = [{name:"jimin",age:13}, {name:"jk",age:25}, {name:"jhope", age:40}]

console.log(patientList)
console.log("첫번째 환자는: ",patientList[0])
console.log("첫번째 환자의 나이는?", patientList[0].age)
console.log("첫번째 환자의 나이는?", patientList[0]["age"])
console.log("두번째 환자의 이름:",patientList[1].name)