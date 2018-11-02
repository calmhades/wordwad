// Get references to page elements

var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
$("#add-story").on("click", function(event){
  event.preventDefault();

  var newStory = {
    root_entry_id: $("root-entry-id").val().trim(),
    title: $("title").val().trim(),
    genre: $("genre").val().trim(),
  };
  $.post("/api/story", newStory)
  .then(function(data){
    console.log(data);

  });
  $("#root-entry-id").val("");
  $("#title").val("");
  $("#genre").val("");

});

$("#add-entry").on("click", function(event){
  event.preventDefault();

  var newEntry = {
    body_text: $("body-text")
  };
  
  $.post("/api/entry", newEntry)
  .then(function(data){
    console.log(data);

  });
  $("#body-text").val("");
 

});

$("#add-user").on("click", function(event){
  event.preventDefault();

  var newUser = {
    user_name: $("user_name"),
    user_email: $("user_email"),
    user_password: $("user_password")
  };
  
  $.post("/api/login", newUser)
  .then(function(data){
    console.log(data);

  });
  $("#user_name").val("");
  $("#user_email").val("");
  $("#user_password").val("");
 

});

$("#every-story").on("click", function(event, data){
  event.preventDefault();
  for (var i = 0; i < data.length; i++)
{
    // for each character that our server sends us back
    for (var i = 0; i < data.length; i++) {
      // create a parent div for the oncoming elements
      var storySection = $("<div>");
      // add a class to this div: 'well'
      storySection.addClass("all-stories");
      // add an id to the well to mark which well it is
      storySection.attr("id", "story-well-" + i);
      // append the well to the well section
      $("#story-section").append(storySection);
  
      // Now add all of our character data to the well we just placed on the page
  
     
      $("#story-well-" + i).append("<h2>" + data[i].title + "</h2>");
      $("#story-well-" + i).append("<h3>Genre: " + data[i].genre + "</h3>");
      $("#story-well-" + i).append("<h3>ID: " + data[i].root_entry_id + "</h3>");
      
     
  }

}
});




// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
createStory.on("click", "POST", createStory);
submitEntry.on("click", "POST", submitEntry);
getAll.on("click", "GET", getAll);
createLogin.on("click", "POST", createLogin);
getOne.on("click", "GET", getOne);
