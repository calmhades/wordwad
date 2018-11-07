$(document).ready(function(){
    
    //User log in form
    $("#userForm").on("submit",function(){
        console.log("userForm submit has been pressed");
        event.preventDefault();
      
        var userInfo = {

          username: $("#userName").val(),
          password: $("#password").val(),
          }

        console.log(userInfo);

          
        $.post("/login", userInfo).then(function(data) {
          console.log(data);
        });
          
        $("#userName").val("");
        $("#password").val("");
      });


   


    //This needs to be changed to submit if it is a form.
    $("#newUserForm").on("submit", function(event){
        console.log("New User has been submitted")
        event.preventDefault();
      
        var newUser = {
          firstName: $("#first_name").val(),
          lastName: $("#last_name").val(),
          username: $("#userName").val(),
          password: $("#password").val(),
          email: $("#email").val()
          
        };
        console.log(newUser);
        
        $.post("/api/users", newUser)
        .then(function(data){
          console.log(data);
      
        });
  
        $("#first_name").val("");
        $("#last_name").val("");
        $("#userName").val("");
        $("#password").val("");
        $("#email").val("");   
    });

    
    
    //from addChoice.js file.
    $("#newChoice").on("click", function(event){
        event.preventDefault();
      
        var newChoice = {
          body_text: $("#newChoice").val(),
          
        };
        console.log(newChoice);
        
        $.post("/api/entry/:id", newChoice)
        .then(function(data){
          console.log(data);
      
        });
    
        $("#newChoice").val("");
        
      });

      



//add entry click handler from createEntry.js
$("#add-entry").on("click", function(event){
    event.preventDefault();
    
    let body_text;

    var newEntry = 
    {
      text: $("#body-text"),
      
    }
    
    $.post("/api/entry", newEntry)
    .then(function(data){
      console.log(data);
  
    });
    $("#body-text").val("");
   
  });




  //from goIndex.js
  $("#every-story").on("click", function(event){
    event.preventDefault();
  
    let posts;

   $.get("/browseWads", posts)
   .then(function(data){
  
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
        
        });
    });


  //add story click function from startstory.js
  $("#storyCreate").on("submit", function(event){
    event.preventDefault();
  
    console.log("this is working")
    
    var newStory = {
      Title: $("#title").val().trim(),
      Genre: $("#genre").val().trim(),
  
    };

    $.post("/api/story", newStory)
    .then(function(data){
      console.log(data);
  
    });

    $.get("/api/story", function(data) {
      console.log("DATA HERE DATA HERE DATA HERE" + data)
    });

      //   var firstEntry = {
      //   text: $("#newStory").val().trim(),
      //   rootId: ""
      // }

      // $.post("/api/entry", firstEntry)
      // .then(function(data) {
      //   console.log(data)
      // })


   
    $("#title").val("");
    $("#genre").val("");
    $("#newStory").val("");

    //NEEDS WORK
    // var handleStorySubmit = function(event) {
    // event.preventDefault();
    // //Probably need to alter these names
    // var story = {
    //   title: storybegins.title.val().trim(),
    //   genre: storybegins.genre.val().trim(),
    //   root_entry_id: storybegins.root_entry_id.val().trim(),
    //   newStory: storybegins.newStory.val().trim()
    // };
  

    // //Probably need to alter these names
    // if (!(storybegins.title && storybegins.genre && storybegin.root_entry_id)) {
    //   alert("You must enter title, genre, and body text!");
    //   return;
    //     }
    // };
    });


    //end of script
});
















