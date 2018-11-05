$(document).ready(function(){

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
        
        });

       
    
