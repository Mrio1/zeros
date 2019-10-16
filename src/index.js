module.exports = function zeros(expression) {
  let arr = expression.split("*");
  let two = 0;
  let five = 0;

  for (let i = 0; i < arr.length; i++){
    if (arr[i].includes("!!")){
    let number = arr[i].slice(0,-2);
    if (number%2==0){
      twoCount(2,number, 2);
      fiveCount(2, number, 2);
      
    } else {
      twoCount(1,number, 2);
      fiveCount(1, number, 2);   
    }

    } else {
    let number = arr[i].slice(0,-1);
    twoCount(1,number, 1);
    fiveCount(1, number, 1);   

    }
  }

  function twoCount (start, end, step){
    for (let j = start; j <= end; j+=step){
      let check = j;
      while (check%2==0){
      check = check/2;
      two += 1;

    } 
    }
  }

  function fiveCount (start, end, step){
    for (let j = start; j <= end; j+=step){
      let check = j;
      while (check%5==0){
      check = check/5;
      five += 1;
    } 
    }
  }

  return Math.min(two, five);
}
