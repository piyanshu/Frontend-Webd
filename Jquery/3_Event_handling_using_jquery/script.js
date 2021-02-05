$('div').css({
    height : '100px',
    width : '100px',
    backgroundColor : 'yellow'
});
// $('div').click(function(){
//     alert('Div clicked');
// });

// div.width() hume width lake dega..uske 20 add hoga..ab result me string px add karenge to vo pure result badal dega 
$('div').on('click', function(){
    var div = $(this);
    div.width(div.width() + 20 + 'px');
    alert('Div clicked');
});
$('a').on('click', function(event){
    event.preventDefault();
    alert('Anchor tag clicked');
});