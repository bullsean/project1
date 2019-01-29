$("#submit-button").on("click", function() {
    $("#input-search").addClass("fadeOutUpBig");
    $('.card-columns').html('');
    $("#row-weather").html('');
    var triviaQueryURL = "https://opentdb.com/api.php?amount=10";
    var jokeQueryURL = "https://icanhazdadjoke.com/";
    var city = $("#city-input").val();
    var keyword = $("#keyword-input").val();
    var zomatoQueryURL = "https://developers.zomato.com/api/v2.1/search?q=" + city;
    var newsUrl = 'https://newsapi.org/v2/top-headlines?source=bbc-news&q='+ keyword +'&apiKey=7366515f5173476eb141e59de078bc65';
    var weatherQueryURL = "https://api.openweathermap.org/data/2.5/forecast?appid=029b688e6e7c61bcc27ad9ebfa0f39a6&q=" + city;

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
    }).then(function(joke) {
        console.log(joke);
        $("#row-joke").append("<div class='card'><h2>Dad Joke</h2><div class='card-body'><p>" + joke.joke + "</p></div></div>")

                
            
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



