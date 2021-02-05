var a = 1;
if(a){
    console.log('True');
} 
else{                            // True
    console.log('false');
}
// Javascript do not gives any error when we redeclare any variable
var a = 10;      
if(a){
    console.log('True');
}
else{                           // True
    console.log('False');
}
// In above cases if we take the value of a as null, undefined, 0, ' ', then result is false otherwise result is true
