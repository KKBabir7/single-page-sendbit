//navbar nav button selection code

$(document).ready(function(){

  $('body').scrollspy({target: ".navbar", offset: 50});   
  $("#myNavbar a").on('click', function(event) {
    if (this.hash !== "") {
     
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        
        window.location.hash = hash;
      });
    } 
  });
});



//navbar scroll up and down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-350px";
  }
  prevScrollpos = currentScrollPos;
}



// content animation installaition
AOS.init();



/////////////........custom content animate





if ($(window).width() < 1480) {
    $('#hh').addClass('slideanim');
       
      $(document).ready(function(){
 
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  
    if (this.hash !== "") {
     
      event.preventDefault();

    
      var hash = this.hash;

     
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 0, function(){
   
     
        window.location.hash = hash;
      });
    }
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
      

      var winTop = $(window).scrollTop();
        if (pos < winTop + 550) {
          $(this).addClass("slide");
		    $('#hhop').addClass("api-img");
			 $(this).addClass("h1");
		    $(this).addClass("spin-img");
		   
			
		
        }
		
    });
  });
})  
        
	
	
}
 else {
    $('#hh').removeClass('slideanim');
	 $(this).addClass("api-img");
	 
	
	$(document).ready(function(){
 
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  
    if (this.hash !== "") {
     
      event.preventDefault();

    
      var hash = this.hash;

     
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 0, function(){
   
       
        window.location.hash = hash;
      });
    }
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
      

      var winTop = $(window).scrollTop();
        if (pos < winTop + 800) {
          $(this).addClass("slide");
          $(this).addClass("api-img");
		   $(this).addClass("h1");
		   $(this).addClass("spin-img");
        
		 
        }
		
    });
  });
})
}




setTimeout(fade_out, 2000);

function fade_out() {
  $("#arrow-bo").fadeOut().empty();
}



//date time hour minit code
$(document).ready(function(){
  (function(e){
		e.fn.countdown = function (t, n){
			function i(){
				eventDate = Date.parse(r.date) / 1e3;
				currentDate = Math.floor(e.now() / 1e3);
			
				if(eventDate <= currentDate){
					n.call(this);
					clearInterval(interval)
				}
			
				seconds = eventDate - currentDate;
				days = Math.floor(seconds / 86400);
				seconds -= days * 60 * 60 * 24;
				hours = Math.floor(seconds / 3600);
				seconds -= hours * 60 * 60;
				minutes = Math.floor(seconds / 60);
				seconds -= minutes * 60;
			
				days == 1 ? thisEl.find(".timeRefDays").text("Days") : thisEl.find(".timeRefDays").text("Days");
				hours == 1 ? thisEl.find(".timeRefHours").text("Hours") : thisEl.find(".timeRefHours").text("Hours");
				minutes == 1 ? thisEl.find(".timeRefMinutes").text("Minutes") : thisEl.find(".timeRefMinutes").text("Minutes");
				seconds == 1 ? thisEl.find(".timeRefSeconds").text("Seconds") : thisEl.find(".timeRefSeconds").text("Seconds");
			
				if(r["format"] == "on"){
					days = String(days).length >= 2 ? days : "0" + days;
					hours = String(hours).length >= 2 ? hours : "0" + hours;
					minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
					seconds = String(seconds).length >= 2 ? seconds : "0" + seconds
				}
			
				if(!isNaN(eventDate)){
					thisEl.find(".days").text(days);
					thisEl.find(".hours").text(hours);
					thisEl.find(".minutes").text(minutes);
					thisEl.find(".seconds").text(seconds)
				}
        else{
          errorMessage = "Invalid date. Example: 27 March 2015 17:00:00";
					alert(errorMessage);
					console.log(errorMessage);
					clearInterval(interval)
				}
			}
			
			var thisEl = e(this);
			var r = {
				date: null,
				format: null
			};
			
			t && e.extend(r, t);
			i();
			interval = setInterval(i, 1e3)
		}
	})(jQuery);
	
	$(document).ready(function(){
		function e(){
			var e = new Date;
			e.setDate(e.getDate() + 60);
			dd = e.getDate();
			mm = e.getMonth() + 1;
			y = e.getFullYear();
			futureFormattedDate = mm + "/" + dd + "/" + y;
			return futureFormattedDate
		}
		
		$("#countdown").countdown({
			date: "2 August 2021 12:59:59", // change date/time here - do not change the format!
			format: "on"
		});
	});
});


//range slider code
const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}


//responsive in device or class change
 function bigscreen(big) {
        if (big.matches) {
  
			var navbarcontaineradd = document.getElementById("navbarcontainer");
				navbarcontaineradd.classList.add("container");
			var navbarcontainerremove = document.getElementById("navbarcontainer");
				navbarcontainerremove.classList.remove("container-fluid");
				
				
			var  mainSectionadd = document.getElementById("mainSection");
				 mainSectionadd.classList.add("container");
			var mainSectionremove = document.getElementById("mainSection");
				mainSectionremove.classList.remove("container-fluid");
				
				
            var whitepaperadd = document.getElementById("whitepaper");
				whitepaperadd.classList.add("container");
			var whitepaperremove = document.getElementById("whitepaper");
				whitepaperremove.classList.remove("container-fluid");
				
				
            var buyadd = document.getElementById("buy");
				buyadd.classList.add("container");
			var buyremove = document.getElementById("buy");
				buyremove.classList.remove("container-fluid");
            
			
			var merchantsadd = document.getElementById("merchants");
				merchantsadd.classList.add("container");
			var merchantsremove = document.getElementById("merchants");
				merchantsremove.classList.remove("container-fluid");
            
			
			var partnersadd = document.getElementById("partners");
				partnersadd.classList.add("container");
			var partnersremove = document.getElementById("partners");
				partnersremove.classList.remove("container-fluid");
            
			
			var eposadd = document.getElementById("epos");
				eposadd.classList.add("container");
			var eposremove = document.getElementById("epos");
				eposremove.classList.remove("container-fluid");
            
			
			var crowadd = document.getElementById("crow");
				crowadd.classList.add("container");
			var crowremove = document.getElementById("crow");
				crowremove.classList.remove("container-fluid");
            
			
			
        }
    }

    var big = window.matchMedia("(max-width: 2180px)")
    bigscreen(big) 
    big.addListener(bigscreen) 


   function smallscreen(small) {
        if (small.matches) {
  
			var navbarcontainersmadd = document.getElementById("navbarcontainer");
			    navbarcontainersmadd.classList.remove("container");
			var navbarcontainersmremove = document.getElementById("navbarcontainer");
			    navbarcontainersmremove.classList.add("container-fluid");
				
				
			var  mainSectionsmadd = document.getElementById("mainSection");
				 mainSectionsmadd.classList.add("container-fluid");
			var mainSectionsmremove = document.getElementById("mainSection");
				mainSectionsmremove.classList.remove("container");
				
				
		    var whitepapersmadd = document.getElementById("whitepaper");
				whitepapersmadd.classList.add("container-fluid");
			var whitepapersmremove = document.getElementById("whitepaper");
				whitepapersmremove.classList.remove("container");
				
				
			var buysmadd = document.getElementById("buy");
				buysmadd.classList.add("container-fluid");
			var buysmremove = document.getElementById("buy");
				buysmremove.classList.remove("container");
			
			
			var merchantsmadd = document.getElementById("merchants");
				merchantsmadd.classList.add("container-fluid");
			var merchantssmremove = document.getElementById("merchants");
				merchantssmremove.classList.remove("container");
				
				
			var partnerssmadd = document.getElementById("partners");
				partnerssmadd.classList.add("container-fluid");
			var partnerssmremove = document.getElementById("partners");
				partnerssmremove.classList.remove("container");
				
				
			var epossmadd = document.getElementById("epos");
				epossmadd.classList.add("container-fluid");
			var epossmremove = document.getElementById("epos");
				epossmremove.classList.remove("container");
				
				
			var crowsmadd = document.getElementById("crow");
				crowsmadd.classList.add("container-fluid");
			var crowsmremove = document.getElementById("crow");
				crowsmremove.classList.remove("container");
				
				
        }
    }
   var small = window.matchMedia("(max-width: 1692px)")
   smallscreen(small) 
   small.addListener(smallscreen)


// message box animate code
function messege(){
    var msganimate=document.getElementById("msgb");
    var msggone=document.getElementById("msggone");
        msganimate.style.display="block";
        msggone.style.display="none";
		msganimate.classList.add("msg-animate");
		msggone.classList.add("msg-bck");
 }
 function croxx(){
     var msganimatew=document.getElementById("msgb");
	  var msggoneb=document.getElementById("msggone");
    msganimatew.style.display="none";
	msggoneb.style.display="block";
 }


