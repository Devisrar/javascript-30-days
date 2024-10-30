
function age(num){
try{
    if(num<17){
console.log('your a teen ager');
}
else{
    console.log('you are an adult');
}
}
catch(error){
console.log(error);
}
}
let result=age(18);