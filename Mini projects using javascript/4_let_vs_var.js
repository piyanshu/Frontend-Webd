for(var i=1; i<=5; i++)
{
    setTimeout(function(){
        console.log(i);             // 6 6 6 6 6 6
    }, 1000);
}
/*
i=1 --> 1000ms
i=2 --> 1000ms
i=3 --> 1000ms
i=4 --> 1000ms
i=5 --> 1000ms
i=6 --> stop
In the above case i = 1 will print after 1sec.
When i=1 is printed, i=2 will print after 1sec.
When i=6 it comes out of the loop then all the func will execute and print all the i as we know here the scope of i is global scope.
*/
for(let i=1; i<=5; i++)
{
    setTimeout(function(){
        console.log(i);
    }, 1000);
}
/*
setInterval --> i=1
setInterval --> i=2
setInterval --> i=3
setInterval --> i=4
setInterval --> i=5
In the above case same thing is happened i=1 will print after 1sec and when i=6 it comes out of the loop.
But in this i=1 is bound to only first iteration and i=2 will bound to second iteration. i will not be accessible outside the function
*/