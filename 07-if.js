//if문
//if(조건문){
// 조건문이 충족하면 할일들
// 조건이 충족하면 true 조건을 실행한다.    
//}

/*
if(조건){
    조건이 true일 경우 들어옴
}else if(또 다른 조건){
    조건이 true일 경우 들어옴
}else if(또 다른 조건){
    조건이 true일 경우 들어옴 
}else {
    모든 조건이 false인 경우 들어옴 
}

범위는 작은것 부터 큰것 순으로 정리합니다.
*/

let age = 21
let licence = false

//18~20 
// && : 그리고
// || : 이거나
// == : A와 B는 같냐?
// != : A와 B는 같지않다
if(age > 20 ){
    if(licence != true){
        console.log("운전이 가능합니다.")
    }else{
        console.log("면허를 따세요")
    }
}else {
    console.log("운전이 불가능합니다.")
}