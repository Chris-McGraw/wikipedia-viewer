$(document).ready(function(){

/* ---------- Variable Declarations ---------- */

  searchTerm = "";
  currentTerm = "";
  expandContainer = false;

/* ---------- Function Declarations ---------- */

function getResults(){

  if(searchTerm !== "" && searchTerm !== currentTerm) {
    $("#results-container").empty();

    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&exsentences=1&explaintext&list=&generator=search&redirects=1&formatversion=2&origin=*&gsrsearch=" + searchTerm + "&gsrlimit=10", function(json) {
      if(json.query) {
        for(i = 0; i < json.query.pages.length; i++) {
          $("#results-container").append("<a class='result-frame-link' target='_blank' href=" + "https://en.wikipedia.org/?curid=" + json.query.pages[i].pageid + ">" + "<div class='result-frame'>" + "<div class='result-title'>" + json.query.pages[i].title + "</div>" + "<div class='result-desc'>" + json.query.pages[i].extract + "</div>" + "</div>" + "</a>");
        }

        /* json.query.pages.forEach(function(element){
          console.log(element.title);
          console.log(element.pageid);
          console.log(element.extract);
          console.log("");
        }); */
      }

      else {
        $("#results-container").append("<div class='result-none-frame'>" + "<div class='result-none-title'>" + "No Results" + "</div>" + "</div>");
      }
    });

    currentTerm = searchTerm;

    if(expandContainer === false){
      $("#results-container").slideToggle(750);
      expandContainer = true;
    }
  }

}

/* ---------- Event Handlers ---------- */

  $("#wiki-search-button").on("click", function(){

    searchTerm = document.getElementById("search-bar").value;

    getResults();

  });

  $("#search-icon").on("click", function(){
    $("#results-container").slideToggle(750);
  });
});
