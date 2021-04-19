
/*
 Main javascript for derbyshire.nl
*/

if ('addEventListener' in window) {
  window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-loading\b/, ''); });
  document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
}

$(function(){
  
  // Hover text for social buttons
  $('.icons a').hover(
    function() { $('#linkHoverText').text( $(this).clone().children().remove().end().text() ); },
    function() { $('#linkHoverText').text(''); }
  );
  
  // Flip the card!
  $('.flipper').click(function(e){
    e.preventDefault();
    if($(this).attr('href') != '#'){
      $('.back section').hide();
      $($(this).attr('href')).show();
    }
    $("#main").toggleClass('flipped');
  });

})