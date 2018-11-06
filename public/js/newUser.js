$(document).ready(function(){



//newUserSubmit
$("#newUserSubmit").on("click", function(event){
    event.preventDefault();
  
    var newUser = {
      first_name: $("#first_name").val(),
      last_name: $("#last_name").val(),
      userName: $("#userName").val(),
      password: $("#password").val(),
      email: $("#email").val()
      
    };
    console.log(newUser);
    
    $.post("/api/create", newUser)
    .then(function(data){
      console.log(data);
  
    });


    $("#first_name").val("");
    $("#last_name").val("");
    $("#userName").val("");
    $("#password").val("");
    $("#email").val("");
    
   
  
  });

});