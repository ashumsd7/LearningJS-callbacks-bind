// rest parameters
// rest opeartors

// const sumUp= (cb,...numbers)=>{
//     // console.log(numbers);
//     let sum=0;
//     for(let i of numbers){
//       sum+=i;
//     }
//     cb(sum)
//   }

  const combine= (cb, operation, ...numbers)=>{
    // console.log(numbers);
    let sum=0;
    for(let i of numbers){
        if(operation=== 'ADD'){
            sum+=i;
        }
        else{
            sum-=i;
        }
      
    }
    //always will be passed after bind args
    // in this case this will be addes after msgtext 
    cb(sum) 
  }
 
  function showResult(msgText,sum){
  console.log(msgText+ '  ' + sum);
  }
  //this takes atleast two args first this, 2nd and above as many as you want 
  combine(showResult.bind(this, "This result after adding all number is"),'ADD',1,2,3,4,5,6,7,8,9,10)

  combine(showResult.bind(this, "This result after subtracting all number is"),'SUBTRACT',100,5,7,8,9,5,12,12,11)
  