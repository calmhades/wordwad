$(document).ready(function(){

var body_text = $("body-text")

$("#add-entry").on("click", function(event){
    event.preventDefault();
  
    
    
    $.post("/api/entry", newEntry)
    .then(function(data){
      console.log(data);
  
    });
    $("#body-text").val("");
   
  
  });

});