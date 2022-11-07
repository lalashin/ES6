//switch문과 삼항연산식

let menu = 5
/*if(menu == 1) {
  console.log("물건사기")
}else if(menu == 2) {
  console.log("잔고확인")
}else if(menu == 3) {
  console.log("히스토리확인")
}else{
  console.log("홈으로 돌아가기")
}
*/
/*switch (menu){
  case 1 : 
    console.log("물건사기")
    break;
  case 2 :
    console.log("잔고확인")
    break;
  case 3 :
    console.log("히스토리확인")
    break;
  default :
    console.log("홈으로 돌아가기")  

}*/

/*삼항연산식 
조건?true일때 : false 일때
*/

/*if(menu <= 3){
  console.log("범위안에 숫자입니다.")
}else{
  console.log("범위밖의 숫자입니다.")
}*/

let answer = menu <=3?"범위안의 숫자입니다." : "범위밖의 숫자입니다."

console.log(answer)