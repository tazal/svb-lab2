var userName = new Array(10),
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
      queue(userName, tweet.from_user);
      queue(tweetText, tweet.text);
      //for(i = 0; i <= 9; i += 1) {
        if (tweetText[9] !== undefined) {
          $("#tweet1").html("<h4>" + userName[9] + "</h4>" + "<p>" + tweetText[9] + "</p>"); 
        }  
        
        if(tweetText[8] !== undefined) {
            $("#tweet2").html("<h4>" + userName[8] + "</h4>" + "<p>" + tweetText[8] + "</p>"); 
        }    
        
        if(tweetText[7] !== undefined) {
                $("#tweet3").html("<h4>" + userName[7] + "</h4>" + "<p>" + tweetText[7] + "</p>");
        }
        
        if(tweetText[6] !== undefined) {
                $("#tweet4").html("<h4>" + userName[6] + "</h4>" + "<p>" + tweetText[6] + "</p>");
        }
        
        if(tweetText[5] !== undefined) {
                $("#tweet5").html("<h4>" + userName[5] + "</h4>" + "<p>" + tweetText[5] + "</p>");
        }
        
      //}
      
    });
  });
};

$(document).ready(main);