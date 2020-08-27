function getUniqueElements(array) {
    let mass=[];
    array.sort();
    let temp=array[0];
    mass.push(temp);
    for ( let i=1; i<array.length; i++ ) {
        if(temp!==array[i]){
            mass.push(array[i]);
            temp=array[i];
        }
    }
    return mass;
}
console.log(getUniqueElements([1,2,22,22,22,23,'b','r','rr','ty','r']));
