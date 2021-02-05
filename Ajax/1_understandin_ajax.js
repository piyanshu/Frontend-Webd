// AJAX (Asynchronous Javascript And XML)
// Suppose humare pass ek facebook page hai..usme humne kisi ek post par like kara..aur color change hoga
// jab humne like par click kara..to request jayegi server ke pass
// ab server ke pass response dene ke 2 options hain
// 1. response mein naya html page provide kare jisme like pe color change hoga..aur browser page ko reload kar dega
  // jab kabhi bhi page reload hota hai purana page hatta hai aur naya page aata hai
// 2. vo sirf itni hi information provide kare jisse ki like pe color change ho jayega usi page me..aur page reload nahi hoga
// Hum 2nd option prefer karte hain kyunki agar purane page me sirf 1% change ho rha hai to hum naya page kyun provide karen
// 2nd option ko achieve karne ke ajax use hota hai  

// Synchronous -  Do requet hain r1 and r2. jab r1 puri hogi uske baad hi vo r2 pe jayega..to vo r1 ke pure hone ka wait karega
// Asynchronous - r1 puri ho ya na ho vo r2 pe pe chala jayega. Eg - setTineout func behaves likely asynchronous
// XML - The request is of type XML HTTP request and response from the server is also in the form of XML
// But XML is not widely used because it difficult to process it.
// So the widely used format for the response is JSON (Javascript Object Naotation)