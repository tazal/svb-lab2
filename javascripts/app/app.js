var tweetArray = new Array(10);
var top = 0;

var main = function () {
  "use strict";
  var twitter = new ctwitter.CTwitter();
  twitter.stream("statuses/filter", { lang: "en", track: ["javascript", "Douglas Crockford", "jslint"] }, function (stream) {
    stream.on("data", function (tweet) {
      //$("#feed").append("<img src ='" + tweet.profile_image_url + "' />" + "<h3>" + tweet.from_user + "</h3>" + "<p>" + tweet.text + "</p>");
    });
  });
}

var queue = function (newTweet) {
  var hopper = null;
  for (var i = 0; i<=9; i+=1) {
    hopper = tweetArray[i];
    if (i < 9) {
      tweetArray[i] = tweetArray[i+1];
    } else {}
      tweetArray[top] = newTweet;
    }
  }
}

var dequeue = function() {
  
  }
}

$(document).ready(main);
console.log("Hello world");