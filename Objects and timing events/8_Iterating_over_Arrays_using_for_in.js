var arr = [20, 30, 40, 50];
arr[10] = 'dd';
arr.prop1 = 'demo';
for(var i in arr){
    console.log(i, arr[i]);
}
/*
0 20
1 30
2 40
3 50
10 dd
prop1 demo
*/