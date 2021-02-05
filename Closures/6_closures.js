var i = 10;
function outer(){
    var j = 20;
    console.log(i, j);
    var inner = function(){
        var k = 30;
        console.log(j, k);
    } 
    return inner;
}
var inner1 = outer();
inner1();
// output
// 10 20
// 20 30

// At line 11 outer func will be called at that time its execution context will be created
// This outer func will returns inner func. After return its execution context will be finished 
// When its execution context will be finished its all the variables will be deallocate
// But at line 12 we called inner func which prints variables j and k
// But how it can prints variable j it can created in outer func which was already finished and its variables also

// The reason behind it is concept of closures w.r.t inner func
// It is the combination of function + lexical environment in which the func is created(jab outer func ne inner func ko return kara hoga inner1 ke andar to us time inner1 ke pass reference aa gaya hoga outer func ka)
// closure concept vahi lagega jis bhi scope mein hum logon ne func ko create kara hoga..us scope se bahar func ko call kara jaye
// inner func ko outer func ke andar create kara lekin inner func ko call kara outer func ke bahar