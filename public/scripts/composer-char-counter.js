$(document).ready(function() {
    $("textarea").on('input', function(e)
		{
            console.log(140-e.target.value.length)
           console.log ($(".counter").text(140-e.target.value.length));
           if(e.target.value.length > 140){
               $(".counter").addClass("redcounter")
           } else {
               $(".counter").removeClass("redcounter")
           }     
		});
    });
    
