$(document).ready(function() {
$(".header").click(function() {

  $header = $(this);
  //getting the next element
  $content = $header.next();
  //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
  $content.slideToggle(500, function() {
    //execute this after slideToggle is done
    //change text of header based on visibility of content div
    $header.text(function() {
      //change text based on condition
      //return $content.is(":visible") ? "Collapse" : "Expand";
    });
  });

});
});

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
