export const cleanUpAndDistribute = (totalAmount, arr) => {
  let sum = 0;
  arr.forEach((v, i) => { 
    sum += v.amount
  });
  if(sum === totalAmount){
    return arr; 
  } else {
    const residual = totalAmount - sum;
    const randIndex = Math.floor(Math.random()*arr.length);
    return arr.map((v, i) => i === randIndex ? {...v, amount: (v.amount+residual).toFixed(2)} : v)
  }
}