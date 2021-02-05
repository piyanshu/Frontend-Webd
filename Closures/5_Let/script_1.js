{
    let name = "file1";
    setTimeout(function(){
        console.log(name);
    }, 1000);
}
//let variables can be created in a local scope.
// So window object doesnot have the property name 