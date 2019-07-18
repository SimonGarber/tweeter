/***************************************************************************************************************************************************************/
/* The CreateTweetElement function is defined here: takes the body of the tweet from the form and renders it to the tweet container*/
const createTweetElement = function(tweet) {
/***************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************/
/*TimeStamp uses the 'timeago' Jquery plugin to display the time since the tweet was sent to the server
and updates the previous tweets timeStamp each time the page is reloaded or when a new tweet is sent*/
/***************************************************************************************************************************************************************/
    let timeStamp = tweet.created_at;
    let $tweet = $('<article>').addClass(`tweet`)
    $tweet.append($('<img>').attr(`src`,tweet.user.avatars))
    $tweet.append($('<h4>').text(tweet.user.handle))
    $tweet.append($('<h3>').text(tweet.user.name))
    $tweet.append($('<p>').text( tweet.content.text))
    $tweet.append($('<div>').addClass('date_created').text($.timeago(timeStamp)))
    $tweet.find('.date_created').append($('<span id="icons"><i class="fas fa-retweet"></i><i class="fas fa-flag"></i><i class="fas fa-heart"></i></span>'));
    return $tweet
  }
/*****************************************************************************************************************************************************************/
/*The renderTweets function is defined here: Loops through the array of tweets in the database and renders them to the 'tweets' class going from newest to oldest
The createTweetElement function is called for each tweet to be rendered*/
/*****************************************************************************************************************************************************************/  
  const renderTweets = function(tweets) {
    $('.tweets').empty();
   for( let i in tweets) {
    $('.tweets').prepend(createTweetElement(tweets[i]))
   } 
}
/******************************************************************************************************************************************************************/
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
/*************************************************************************************************************/
/*The DOM is loaded here: */    
$(document).ready(function() {
  $("time.timeago").timeago();
  console.log("Document is ready");
    $('#arrow-btn').click(function() {
    $('.new-tweet').slideToggle();
  });

  $("#submit_tweet").on("submit",(function(event) {
      $('#error').slideUp();
      event.preventDefault();
      console.log("Default event prevented")
      const charCount = $(this).find("textarea")[0].value.length
if (charCount === 0){
  $('#error').html("You need letters and words in order to tweet!").slideDown();
  } else if
  (charCount > 140){
    $('#error').html("Too many letters and words!").slideDown();
  } else {  

    $.ajax({
          url:'/tweets',
          method:'POST',
          data: $(this).serialize(), 
          success: () => {
            $('.new-tweet').val('');
            
            $('.counter').text('140');
            loadTweets();  
          }    
        });
      }
    }));
    loadTweets();        
  });
  
  

      
    
    
    
                 
         
               
         
               
    

   



              
            
            


 








