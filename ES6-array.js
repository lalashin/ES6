let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
  ];

//   for(let i=0; i<names.length;i++){
//     console.log(names[i])
//   }


//   names.forEach(function (item){
//     console.log(item)
//   })

  //names.forEach((item,index)=>{console.log(item,index)})

  let ceoList = [
    {name:"Larry Page", age:23, ceo:true},
    {name:"Tim Cook", age:40, ceo:true},
    {name:"Elon Musk", age:55, ceo:false}
  ]
  let data = ceoList.map((item)=>{
    return item.age
  })
  console.log(data)

  let data2 = names.filter((item)=>{
    return item.startsWith("L")
  })
  console.log(data2)

  let data3 = names.some((item)=>{
    return item.startsWith("M")
  })
  console.log("some:",data3)

  let data4 = names.every((item)=>{
    return item.length>0
  })
  console.log("every:",data4)

  let data5 = names.find((item)=>{
    return item.startsWith("L")
  })
  console.log("find:",data5)

  let data6 = names.findIndex((item)=>{
    return item.startsWith("L")
  })
  console.log("findIndex:",data6)