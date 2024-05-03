// loader
$(window).on('load', function () {
      $(".loader").fadeOut(); 
});
 $(document).ready(function () {
    //canvas generate
    var body = document.body;
    html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    function init() {
      var body = document.getElementsByTagName("body")[0];
      var canvas = document.createElement("canvas");
      canvas.height = height;
      canvas.width = window.innerWidth;
      canvas.setAttribute("id", "background-canvas");
      var context = canvas.getContext("2d");
      context.globalAlpha = 0.1;
      for (var i = 0; i < 100; i++) {
        var colour = '#' + Math.round(0xffffff * Math.random()).toString(16);
        context.fillStyle = colour;
        context.fillRect(Math.random() * window.innerWidth, Math.random() * height, Math.random() * 80 + 20, Math.random() * 80 + 20);
      }
  
      $('body').prepend(canvas);
    }
    init();
  
    //Face Animation
    
    //eyes follow mouse cursor
const eye = $('.face__eye-ball');

document.addEventListener('mousemove', () => {
	let x = event.clientX * 100 / window.innerWidth + '%';
	let y = event.clientY * 100 / window.innerHeight + '%';
	
	for(let i = 0; i < 2; i++) {
		eye[i].style.left = x;
		eye[i].style.top = y;
		eye[i].style.transform = 'translate(-'+x+',-'+y+')';
	}
});

//mouth style class
$('.sns-btn').on('mouseover', () => {
	$('.face__mouth').addClass('hover');
});

$('.sns-btn').on('mouseleave', () => {
	$('.face__mouth').removeClass('hover');
});

    //Changing Title Effect
    const b = baffle(".passion");
    b.set({
      characters: '█<▓ ░█▒█▒ ░▒/░█ ▓▒▓ █/██▒ █▓█/ █▒█ ░█▒█ ▓░█▒',
      speed: 120
    });
  
    var i = 1;
    let changeTitle = () => {
      let titles = ["Software Developer"];
      // let titles = ["Software Developer", "UI/UX Designer", "Web Developer","Student", "Programmer"];
      if (i == titles.length) {
        i = 0;
      }
      b.text(currentText => titles[i]).reveal(1500);
      i++;
    }
    setInterval(changeTitle, 3200);
    $("#ham").click((e) => {
        e.stopPropagation();
        $("#navbar").toggleClass("active");
    });
    $('body').click(function() {
      $("#navbar").removeClass("active");
    });
    $('#goback-btn').click(() => {
        $('.submission').removeClass('active');
        stopConfetti();
    });
    (resizeForm=()=>{
      var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth;
      if(width > 1024){
        $("body").append($('<script class="tilt"></script>').attr("src","https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.2/vanilla-tilt.min.js"));
      }   
    })();
  });
  
// form-submission
$('#myform').submit((e) => {
    e.preventDefault();
    ($('.name input').val() == "") ? $('.name').addClass('error') : checkName();
    ($('.email input').val() == "") ? $('.email').addClass('error') : checkEmail();
    ($('.message textarea').val() == "") ? $('.message').addClass('error') : $('.message').removeClass('error');
    if ($('.email input').val() != "" && $('.name input').val() != "" && $('.message textarea').val() != "") {
      submitForm();
    }
  })
  
  checkEmail = () => {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!$('.email input').val().match(pattern)) {
      $('.email').addClass('error');
      $('.email').removeClass('valid')
      let errorTxt = $(".email .error-txt");
      ($('.email input').val() != "") ? errorTxt.html("Enter a valid email address") : errorTxt.html("Email can't be blank");
    }
    else {
      $('.email').removeClass("error");
      $('.email').addClass("valid");
  
    }
  }
  checkName = () => {
    let pattern = "[a-zA-Z]{3,30}";
    if (!$('.name input').val().match(pattern)) {
      $('.name').addClass('error');
      $('.name').removeClass('valid')
      let errorTxt1 = $(".name .error-txt");
      ($('.name input').val() != "") ? errorTxt1.html("Name Invalid") : errorTxt1.html("Name can't be blank");
    }
    else {
      $('.name').removeClass("error");
      $('.name').addClass("valid")
    }
  }
  
  checkMessage = () => {
  
    if (!$('.message textarea').val().length > 3 && $('.message textarea').val().length < 300) {
      $('.message').addClass('error');
      $('.message').removeClass('valid')
      let errorTxt2 = $(".message .error-txt");
      ($('.message textarea').val() != "") ? errorTxt2.html("Message Invalid") : errorTxt2.html("Message can't be blank");
    }
    else {
      $('.message').removeClass("error");
      $('.message').addClass("valid")
    }
  }
  
  submitForm = () => {
    if (!$('.email').hasClass('error') && !$('.name').hasClass('error') && !$('.message').hasClass('error')) {
      $('.submission').addClass('active');
      // setTimeout(()=>{
      //   postForm();
      // },100)
      setTimeout(() => {
        startConfetti();
        $("html, body").animate({ scrollTop: 0 }, 0);
      }, 500)
      setTimeout(() => {
        stopConfetti();
      }, 15000)
    }
  }
  postForm=()=>{
    var myname = $(".name input").val();
    var myemail = $(".email input").val();
    var mymessage = $(".message textarea").val();  
    $.ajax({
      url:
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLScx3w4ax87ymEi9cj5ssKmA7vmbpQX_4-nyZVnNngDxkXwgig/formResponse",
      data: {
        "entry.297889510": myname,
        "entry.713324677": myemail,
        "entry.1970876070": mymessage,
      },
      type: "POST",
      dataType: "xml",
    });
  }
  
  
  changebg=()=>{
    var toggle = document.getElementById('togglebtn');
    var body = document.body;

    // Add event listener to the toggle button
    toggle.addEventListener('change', function() {
        // Toggle the 'black-bg' class on the body element based on the state of the toggle button
        if (toggle.checked) {
            body.classList.add('black-bg');
        } else {
            body.classList.remove('black-bg');
        }
    });
  }