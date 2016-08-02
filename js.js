
$('#mywork').addClass('hidden')
$('#aboutMe').addClass('hidden')


$(window).scroll(function() {
  if ($(window).scrollTop() > 283) {
    $('.nav').addClass('stuck');
  } else {
    $('.nav').removeClass('stuck');
  }
});

$('#work').on('click', function(){
  $('#mywork').removeClass('hidden')
  $('#aboutMe').addClass('hidden')
  $('#home').addClass('hidden')
})

$('#about').on('click', function(){
//   var stateObj = $('#about')
//   var currentState = history.state;
// console.log(stateObj)
// console.log(currentState)
var stateObj = { foo: "bar" };
history.pushState(stateObj, "page 2", "about.html");


  $('#aboutMe').removeClass('hidden')
  $('#mywork').addClass('hidden')
  $('#home').addClass('hidden')
})


// function getHomePage(){
//   home = $('#home');
// }
// history.pushState([data], [title], [url]);
//
//
// var router = new staterouter.Router();
// router.route('/', getHomePage).route('/aboutMe', getAboutMe).route('/mywork', mywork);
// router.navigate('/');
//
// function loadNext(url) {
//     $('#body').queue(function(next) {
//         setTimeout(function() {
//             router.navigate(url);
//             next();
//         }, 3000);
//     });
// }
//
// loadNext('/aboutMe');
// loadNext('/mywork');
