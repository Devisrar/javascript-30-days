function findZeroSum(array){
  for(let number of array){
    for(let j=1;j<array.length;j++){
    if(number+array[j]===0){
     return [number,array[j]]   
    }
    }
  }
}
console.log(findZeroSum([-5,-4,1,2,3,4]));
