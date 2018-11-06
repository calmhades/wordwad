$(document).ready(function(){
    
    //User log in form
    $("#userForm").on("submit",function(){
        console.log("userForm submit has been pressed");
        event.preventDefault();
      
        var loginUser = {
        
          username: $("#userName").val(),
          password: $("#password").val(),
        
          
        };
        console.log(loginUser);
        
        $.post("/api/login", loginUser)
        .then(function(data){
          console.log(data);
      
        });
      
        var userInfo = {

        username: $("#userName").val(),
        password: $("#password").val(),
        }
        
        $.get("/api/login", userInfo)
        .then(function(data){
          console.log(data);
          if (userName === loginUser.username && password === loginUser.password){
            window.location.href="/index";
          } else {
            alert("Credentials do not match. Please try again.")
          };
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
        body_text: $("#body-text")
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
    };
    });


    //end of script
});
















