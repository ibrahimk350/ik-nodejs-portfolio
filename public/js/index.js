function initMap() {
    var uluru = {lat: 43.9820458, lng: -79.2366514};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

$("ul li").on("click", function() {
    $("li").removeClass("active");
    $(this).addClass("active");
});

$(document).ready(function(){

	var name,email,subject,text,captcha_response;
    $("#send_email").click(function()
	{
        email=$("#email").val();
        subject=$("#subject").val();
        text=$("#content").val();
		name=$("#name").val();
		captcha_response = grecaptcha.getResponse();

		if(captcha_response.length == 0)
		{
			// Captcha is not Passed
			$("#message").empty().html("Catpcha Error.");
			return false;
		}
		else
		{
			// Captcha is Passed
			if(email == "" || subject == "" || name == "" || text == "")
			{
				$("#message").empty().html("Please fill out the form.");
			}
			else
			{
				$("#message").text("Sending E-mail...Please wait");
				$.get("/send",{name:name,email:email,subject:subject,text:text},function(data)
				{
                    if(data=="sent")
                    {
						$("#message").empty().html("Thanks for contacting. I will get back to you asap.");
						$("#email").val('');
						$("#subject").val('');
						$("#content").val('');
						$("#name").val('');
						grecaptcha.reset();
                    }
				});
			}
		}
    });

	var offset = $(window).height() - 100;   // returns height of browser viewport
	var duration = 250;
	$('.back-to-top').css({"display": "none"});

	$(window).scroll(function() {

		if ($(this).scrollTop() > offset) {
			$('.back-to-top').fadeIn(duration);
		} else {
			$('.back-to-top').fadeOut(duration);
		}
	});
	$('.back-to-top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, duration);
		return false;
	})

	$(".nav a").on('click', function(event){
	   $(".nav").find(".active").removeClass("active");
	   $(this).parent().addClass("active");
	});

	$("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 250);
		} // End if
	});
});

$(function(){
    $("#listprojects").load("/projects/web/listprojects.html");
});

function ProjectsClicked(data) {

    var xhr= new XMLHttpRequest();

    if(data == 'web')
    {
        xhr.open('GET', '/projects/web/listprojects.html', true);
    }
    else if(data == 'software')
    {
        xhr.open('GET', '/projects/software/listprojects.html', true);
    }
    else if(data == 'mobile')
    {
        xhr.open('GET', '/projects/mobile/listprojects.html', true);
    }

	xhr.onreadystatechange= function() {
		if (this.readyState!==4) return;
		if (this.status!==200) return; // or whatever error handling you want
		document.getElementById('listprojects').innerHTML= this.responseText;
	};
	xhr.send();
}

function Projects(data) {
    var title = '';

    switch(data) {
        case 'portfolio':
            title = 'Portfolio Website';
            $('#load_project_content').load("/projects/web/portfolio.html");
            break;
        case 'rmproject':
            title = 'RamadanMubarak.ca';
            $('#load_project_content').load("/projects/web/ramadanmubarak.html");
            break;
        case 'schoolproject':
            title = 'School Sponsored Project';
            $('#load_project_content').load("/projects/web/schoolproject.html");
            break;
        case 'ischool':
            title = 'iSchool Management';
            $('#load_project_content').load("/projects/web/ischool.html");
            break;
        case 'strata':
            title = 'Strata Health';
            $('#load_project_content').load("/projects/web/stratahealth.html");
            break;
        case 'irobot':
            title = 'iRobotics Website';
            $('#load_project_content').load("/projects/web/irobot.html");
            break;
        case 'pdfmagic':
            title = 'PDF Magic';
            $('#load_project_content').load("/projects/software/pdfmagic.html");
            break;
        case 'gradebook':
            title = 'Grade Book';
            $('#load_project_content').load("/projects/software/gradebook.html");
            break;
        case 'plsqlblock':
            title = 'PL/SQL Blocks';
            $('#load_project_content').load("/projects/software/plsqlblocks.html");
            break;
        case 'votewebapp':
            title = 'Voting App';
            $('#load_project_content').load("/projects/software/voteapp.html");
            break;
        case 'courseregister':
            title = 'Course Registration';
            $('#load_project_content').load("/projects/software/register.html");
            break;
        case 'webserver':
            title = 'Web Server';
            $('#load_project_content').load("/projects/software/rmiserver.html");
            break;
        case 'clerkbot':
            title = 'Clerk Bot App';
            $('#load_project_content').load("/projects/mobile/clerkbot.html");
            break;
        case 'companion':
            title = 'Portfolio Companion App';
            $('#load_project_content').load("/projects/mobile/pc.html");
            break;
        case 'cyber':
            title = 'Cyber Store App';
            $('#load_project_content').load("/projects/mobile/cyberstore.html");
            break;
        case 'fifo':
            title = 'Fifo & LRU App';
            $('#load_project_content').load("/projects/mobile/fifo.html");
            break;
        case 'rma':
            title = 'R.M.A App';
            $('#load_project_content').load("/projects/mobile/rma.html");
            break;
        case 'mss':
            title = 'MSS App';
            $('#load_project_content').load("/projects/mobile/mss.html");
            break;
        default:
            break;
    }

    document.getElementById('project_detail').style.display = 'inline-block';
    document.getElementById('insert_project_title').innerHTML = title;
	window.location.hash = '#project_detail';
}

function ProjectClose() {
    document.getElementById('project_detail').style.display = 'none';
    window.location.hash = '#projects';
}