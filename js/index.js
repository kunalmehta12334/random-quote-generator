$(document).ready(function(){
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en",function(json){
           console.log(json.quoteText);
    });
  }
);
