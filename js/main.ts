
var go_btn_num = document.getElementById("num_btn");
var num_result = document.getElementById("num_result");
var usernum = document.getElementById("usernum");

var go_btn_year = document.getElementById("year_btn");
var useryear = document.getElementById("useryear");
var year_result = document.getElementById("year_result");


go_btn_num.addEventListener("click", function(){
    sendNumberRequest();
});

go_btn_year.addEventListener("click", function(){
    sendYearRequest();
});

function sendNumberRequest():void {
    var val = usernum.value;
    $.ajax({
        url: "https://numbersapi.p.mashape.com/"+val+"/trivia?fragment=true&json=false&notfound=floor",
        beforeSend: function (xhrObj){
            //Request Headers
            xhrObj.setRequestHeader("X-mashape-Key","5CnggNUJoBmshhFFO5ojds013Dwap1pYGfIjsnIyJU7seBUXmv");
            xhrObj.setRequestHeader("Accept","text/plaintext");
        },
        type: "GET",
        dataType: "text"
        
    })
    .done(function(data){
        var json = JSON.parse(data);
        num_result.innerHTML = "Is " + json.text;
    })
    .fail(function(error){
        num_result.innerHTML = "Something went horribly wrong";
        console.log(error.getAllResponseHeaders());
    });
}

function sendYearRequest():void {
    var year = useryear.value;
    $.ajax({
        url: "https://numbersapi.p.mashape.com/"+year+"/year?fragment=true&json=false&notfound=floor",
        beforeSend: function (xhrObj){
            //Request Headers
            xhrObj.setRequestHeader("X-mashape-Key","5CnggNUJoBmshhFFO5ojds013Dwap1pYGfIjsnIyJU7seBUXmv");
            xhrObj.setRequestHeader("Accept","text/plaintext");
        },
        type: "GET",
        dataType: "text"
        
    })
    .done(function(data){
        var json = JSON.parse(data);
        year_result.innerHTML = "Is when " + json.text;
    })
    .fail(function(error){
        year_result.innerHTML = "Something went horribly wrong";
        console.log(error.getAllResponseHeaders());
    });
}