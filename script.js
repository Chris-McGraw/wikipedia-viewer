$(document).ready(function(){

  /* $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&origin=*&srsearch=giant%20bomb", function(json) {
    console.log(json.query.search[0].title);
    console.log(json.query.search[0].snippet);

    console.log(json.query.search[1].title);
    console.log(json.query.search[2].title);
    console.log(json.query.search[3].title);
    console.log(json.query.search[4].title);
    console.log(json.query.search[5].title);
    console.log(json.query.search[6].title);
    console.log(json.query.search[7].title);
    console.log(json.query.search[8].title);
    console.log(json.query.search[9].title);
  }); */

  $("#wiki-search-button").on("click", function(){
    $("#results-container").slideToggle(750);
  });

  $("#search-icon").on("click", function(){
    $("#results-container").slideToggle(750);
  });

  /* $("#search-icon").on("click", function(){
    $("#results-container").empty();
    $("#results-container").append("No Results Found");
  }); */

  $(".result-frame").on("mouseenter", function(){
    $(this).addClass("hover-frame");
  });
  $(".result-frame").on("mouseleave", function(){
    $(this).removeClass("hover-frame");
  });

  $(".result-frame-2").on("mouseenter", function(){
    $(this).addClass("hover-frame");
  });
  $(".result-frame-2").on("mouseleave", function(){
    $(this).removeClass("hover-frame");
  });

});
