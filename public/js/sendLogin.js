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
      
        var userInfo = {

        userName: $("#userName").val(),
        password: $("#password").val(),
        }
        
        $.get("/api/login", userInfo)
        .then(function(data){
          console.log(data);
          if (userName === loginUser.userName && password === loginUser.password){
            window.location.href="/index";
          } else {
            alert("Credentials do not match. Please try again.")
          };
        });
    
        
        $("#userName").val("");
        $("#password").val("");
        
        
       
      
      });
    
    });