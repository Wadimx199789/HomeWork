function isPrimitive(number){
    if(number===1) return true;
    else{
    for(let i=2;i<Math.sqrt(number);i++){
        if(number%i===0){
            return false;
        }
        return true;
    }}
}
console.log(isPrimitive(1));