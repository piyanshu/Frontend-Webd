var name = "file1";
setTimeout(function(){
    console.log(name);
}, 1000);

// Here name var will be created and the value will be assigned is file1
// Then setTimeout funcfunc will be called but the func will be excuted after 1 sec
// To 1 sec ke andar andar script2 vali file execute hogi 
// aur vaha name variable redeclare nahi ho rha bas value dobara assign ho rahi hai file2 .. uske baad file2 ke andar vala name print hoga
// Phir uske baad func execute hoga uske andar jo name print ho rh hai uske andar value file2 hogi
