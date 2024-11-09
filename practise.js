function aws(arr){
    let newValues=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]===String('israr')){
            newValues.push('yehi vo index ha jispy israr likha hua ha hahhaha')
        }
        else{
            newValues.push(arr[i]);
        }
    }
    return newValues;
}
console.log(aws(['israr',1,2,3,4]));


function checkdata(data){
    let newData=[];
    if(data.includes('a','e','o','u')){
        newData.push('these are wovels');  
    }
    else{
        newData.push('constants')
    }
    return newData;

    }

console.log(checkdata('aeou'));