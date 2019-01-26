$("#submit-button").on("click", function() {
    var triviaQueryURL = "https://opentdb.com/api.php?amount=10";
    var jokeQueryURL = "https://icanhazdadjoke.com/";
    var city = $("#city-input").val();
    var keyword = $("#keyword-input").val();
    var weatherQueryURL = "https://api.openweathermap.org/data/2.5/weather?appid=029b688e6e7c61bcc27ad9ebfa0f39a6&q=" + city;
    var zomatoQueryURL = "https://developers.zomato.com/api/v2.1/search?q=" + city
    var newsUrl= 'https://newsapi.org/v2/top-headlines?q=' + keyword + '&apiKey=7366515f5173476eb141e59de078bc65';

    $.ajax({
        url: triviaQueryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });

    $.ajax({
        url: jokeQueryURL,
        method: "GET",
        headers: {
            // "User-Agent":  "My Library (https://github.com/bullsean/project1)",
            "Accept" : "application/json"
        }
    }).then(function(response) {
        console.log(response);
    });


    $.ajax({
        url: weatherQueryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });

    $.ajax({
        url: zomatoQueryURL,
        method: "GET",
        headers: {
            "user-key": "a7aef2e9343cea29c41366c8092a682f"
        }
    }).then(function(response) {
        console.log(response);
    });


    $.ajax({
        url:newsUrl,
        method: "GET"
    }).then (function(response){
        console.log(response);
        for (var j = 0; j < response.articles.length; j++) {
            
            // $("#news").append("Rating: "+ response.status.totalResults + "<br>"+"<br>");
            $("#row-news").append("<img src=" +response.articles[j].urlToImage + " width='200'><br>");
            $("#row-news").append("<p>Link: " +response.articles[j].urlToImage + "</p>"+"<br>");
            $("#row-news").append("<p>Content: " +response.articles[j].content + "</p>"+"<br>");
            $("#row-news").append("<p>Description: " +response.articles[j].description + "</p>"+"<br>");
            $("#row-news").append("<p>Published on: " +response.articles[j].publishedAt + "</p>"+"<br>");
            $("#row-news").append("<p>Source: " +response.articles[j].source.name + "</p>"+"<br>");
            
          }


    })

});



