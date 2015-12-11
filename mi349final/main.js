$(document).ready(function() {
//when the header class is cliced
$(".header").click(function() {
  //grab that element
  $header = $(this);
  //get the next element
  $content = $header.next();
  //display the next part
  $content.slideToggle(500, function() {

    $header.text(function() {

    });
  });

});
});

//this function makes the Twitter share work
//this is all default code from Twitter developers website
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
  t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
  }(document, "script", "twitter-wjs"));
