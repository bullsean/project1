$("#weather").on("click", function() {
    var triviaQueryURL = "https://opentdb.com/api.php?amount=10";
    var jokeQueryURL = "https://icanhazdadjoke.com/";
    var city = $("#cityName").val();
    var weatherQueryURL = "https://api.openweathermap.org/data/2.5/weather?appid=029b688e6e7c61bcc27ad9ebfa0f39a6&q=" + city;
    var zomatoQueryURL = "https://developers.zomato.com/api/v2.1/search?q=" + city

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
    }).done(function(response) {
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

});



