let rs= require('readline-sync');
const operator = getOperation();
let firstNumb = getNumber('first')
let secondNumb = getNumber('second')


function getOperation() {
 const  operators = ['+','-' , '*','/'];
 const operator = rs.question('What operation do you want to perform ? ');
 if (!operators.includes(operator)){
  console.log('That is not a valid operation');
   return getOperation()
 }
 return operator
}
function getNumber(order) {
  const numb = rs.question(`Please enter the ${order} number `);
  const number = parseFloat(numb);
   if (!number){
   console.log('This is not a number');
    return getNumber(order);
  }
 
  return Number(numb);
 }

function calculate() {
if( operator == '+'){
  return firstNumb + secondNumb;
}else if( operator == '-'){
  return firstNumb - secondNumb;
}else if( operator == '*'){
  return firstNumb * secondNumb;
}else if( operator == '/'){
  return firstNumb / secondNumb;
}

}

function calculator(operator,firstNumb,secondNumb){
 operator
 firstNumb
 secondNumb 
 const total = calculate();
 console.log(`The answer is ${total}`)
}
calculator();
 





// // 
// function getSecondNumber() {
  //   const secondNumb= rs.question('Please enter the second number ');
  //   const number = parseFloat(secondNumb);
  //    if (!number){
  //    console.log('This is not a number');
  //     return getSecondNumber();
  //   }
   
  //   return Number(secondNumb);
  //  }
  //  const secondNumb = getSecondNumber();
  
//look into the input variable in the example and how it uses .prompt
// I think we've found the loop
//goal: make a loop that compares intro to all the operational 
//////////values and pushes the value equal to intro in to the math array.

//find a way to restate the question once wrong 

//possible .find method 

//let instigate = operations.find(operation => operation.intro)


// the start to a forloop (doesnt work right now)
// for (let i = 0; i < operations.length; i++){
  //   if (i != intro){
  //     math.push('That is not a valid operation')
  //   } else if(i == intro){
  // math.push(i)
  //   }
  // }


  // for (let i =0; i < operations.length; i++){
  //   if (start(operations[i]) === operations[i]){
  //   math = operations[i];
  //   break
  //   } else if ( start() !== operations[i]){
  //    math ='That is not a valid operation'; 
  //   }
  //   }
