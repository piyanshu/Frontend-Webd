function fetchRandomDogImage()
{
    // METHOD - 1
    // $.ajax({
    //     url: 'https://dog.ceo/api/breeds/image/random',
    //     method: 'GET',
    //     // agar request successful to handler func execute hoga
    //     // jo bhi response hoga vo data ke andar aa jayega
    //     success: function(data){
    //         // The response is already in JSON type format so we can extract our URL 
    //         var imageUrl = data.message;
    //         $('#dog-image').attr('src', imageUrl);
    //     }
    // }).fail(function(){
    //      console.log('Request Failed');
    // });

    // METHOD - 2
    // passing the url and the handler function
    $.get('https://dog.ceo/api/breeds/image/random', function(data){
        var imageUrl = data.message;
        $('#dog-image').attr('src', imageUrl);
    }).fail(function(xhr, textStatus, errorThrown){
        console.log('Request Failed');
    });
}
$('#fetch-dog-image-button').click(fetchRandomDogImage);