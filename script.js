$(document).ready(function(){

  searchTerms = "";

  /* $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&exsentences=1&explaintext&list=&generator=search&redirects=1&formatversion=2&origin=*&gsrsearch=giant%20bomb&gsrlimit=10", function(json) {
    json.query.pages.forEach(function(element){
      console.log(element.title);
      console.log(element.extract);
      console.log("");
    });
  }); */

  $("#wiki-search-button").on("click", function(){
    searchTerms = document.getElementById("search-bar").value;

    if(searchTerms !== "") {
      console.log(searchTerms);
    }

    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&exsentences=1&explaintext&list=&generator=search&redirects=1&formatversion=2&origin=*&gsrsearch=giant%20bomb&gsrlimit=10", function(json) {
      json.query.pages.forEach(function(element){
        console.log(element.title);
        console.log(element.extract);
        console.log("");
      });
    });
  });

  /* $("#wiki-search-button").on("click", function(){
    $("#results-container").slideToggle(750);
  }); */

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
