function empty(){
    
    $('.card-columns').html('');
    $("#row-weather").html('');
    $(".welcome").text('');
    $(".row-weather").html('');
    $(".row-news").html('');
    $(".row-joke").html('');
    $("#city-input").val('');
    $("#name-input").val('');
    $("#keyword-input").val('');

}

$("#submit-button").on("click", function() {
    $("#input-search").addClass("fadeOutUpBig");
    $("#container-fluid2").addClass("fadeInUpBig");
    $("#container-fluid2").attr("style", "margin-top:-50vh");
    $("#weatherQuestion").toggle();
    $("#newsQuestion").toggle();
    
    
    var name = $("#name-input").val();
    var triviaQueryURL = "https://opentdb.com/api.php?amount=10";
    var jokeQueryURL = "https://icanhazdadjoke.com/";
    var city = $("#city-input").val();
    var keyword = $("#keyword-input").val();
    var zomatoQueryURL = "https://developers.zomato.com/api/v2.1/search?q=" + city;
    var newsUrl = 'https://newsapi.org/v2/top-headlines?source=bbc-news&q=' + keyword + '&apiKey=7366515f5173476eb141e59de078bc65';
    var weatherQueryURL = "https://api.openweathermap.org/data/2.5/forecast?appid=029b688e6e7c61bcc27ad9ebfa0f39a6&q=" + city;
    
    empty();
    $("#container-fluid2").prepend("<div class='welcome'><h3 class='h4'>Welcome " + name +"! Let's get started!</h3></div><br><br>")
    $.ajax({
        url: triviaQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.results[0].question);
        $(".row-question").append("<h4 class='h4'>Lull in the convo? Here is a trivia question!</h4><div class='card trivia-text'><p class='p'>"+ response.results[0].question + "?</p></div><div class='card trivia'><p class='p'>Options: <li>"+ response.results[0].incorrect_answers[0] +"</li> <li>"+ response.results[0].incorrect_answers[1]+ "</li> <li>"+ response.results[0].incorrect_answers[2] + "</li><li>" + response.results[0].correct_answer + "</li></p></div>")
        $(".qbutton").append("<button id='qbutton' class=' btn btn-danger'>Click to reveal!</button><br><br>")
        $("#qbutton").on("click", function(){
            
            $(".answer").append("<div class='card card-body'>" + response.results[0].correct_answer + " </div><br><br>")
            $("#qbutton").hide();
            $(".trivia").hide();
        })
    });

    $.ajax({
        url: jokeQueryURL,
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    }).then(function (joke) {
        console.log(joke);
        $(".row-joke").append("<h4 class='h4'>Have a laugh with your mate!</h4><div class='card'><div class='card-body trivia-text'><p class='p'>" + joke.joke + "</p></div></div><br><br>");



    });


    $.ajax({
        url: weatherQueryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (var i = 0; i < response.list.length; i++) {
            if (i === 3 || i === 11 || i === 19 || i === 27 || i === 35) {
                console.log('This is loop number' + i);
                console.log(response.list[i].main.temp)
                var kelTemperature = response.list[i].main.temp;
                var weatherType = response.list[0].weather[0].description;

                function tempConversion(kelTemperature) {
                    return Math.ceil(((kelTemperature - 273.15) * 1.80) + 32);
                };
                var weatherDiv = $('<div class="card" style="width: 8rem;"><div id="weatherPicDay' + i + '" style="width: 50px"></div><div class="card-body"><h5 class="card-title" id="weatherDay' + i + '-title" style="color: black"></h5><p class="card-text" id="weatherDate' + i + '" style="color: black"></p></div></div>');
                $("#row-weather").append(weatherDiv);
                $('#weatherDay' + i + '-title').text(tempConversion(kelTemperature) + "°F");
                $('#weatherPicDay' + i + '').html('<img class="card-img-top" src="https://openweathermap.org/img/w/' + response.list[i].weather[0].icon + '.png" alt="Card image cap">');
                $('#weatherDate' + i + '').text(moment(response.list[i].dt_txt).format('ddd, MMM D'));
                $("#weatherQ").text(weatherType);

            }
        }


    });

    $.ajax({
        url: zomatoQueryURL,
        method: "GET",
        headers: {
            "user-key": "a7aef2e9343cea29c41366c8092a682f"
        }
    }).then(function (response) {
        console.log(response);
    });


    $.ajax({
        url: newsUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $(".row-news").append("<h4 class='h4'>Headline news for today!</h4>");
        $(".row-news").append("<div id='row-news'></div>"); 
        for (var j = 0; j < response.articles.length; j++) {
            
            var img = ("<img src=" +response.articles[j].urlToImage + "><br>");
            var link = ("Link: <a href=" + response.articles[j].url + " target='_blank'> Click to view full news</a><br>");
            var title = ("<h5 style='font-weight: bold;'>" +response.articles[j].title + "</h5>"+"<br>");
            var description = ("Description: " +response.articles[j].description + "<br>");
            var published = ("Published on: " +response.articles[j].publishedAt + "<br>");
            var source = ("<p>Source: " +response.articles[j].source.name + "</p>"+"<br>");
            
            
            var addRow = ("<div class='card'>"+ title + img + "<div class='card-body'><h5 class='card-title'>" + description + "</p><p class='card-text'>" + link + "</p></div></div>")
            
            $("#row-news").addClass("card-columns")   
            $("#row-news").append(addRow);




        }

    })
});



