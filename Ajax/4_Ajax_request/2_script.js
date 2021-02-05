function fetchRandomDogImage(){
    // To make the XMLHttpRequest
    var xhrRequest = new XMLHttpRequest();
    // It is the handler when the response is received what we can do
    xhrRequest.onload = function(){
        // humare pass jo response aya hai usme se hume image url extract karna hai
        // But ye pura response string me hai, to hum pehle ise JSON me convert karenge phir extract karenge 
        console.log(xhrRequest.response);
        // To convert the string into JSON 
        var JSONresponse = JSON.parse(xhrRequest.response);
        // Extracting the message key from an object
        var imageUrl = JSONresponse.message;
        $('#dog-image').attr('src', imageUrl);
    };
    // If the Request fails by any reason, we can make handler for that
    xhrRequest.onerror = function(){
        console.log('Request Failed');
    }
    // Initialising the request
    // It takes three arguements 
    // 1. Method of request
    // 2. Whatever is your request
    // 3. true - Asynchronous, false - synchronous and true by default
    // Asynchronous - Humne request kari, phir bhi aage code execute hoga, jab response ana hoga to notify hoga 
    // synchronous - Humne request kari to wo wait kara response ke liye aage code further execute nahi hoga
    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
    // Making the request to the server
    xhrRequest.send();
}
// accessing the button element and pass the func which can be executed after clicking the button
$('#fetch-dog-image-button').click(fetchRandomDogImage);

// convert JSON object to string - JSON.stringify
// convert string to JSON - JSON.parse