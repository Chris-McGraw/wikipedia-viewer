$(document).ready(function(){
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
