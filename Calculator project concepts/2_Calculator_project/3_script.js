var button = document.getElementsByClassName('button');
var display = document.getElementById('display');
var op1, op2, op;
for(var i=0; i<button.length; i++)
{
    button[i].addEventListener('click', function(){
        // Agar hum kisi bhi button par click karenge to uska adress this ke andar aa jayega aur us button par getAttribute func call ho jayega
        // us func ke andar attribute pass karenge aur vo function us attribute ki value lake dega
        var value = this.getAttribute('data-value');
        if(value == '+')
        {
            op = '+';
            // display.textContent se display pe jo bhi kuch hoga hamare pass uski string aa jayegi aur parseFloat ki madad se hum use integer me convert kar denge.
            // display.textContent ki jagah humlog display.innerText bhi use kar sakte hain.
            op1 = parseFloat(display.textContent);
        }
        else if(value == '=')
        {
            op2 = parseFloat(display.textContent);
        }
        else
        {
            display.innerText += value;
        }
    });
}