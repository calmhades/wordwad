$(document).ready(function(){

var body_text = $("body-text")

$("#add-entry").on("click", function(event){
    event.preventDefault();
    
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

});