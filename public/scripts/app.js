/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweet) {
    let $tweet = $('<article>').addClass(`tweet`)
    $tweet.append($('<img>').attr(`src`,tweet.user.avatars))
    $tweet.append($('<h4>').text(tweet.user.handle))
    $tweet.append($('<h3>').text(tweet.user.name))
    $tweet.append($('<p>').text( tweet.content.text))
    $tweet.append($('<span>').addClass('date_created').text(tweet.created_at))
    return $tweet
  }
    
  const renderTweets = function(tweets) {
    $('.tweets').empty();
   for( let i in tweets) {
    $('.tweets').prepend(createTweetElement(tweets[i]))
   } 
}
function loadTweets() {   
  $.ajax({
    url:'/tweets',
    method: 'GET',
    success: function(res) {
      $('tweets').empty()
      renderTweets(res);
    } 
  });  
}
    
$(document).ready(function() {
    console.log("Document is ready");

    $('#arrow-btn').click(function()
{
  
    //  $('.tweets').focus();
     $('.new-tweet').slideToggle();
    // $('.tweets').focus();
    // $('.new-tweet').focus();
});
    $("#submit_tweet").on("submit",(function(event) {

        event.preventDefault();
        console.log("Default event prevented")
        const charCount = $(this).find("textarea")[0].value.length
  if (charCount === 0){
    alert("You need letters and words in order to tweet!");
    } else if
    (charCount > 140){
      alert("Too many letters and words!");
    } else {  
      
      $.ajax({
            url:'/tweets',
            method:'POST',
            data: $(this).serialize(), 
            success: () => {
              $('.new-tweet').val('');
              $('.counter').text('140');
              console.log("Success!")
              loadTweets();  
            }    
          });
        }
      }));
      loadTweets();        
    });
    
    
    
                 
         
               
         
               
    

   



              
            
            


 








