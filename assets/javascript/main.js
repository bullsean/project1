$("#submit-button").on("click", function() {
    $("#row-weather").html('');
    var triviaQueryURL = "https://opentdb.com/api.php?amount=10";
    var jokeQueryURL = "https://icanhazdadjoke.com/";
    var city = $("#city-input").val();
    var keyword = $("#keyword-input").val();
    var weatherQueryURL = "https://api.openweathermap.org/data/2.5/forecast?appid=029b688e6e7c61bcc27ad9ebfa0f39a6&q=" + city;
    var zomatoQueryURL = "https://developers.zomato.com/api/v2.1/search?q=" + city;
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
        for (var i = 0; i<response.list.length ; i++) {
            if (i === 3 || i === 11 || i === 19 || i === 27 || i === 35) {
                console.log('This is loop number' + i);
                var weatherDiv = $('<div class="card" style="width: 10rem;"><div id="weatherPicDay'+ i +'" style="width: 50px"></div><div class="card-body"><h5 class="card-title" id="weatherDay'+ i +'-title" style="color: black"></h5><p class="card-text" id="weatherDate'+ i +'" style="color: black"></p></div></div>');
                $("#row-weather").append(weatherDiv);
                $('#weatherDay'+ i +'-title').text(response.list[i].weather[0].main);
                $('#weatherPicDay'+ i +'').html('<img class="card-img-top" id="weatherPicDay1" src="https://openweathermap.org/img/w/' + response.list[i].weather[0].icon +'.png" alt="Card image cap">');
                $('#weatherDate'+ i +'').text(moment(response.list[i].dt_txt).format('ddd, MMM D'));
                
            }
        }


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



