// rest parameters
// rest opeartors

const sumUp= (cb,...numbers)=>{
    // console.log(numbers);
    let sum=0;
    for(let i of numbers){
      sum+=i;
    }
    cb(sum)
  }
  function showResult(sum){
  console.log("Sum is >>", sum);
  }
  
  sumUp(showResult,1,2,3,4,5,6,7,8,9,10)
  