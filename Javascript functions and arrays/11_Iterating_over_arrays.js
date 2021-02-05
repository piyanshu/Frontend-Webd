var arr = [2, 3, 4, 5, 6, 7];
function print(element)
{
    console.log(element);
}
for(var i=0; i<arr.length; i++)
{
    print(arr[i]);
}
arr.forEach(print);
// forEach helps to iterate over each element of an array 
// Ab harek element ke upar jo bhi kaam karana hai uska func create karenge aur us func ko forEach me pass kardenge
// forEach apne aap hi element pass kar rha hai print func ko
