//for 문

//i=i+1 i++
/*
for(let i =0;i<=10;i++){
  if(i%2==0){
    console.log("주님!!!!!",i) 
  }
}
*/

//i+=2 => i=i+2
//i+=5 => i=i+5
//i+=1 => i=i+1
//두칸씩 뛰기 때문에 속도가 더 빠르다
/*for(let i =0;i<=10;i+=2){
  
    console.log("주님!!!!!",i) 
  
}*/

//2중 for문
/*for(let i=2;i<=9;i++){
  //console.log(i)
  for(let a=1;a<=9;a++){
    console.log(i+"*"+a+"="+i*a)
  }
}*/

//정확한 범위가 없는 조건문
/*while(buttonclick==true){
  console.log("while문",i)
  i++;
}*/

let fruit = ["banana","apple","grappe","mango"]

for(let i=0;i<fruit.length;i++){
  console.log(fruit[i])
}