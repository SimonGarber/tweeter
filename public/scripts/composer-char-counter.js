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
    $("textarea").on('submit',function(e) {
        if(e.target.value.length === 0){
            event.preventDefault()
            console.log("You must write something in order to tweet!")
        }
    })
    });
    
