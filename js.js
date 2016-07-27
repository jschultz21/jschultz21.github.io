
$('#mywork').addClass('hidden')
$('#aboutMe').addClass('hidden')


$(window).scroll(function() {
  if ($(window).scrollTop() > 315) {
    $('.nav').addClass('stuck');
  } else {
    $('.nav').removeClass('stuck');
  }
});

$('#work').on('click', function(){
  // $('.subpage').toggleClass('hidden')
  $('#mywork').removeClass('hidden')
  $('#aboutMe').addClass('hidden')
  $('#home').addClass('hidden')
})

$('#about').on('click', function(){
  $('#aboutMe').removeClass('hidden')
  $('#mywork').addClass('hidden')
  $('#home').addClass('hidden')
})
