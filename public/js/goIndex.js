$(document).ready(function(){

var posts;

//when "browse" is clicked, this is what would make all of the stories from
//the db pop up, I think. 
$("#every-story").on("click", function(event){
  event.preventDefault();

 $.get("/browseWads", posts)
 .then(function(data){



{
  for (var i = 0; i < data.length; i++) {
      var storySection = $("<div>");
      storySection.addClass("all-stories");
      storySection.attr("id", "story-well-" + i);
      $("#story-section").append(storySection);
  
  
     
      $("#story-well-" + i).append("<h2>" + data[i].title + "</h2>");
      $("#story-well-" + i).append("<h3>Genre: " + data[i].genre + "</h3>");
      $("#story-well-" + i).append("<h3>ID: " + data[i].root_entry_id + "</h3>");
      $("#story-well-" + i).append("<h3>" + data[i].newStory + "</h3>");
     
  }

}
});










})
});
