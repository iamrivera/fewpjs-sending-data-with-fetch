function submitData(userName, userEmail){
    let userURL = 'http://localhost:3000/users'
    let userConfigObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
            })
        };
    
    return fetch(userURL, userConfigObject).then(function(response){
        return response.json();
    }).then(function(object){
        document.body.innerHTML = object['id'];
    }).catch(function(error){
        alert("Ruh Roh Shaggy!");
        document.body.innerHTML = error.message;
    });
};


// Seek clarity as to why this wouldn't qualify the test despite displaying the id on page
// const objectId = object['id'];
// let h2 = document.createElement("h2");
// h2.innerText = objectId;
// document.body.appendChild(h2);