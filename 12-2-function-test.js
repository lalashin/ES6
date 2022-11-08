//4.

function meetAt(year,month,date){
  //console.log(year,month,date)
  if(date){
    return `${year}/ ${month}/ ${date}`   
  }else if(month){
    return `${year}년 ${month}월`   
  }else if(year){
    return `${year}년`
  }
}

console.log(meetAt(2022,11,7))

