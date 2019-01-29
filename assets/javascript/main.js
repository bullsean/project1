$("#submit-button").on("click", function() {
    $('.card-columns').html('');
    var triviaQueryURL = "https://opentdb.com/api.php?amount=10";
    var jokeQueryURL = "https://icanhazdadjoke.com/";
    var city = $("#city-input").val();
    var keyword = $("#keyword-input").val();
    var weatherQueryURL = "https://api.openweathermap.org/data/2.5/weather?appid=029b688e6e7c61bcc27ad9ebfa0f39a6&q=" + city;
    var zomatoQueryURL = "https://developers.zomato.com/api/v2.1/search?q=" + city;
    var newsUrl = 'https://newsapi.org/v2/top-headlines?source=bbc-news&q='+ keyword +'&apiKey=7366515f5173476eb141e59de078bc65';
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

            var img = ("<img src=" +response.articles[j].urlToImage + "><br>");
            var link = ("Link: <a href=" + response.articles[j].url + " target='_blank'> Click to view full news</a><br>");
            var title = ("<p style='font-weight: bolder;'>Title: " +response.articles[j].title + "</p>"+"<br>");
            var description = ("Description: " +response.articles[j].description + "<br>");
            var published = ("Published on: " +response.articles[j].publishedAt + "<br>");
            var source = ("<p>Source: " +response.articles[j].source.name + "</p>"+"<br>");
            
            
            var addRow = ("<div class='card'>"+ title + img + "<div class='card-body'><h5 class='card-title'>" + description + "</p><p class='card-text'>" + link + "</p></div></div>")

                
            $("#row-news").append(addRow);
                
               
            

          }


    })

});



