$('#para1').html('Welcome');
// rough idea how dollar func works??
/*
    function $(query){
        return document.querySelector(query);
    }
*/
// But dollar func will return jquery object not a javascript object. Jquery object has html func not javascript object

// $('#para2').hide();

// paras me jquery object hoga..jiske pass do p tags honge.Hum jquery object ko javascript aur jquery dono ki tarah accesss kar sakte hai
var paras = $('p');
paras.html('changed');
// eq func hume particular index ka jquery object return karta hai
var p1 = paras.eq(0);
p1.html('para1');
// agar hum is tarah se kisi bhi element ko access karenge to humare pass javascript object ayega
var p2 = paras[1];
p2.innerText = "hey";

// Jquery has more properties than DOM 
// To convert javascript object into jquery object
var newp2 = $(p2);
newp2.html('hii');