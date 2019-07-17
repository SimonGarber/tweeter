/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweet) {
    let $tweet = $('<article>').addClass(`tweet`)
    $tweet.append($('<img>').attr(`src`,tweet.user.avatars))
    $tweet.append($('<h4>').text(tweet.user.name))
    $tweet.append($('<h3>').text(tweet.user.handle))
    $tweet.append($('<p>').text( tweet.content.text))
    $tweet.append($('<span>').addClass('date_created').text(tweet.created_at))
    return $tweet
   }

   

   const renderTweets = function(tweets) {
    for( let i in tweets) {
     $('.tweets').append(createTweetElement(tweets[i]))
    } 
 }

 function loadTweets()    
    {
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
   
    $("#submit_tweet").on("submit",(function(event) {
        event.preventDefault();
        console.log("Default event prevented")
        $.ajax({
                url:'/tweets',
                method:'POST',
                data: $(this).serialize(), 
                success: () => console.log("Success!")   
              });
    }));

    
      loadTweets();
    });


 








