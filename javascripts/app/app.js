var main = function () {
  "use strict";
  var twitter = new ctwitter.CTwitter();
  twitter.stream("statuses/filter", { lang: "en", track: ["javascript", "Douglas Crockford", "jslint"] }, function (stream) {
    stream.on("data", function (tweet) {
        $("#feed").append("<img src ='" + tweet.profile_image_url + "' />"
          + "<h3>" + tweet.from_user + "</h3>" + "<p>" + tweet.text + "</p>");
    });
  });
}

$(document).ready(main);
console.log("Hello world");