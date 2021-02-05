// Humne bahut sari request asynchronous tareke se kari but humlog chahte ki vo sari request chain mein puri ho
// req1->req2->req3
// Humne req1 kari, ab req1 poori hone ke bad hi req2 ho, req2 poori hone ke baad hi req3 ho
// to humlog aisa kuch karenge

// $.ajax({
//     success: function(){
//         $.ajax({
//             success: function(){
//                 $.ajax({

//                 })
//             }
//         })
//     }
// })
// but yaha code structure neat nahi hai aur hard to understand

// to aise time par hum premises ko use karte hain

// checkUserLoggedIn().then(fetchUserfeed).then(fetchUserfriends).then(fetchUserMessages);