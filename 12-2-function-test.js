//4.

// function meetAt(year,month,date){
//   //console.log(year,month,date)
//   if(date){
//     return `${year}/ ${month}/ ${date}`   
//   }else if(month){
//     return `${year}년 ${month}월`   
//   }else if(year){
//     return `${year}년`
//   }
// }

// console.log(meetAt(2022))

// meetAt(2022); //결과 2022년
// meetAt(2023, 3); // 결과 "2023년 3월"
// meetAt(1987, 10, 28); //결과 "1987/10/28"

function meetAt(year,month,date) {
 // console.log(year,month,date);
  if(date) {
    return `${year}/ ${month}/${date}`
   
  }else if(month) {
    return `${year}년 ${month}월`
  }else if(year){
    return `${year}년`
  }
}

console.log(meetAt(2022,1,6));