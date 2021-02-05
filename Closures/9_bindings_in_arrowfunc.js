function Person(name){
    this.name = name;
    console.log(this);
    // setTimeout(function(){
    //     console.log(this);
    // }, 1000);
    // The above func has bounding to their own this variable. to is wajah se vo bahar vale this ki value ko nahi le rha
    
    setTimeout(() => {console.log(this);}, 1000);
    // Arrow function do not have bounding to their own this variable.to agar arrow 
}
var p = new Person("PIYANSHU");