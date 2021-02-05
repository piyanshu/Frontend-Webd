function displayImage(data)
{
// Method - 1
    // $('<img>',{
    //     src: data.url
    // }).appendTo('#image-container');
// Method - 2
    var img = $(document.createElement('img'));
    img.attr('src', data.url);
    img.appendTo('#image-container');
}
$.ajax({
    url: 'https://api.nasa.gov/planetary/apod?',
    method: 'GET',
    success: displayImage,
    // These are query parameters
    // Query parameters are a defined set of parameters attached to the end of a url.
    // They are extensions of the URL that are used to help define specific content or actions based on the data being passed. 
    // To append query params to the end of a URL, a '? ' Is added followed immediately by a query parameter.
    data: {
        // They can use the api key to authenticate us. To prove that i am a valid user
        api_key: 'DEMO_KEY',
        date: '2018-09-06'
    }
})