$(document).ready(function(){



    //newUserSubmit
    $("#userLogin").on("click", function(event){
        event.preventDefault();
      
        var loginUser = {
        
          userName: $("#userName").val(),
          password: $("#password").val(),
        
          
        };
        console.log(loginUser);
        
        $.post("/api/login", loginUser)
        .then(function(data){
          console.log(data);
      
        });
    
    
        
        $("#userName").val("");
        $("#password").val("");
        
        
       
      
      });
    
    });