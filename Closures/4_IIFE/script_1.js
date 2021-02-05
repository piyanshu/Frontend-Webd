/*
function print(){
    var name = "file1";
    setTimeout(function(){
        console.log(name);
    }, 1000);
}
*/
// When we create any variable having same name in both files its value is reassign
// We have to prevent the variable name in the global scope..so we assign it in the func.
// But it arises two problems

/* 1. if we create the func with same name in both files..after calling it creates problem
   2. Now print func will be created in global scope
*/

// So we can use IIFE(Immediately invoked func expression)
(function(){
    var name = "file1";
    setTimeout(function(){
        console.log(name);
    }, 1000);
})();
// output is 
// file2 file1