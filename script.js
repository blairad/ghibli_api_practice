const app = document.getElementById("root");
const logo = document.createElement('img');
logo.src = './images/logo.png'
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo)
app.appendChild(container)

// create a request variable and assign a new XMLHttpRequest object to it
let request = new XMLHttpRequest()

// open new connection using the GET request on the url endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function(){
    //access JSON data here
    //use JSON.parse() to parse the response, and create a data variable that contains all the JSON as an array of JavaScript objects.
    let data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400){
        data.forEach(movie => {
            console.log(movie.title)
            console.log(movie.description)
            // console.log(movie.director)
        });
    } else {
        console.log('error')
    }

    
}

//send request
request.send()