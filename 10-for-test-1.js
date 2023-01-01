//반복문 문제
/*for(let i =0;i<=10;i++){
  console.log(i)
}*/

//1. 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.
/*let sum = 0
for(let i=1; i<=100 ; i++){  
  sum+=i
  
}
console.log(sum)*/

//2. 1부터 100까지 홀수만 출력하자.
/*for(let i=1; i<=100 ; i+=2){  
  console.log(i)
  
}*/


let n =1
let isPrime = true

if (n ===1){// 1은 소수가 아님 
    isPrime = false
}
for(let i=2;i<n;i++){
  if(n % i == 0){
    isPrime =  false 
  }
}
console.log(isPrime)
