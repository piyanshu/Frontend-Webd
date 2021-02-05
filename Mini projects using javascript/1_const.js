const a = 10;
console.log(a);         // 10

const b;                // Error: Missing initialiser in const declaration
console.log(b);            

const c = 10;           // Error: c is const variable
c = 20;
console.log(c);

console.log(d);
const d = 10;           // Error: Cannot access d before initialisation

// Const are only read only variables. We have to initialise them at the time of declaration 
// In last case hoisting of const d will not takes place
