var userImage = new Array(10),
  userName = new Array(10),
  tweetText = new Array(10),
  i;

var isUndefined = function (tweetArray) {
  "use strict";
  for (i = 0; i <= 9; i += 1) {
    if (tweetArray[i] === undefined) {
      return true;
    } else {
      return false;
    }
  }
};

var queue = function (tweetArray, newTweet) {
  "use strict";
  for (i = 0; i <= 9; i += 1) {
    if (i < 9) {
      tweetArray[i] = tweetArray[i + 1];
    } else {
      tweetArray[i] = newTweet;
    }
  }
};

var main = function () {
  "use strict";
  var twitter = new ctwitter.CTwitter();
  twitter.stream("statuses/filter", { lang: "en", track: ["javascript", "jslint"] }, function (stream) {
    stream.on("data", function (tweet) {
      queue(userImage, tweet.profile_image_url);
      queue(userName, tweet.from_user);
      queue(tweetText, tweet.text);
      for(i = 0; i <= 9; i++) {
        if (tweetText[i] !== undefined) {
          $("#feed").html("<img src ='" + userImage[i] + "' width='50' />" + "<h4>" + userName[i] + "</h4>" + "<p>" + tweetText[i] + "</p>");              
        }
      }
    });
  });
};

$(document).ready(main);