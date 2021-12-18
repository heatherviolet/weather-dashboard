var getWeather = function() {
    
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}").then(function(response) {
    response.json().then(function(data) {
    console.log(data);
    });
 });

};


//var userSearchEl = document.querySelector("#search-form")

//var searchSubmissionHandler = function(event) {
  //  event.preventDefault();
    //console.log(event);
//}

// userSearchEl.addEventListener("search", searchSubmissionHandler);

//fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}")
   // .then(response => {
  //      return response.json();
   // }).then(data =>{
   //     console.log(data);
  //  })


//var getCurrentWeather = function(repo) {
  //  console.log(repo);

    //var apiUrl = "api.openweathermap.org/data/2.5/onecall?lat=38.8&lon=12.09&callback=test";
//};