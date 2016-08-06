
$('#mywork').addClass('hidden')
$('#aboutMe').addClass('hidden')


$(window).scroll(function() {
  if ($(window).scrollTop() > 282) {
    $('.nav').addClass('stuck');
    $('.subpage').addClass('scroll')
  } else {
    $('.nav').removeClass('stuck');
    $('.subpage').removeClass('scroll')

  }
});

$('#work').on('click', function(){
  $('#mywork').removeClass('hidden')
  $('#aboutMe').addClass('hidden')
  $('#homepage').addClass('hidden')
})

$('#about').on('click', function(){
  $('#aboutMe').removeClass('hidden')
  $('#mywork').addClass('hidden')
  $('#homepage').addClass('hidden')
})


$('#home').on('click', function(){
  $('#homepage').removeClass('hidden')
  $('#mywork').addClass('hidden')
  $('#aboutMe').addClass('hidden')
})
