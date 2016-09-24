
var go_btn_num = document.getElementById("num_btn");
var num_result = document.getElementById("num_result");
var usernum = document.getElementById("usernum");

var go_btn_year = document.getElementById("");

go_btn_num.addEventListener("click", function(){
    sendNumberRequest();
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