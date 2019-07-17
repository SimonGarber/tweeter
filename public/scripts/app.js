/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



const tweets = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const renderTweets = function(tweets) {
   for( let i in tweets) {
    $('.tweets').append(createTweetElement(tweets[i]))
   } 
}

const createTweetElement = function(tweetData) {
 let $tweet = $('<article>').addClass(`tweet`)
 $tweet.append($('<img>').attr(`src`,tweetData.user.avatars))
 $tweet.append($('<h4>').text(tweetData.user.name))
 $tweet.append($('<h3>').text(tweetData.user.handle))
 $tweet.append($('<p>').text( tweetData.content.text))
 $tweet.append($('<span>').addClass('date_created').text(tweetData.created_at))
 return $tweet
}
 
$(document).ready(function() {
 console.log("Document is ready");
// renderTweets(tweets)

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
renderTweets(tweets)
});




