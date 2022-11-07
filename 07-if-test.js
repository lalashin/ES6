//if문 문제

//1. 유저가 입력하는 숫자가 0인지 음성인지 양성인지 판단하는 프로그램을 만드시오
/*let num = 0

if(num < 0){
    console.log("음수입니다.")
}else if(num = 0){
    console.log("0입니다.")
}else{
    console.log("양수입니다.")
}*/

//2. 나는 대학교 교수다. 레포트 점수에따라 등급을 매기는 프로그램을 만드시오

/*let jumsu = 55

if (jumsu >= 90) {
    console.log("A학점")
}else if(jumsu < 90 && jumsu >= 80) {
    console.log("B학점")
}else if(jumsu < 80 && jumsu >= 70) {
    console.log("C학점")
}else if(jumsu < 70 && jumsu >= 60) {
    console.log("D학점")
}else{
    console.log("F학점")
}

let score =  98
let grade =''
if(90<=score && score<=100){
  grade = "A"
}else if(80<=score && score<=89){
  grade = "B"
}else if(70<=score && score<=79){
  grade ="C"
}else if(60<=score && score<=69){
  grade="D"
}else if(0<=score && score<=59){
  grade="F"
}else {
  console.log("잘못된 범위의 점수입니다")
}
console.log(grade)*/

/*3. 한 지원자가 우리회사에 지원을했다. 지원자가 사용가능한 스킬은 배열에 제공이 된다
let skills = ["HTML","CSS","Javascript","React"]
Javascript와 React 둘다 할줄 안다면 “합격!” Javascript와 React 둘중 하나만 할줄 안다면 “예비”, 두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오*/

let skills = ["HTML","CSS","Javascript","React"]
let js = skills.includes("Javascript")
let ra = skills.includes("React")

if( js && ra) {
    console.log("합격")
}else if( js || ra ){
    console.log("예비")
}else{
    console.log("불합격")
}