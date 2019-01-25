$(document).ready(function(){
    $(".btn").on("click", function(event){
        var city = $("#city").val();
        
        event.preventDefault();
        if(city === ""){
            alert("Please Enter the City Name. Thank you")
        }
        else{
            queryUrl= 'https://newsapi.org/v2/top-headlines?' + 'country=' + city + '&' +
            'apiKey=7366515f5173476eb141e59de078bc65';
            $.ajax({
                url:queryUrl,
                method: "GET"
            }).then (function(response){
                console.log(response);
                $("#news").append(response);
                // location.href = "main.html";
            })
        }

    })

    $("#back").on("click", function(){

        location.href = "index.html";

    })
})

