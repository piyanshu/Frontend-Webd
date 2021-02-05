// HTTP (Hypertext Transfer Protocol)
// HTTP madad karta ki client se request kaise jayegi..server se response kaise ayega
// Steps
// 1. Client opens up the connection with server
// 2. Client makes a request with server
// 3. Server will process up the request
// 4. server will send the response to the client
// 5. Client will close the connection

// Types of request 
// 1. Get - To fetch the data from server
// 2. Post - To send some result to the server to store
// 3. Delete - To delete some resource from server
// 4. Patch
// 5. Put

// Server responds with the status codes like 200 - successful, 401 - unauthorised access, 404 - error
// HTTP protocol is a stateless protocol
/* Stateless - client ne request1 di server ne respond diya..same client ne request2 di.
to server yaad nahi rakhega ki pehle vali request same client se thi. sari request ek doosre se independent hoti hain */
// Ajax used HTTP protocol to transfer data