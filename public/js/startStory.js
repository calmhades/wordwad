$(document).ready(function(){

$("#add-story").on("click", function(event){
    event.preventDefault();
  
    var newStory = {
      root_entry_id: $("#root-entry-id").val().trim(), //Do we need this?
      title: $("#title").val().trim(),
      genre: $("#genre").val().trim(),
      newStory: $("#newStory").val().trim(),
    };
    $.post("/api/story", newStory)
    .then(function(data){
      console.log(data);
  
    });
    $("#root-entry-id").val(""); //Do we need this here?
    $("#title").val("");
    $("#genre").val("");
    $("#newStory").val("");

    //NEEDS WORK
var handleStorySubmit = function(event) {
    event.preventDefault();
  //Probably need to alter these names
    var story = {
      title: storybegins.title.val().trim(),
      genre: storybegins.genre.val().trim(),
      root_entry_id: storybegins.root_entry_id.val().trim(),
      newStory: storybegins.newStory.val().trim()
    };
  

    //Probably need to alter these names
    if (!(storybegins.title && storybegins.genre && storybegin.root_entry_id)) {
      alert("You must enter title, genre, and body text!");
      return;
    }
  
    
  s};
});
});