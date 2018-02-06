$(document).ready(function(){

  searchTerms = "";

  $("#wiki-search-button").on("click", function(){

    $("#results-container").empty();
    searchTerms = document.getElementById("search-bar").value;

    if(searchTerms !== "") {
      console.log(searchTerms);

      $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&exsentences=1&explaintext&list=&generator=search&redirects=1&formatversion=2&origin=*&gsrsearch=" + searchTerms + "&gsrlimit=10", function(json) {

        for(i = 0; i < json.query.pages.length; i++){
          $("#results-container").append("<div class='result-frame-2'>" + "<div class='result-title'>" + json.query.pages[i].title + "</div>" + "<div class='result-desc'>" + json.query.pages[i].extract + "</div>" + "</div>");
        }

        json.query.pages.forEach(function(element){
          console.log(element.title);
          console.log(element.extract);
          console.log("");
        });
      });

      $("#results-container").slideToggle(750);

    }
  });

  $("#search-icon").on("click", function(){
    $("#results-container").slideToggle(750);
  });

  /* $("#search-icon").on("click", function(){
    $("#results-container").empty();
    $("#results-container").append("No Results Found");
  }); */

});
