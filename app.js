// ---------------------------------------------------------------

// Fade in main section elements on page load
$('nav').first().delay(250).fadeIn(1000);
$(".switch").delay(6500).fadeIn(1200);
$("#line1,#line-1").delay(1000).fadeIn(1000).delay(3500).fadeOut(1500);
$("#line2").delay(3000).delay(4000).fadeIn(1000) ;
$("#line4").delay(3000).delay(4000).fadeIn(1) .delay(500).animate({ opacity: 1 }, 1000);
$("#line3").delay(3000).delay(4000).fadeIn(1).delay(1000).animate({ opacity: 1 }, 2250);
$("#line5").delay(3000).delay(5000).fadeIn(2250);
$("#see-more").delay(8700).fadeIn(2500);

// ---------------------------------------------------------------

// navbar animate 

var nav = $("nav");
var navHeight = nav.height(); 
nav.css({ height: 0 });

$("nav").delay(5250).animate({ height: navHeight }, 1200); 

$(document).ready(function() {
  $(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
    
    $('.section').each(function() {
      var sectionId = $(this).attr('id');
      var sectionOffset = $(this).offset().top;
      
      if (scrollPosition >= sectionOffset-window.innerHeight * 0.3 ) {
        $('nav a').removeClass('active');
        $('nav a[href="#' + sectionId + '"]').addClass('active');
      }
    });
  });
});

// ---------------------------------------------------------------

// Star-background animate

$(document).ready(function() {
$("#Star-background").animate({ opacity: 1 }, 2500).delay(2500).fadeOut(2500);

particlesJS("Star-background", {

  "particles":{
  "number":{"value":100,"density":{"enable":true,"value_area":700}},
  "color":{"value":"#ffeb81"},
  "shape":{"type":"star","stroke":{"width":1,"color":"#fc8686"},"polygon":{"nb_sides":5},"image":{"src":"","width":100,"height":100}},
  "opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
  "size":{"value":8,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
  "line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},
  "move":{"enable":true,"speed":0.5,"direction":"bottom","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}
  },

  "interactivity":{
  "detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"push"},"resize":true},
  "modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":100,"size":5.8,"duration":4.697763702485766,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}
  },

  "retina_detect":true
});

var count_particles, stats, update; stats = new stats; stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles');
update = function() { stats.begin();
stats.end();
if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array)
{ count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;}
requestAnimationFrame(update); }; requestAnimationFrame(update);
});

// ---------------------------------------------------------------

// section2 animate 

// $(document).ready(function() {
  
  var div1 = $("#about1");
  div1.css({ right: '-30%' });
  div1.css({ opacity: 0 });

  var div2 = $("#about2");
  // // div2.css({ top: '+30vh' });
  // // div2.css({ opacity: 0 });

  var div3 = $("#about3");
  // // div3.css({ top: '+30vh' });
  // // div3.css({ opacity: 0 });

 
  $(window).scroll(function() {
    var windowHeight = $(window).height();
    var scrollPosition = $(window).scrollTop();
    var div1Offset = div1.offset().top;
    var div2Offset = div2.offset().top;
    var div3Offset = div3.offset().top;

  
    // if (scrollPosition  > div1Offset) {
    //   div1.fadeOut(1);
    //   div2.fadeIn(1);
    // }
    // if (scrollPosition  >= div2Offset) {
    //   div2.fadeOut(1);
    //   div3.fadeIn(1);
    // }
    if (scrollPosition + windowHeight >= div1Offset) {
      div1.show().animate({opacity: 1}, { duration: 500, queue: false }).animate({ right:0 }, { duration: 500, queue: false });
    }

  });
// });

// $(document).ready(function() {
    var divB = $("#background-section2");
   
    $(window).scroll(function() {
      var windowHeight = $(window).height();
      var scrollPosition = $(window).scrollTop();

      var divBOffset = divB.offset().top;
    
      if (scrollPosition + windowHeight >= divBOffset) {
        var distance = scrollPosition + windowHeight - divBOffset*1.9;
        divB.show().animate({ opacity: 1 }, 1).animate({ left: distance }, 1);
      }
    });
  // });

// ---------------------------------------------------------------

// section3 animate 

// $(document).ready(function() {

  var divP = $("#portfolio-h1");
      divP.css({ left: '+35%' });
      divP.css({ opacity: 0 });

  var h1P = $("#portfolio--h1");
      h1P.css({ right: '+35%' });
      h1P.css({ opacity: 0 });
 
  $(window).scroll(function() {
    var windowHeight = $(window).height();
    var scrollPosition = $(window).scrollTop();
    var divPOffset = divP.offset().top;
    var navHeight = $("nav").height();
    // off-bottom
    if (scrollPosition + windowHeight-navHeight*2 < divPOffset) {
      divP.animate({ opacity:0 }, { duration: 400, queue: false }).animate({ left:'+35%' }, { duration: 400, queue: false });
      h1P.animate({ opacity:0 }, { duration: 400, queue: false }).animate({ right:'+35%' }, { duration: 400, queue: false });
    }
    // off-up
    if (scrollPosition+navHeight*2  > divPOffset) {
      divP.animate({ opacity:0 }, { duration: 400, queue: false }).animate({ left:'-35%' }, { duration: 400, queue: false });
      h1P.animate({ opacity:0 }, { duration: 400, queue: false }).animate({ right:'-35%' }, { duration: 400, queue: false });
    }
    // on
    if (scrollPosition + windowHeight-navHeight >= divPOffset &&scrollPosition+navHeight <= divPOffset ) {
      divP.animate({ opacity:1 }, { duration: 400, queue: false }).animate({ left:0 }, { duration: 400, queue: false });
      h1P.animate({ opacity:1 }, { duration: 400, queue: false }).animate({ right:0 }, { duration: 400, queue: false });
    }
  });
// });

// -----------------------------------------------

// Modal popup for portfolio

function displayModal(id) {

  var modal = document.getElementById('portModal');
  var btn = document.getElementById(id);
  var span = document.getElementsByClassName("close")[0];
  var keyWords = "";
  var mainText = "";
  var gitLink = "";
  var extLink = "";

   if (id == "webgl") {
       document.getElementById("project-title").innerHTML = "WebGL Demo Projects";
       mainText = "A collection of introductory WebGL graphics projects completed as coursework (designed for desktop):"
                  + '<br><br><a href="http://turing.algomau.ca/~aanderson/3306_Graphics/Assignment2/assignment2.html">2D Drawing</a>'
                  + '<br><a href="http://turing.algomau.ca/~aanderson/3306_Graphics/Assignment4/A4_aanderson.html">2D Animation</a>'
                  + '<br><a href="http://turing.algomau.ca/~aanderson/3306_Graphics/Assignment3/Clipping_aanderson.html">Line Clipping Algorithms</a>'
                  + '<br><a href="http://turing.algomau.ca/~aanderson/Activity11/aanderson_A5.html">3D Shapes</a>'
                  + '<br><a href="http://turing.algomau.ca/~aanderson/A6/imageFilters.html">Image Filtering</a>'
                  + '<br><a href="http://turing.algomau.ca/~aanderson/FinalProject/aanderson_Final.html">Final Project: 3D Aquarium Simulator</a>';
       keyWords = "WebGL, JavaScript";
       gitLink = "https://github.com/amanda-anderson/webgl-projects";
       extLink = "http://turing.algomau.ca/~aanderson/";
   }

  if (id == "tra"){
      document.getElementById("project-title").innerHTML= "TRA Website Design";
      mainText = "Our team created the winning website design for Therapeutic Ride Algoma, a local not-for-profit organization in Sault Ste Marie, Canada. Given the nature of TRA, we wanted to create a website that was simple to navigate and fully accessible for those with visual or motor skill impairment. The competition consisted of an 8-week website development bootcamp working with Jeff Greco, CEO of Cavera Inc.";
      keyWords = "WordPress, UI/UX Design, Accessibility";
      gitLink = "https://github.com/amanda-anderson";
      extLink = "https://TRAlgoma.org";
  }

  if (id == "news-collective"){
      document.getElementById("project-title").innerHTML= "News Collective";
      mainText = "Single-page web app for viewing breaking news stories from multiple publishers. Using NewsAPI creates a simpler and more efficient way to keep up-to-date on world news and is updated in real-time.";
      keyWords = "HTML/CSS, Ajax, NewsAPI";
      gitLink = "https://github.com/amanda-anderson/News-Collective";
      extLink = "https://amanda-anderson.github.io/news-collective/";
  }
  

  document.getElementById("project-main-text").innerHTML = mainText;
  document.getElementById("project-key-words").innerHTML = keyWords;
  document.getElementById("port-git-link").href = gitLink;
  document.getElementById("port-ext-link").href = extLink;

      modal.style.display = "block";
      $("#portModal").hide();
      $("#portModal").fadeIn();

  span.onclick = function() { 
      $("#portModal").fadeOut();
  }
  
  window.onclick = function(event) {
    if (event.target == modal) { 
          $("#portModal").fadeOut();
      }
  }
}

// -----------------------------------------------

// כפתור לשינוי שפה
$(document).ready(function() {
  // נקבע את השפה הראשונית כשפת ברירת המחדל
  var currentLanguage = 'EN';

  // פונקציה לשינוי השפה
  function changeLanguage() {
    // בדיקה איזה שפה יש לשנות אליה
    currentLanguage = (currentLanguage === 'EN') ? 'HE' : 'EN';
    
    // בדיקה ושינוי התוכן של האלמנטים הרלוונטיים בהתאם לשפה הנוכחית
    $('a:eq(1)').text(currentLanguage === 'EN' ? "About" : "אודות");
    $('a:eq(2)').text(currentLanguage === 'EN' ? "Portfolio" : "תיק עבודות");
    $('a:eq(3)').text(currentLanguage === 'EN' ? "Contact" : "צור קשר");
    $("#line1").text(currentLanguage === 'EN' ? 'Too Good To Be True' : 'טוב מדי מכדי להיות אמיתי');
    $("#line2").text(currentLanguage === 'EN' ? 'Esther Green' : 'אסתר גרין');
    $("#line4").text(currentLanguage === 'EN' ? 'Interior Designer' : 'עיצוב פנים');
    $("#line5").html(currentLanguage === 'EN' ? 'Your Imagination,<br/>My Reallity.' : ',הדמיון שלך<br/>.המציאות שלי');
    $("#line1").text(currentLanguage === 'EN' ? 'Too Good To Be True' : 'טוב מכדי להיות אמיתי');
    $("#about1 h1").text(currentLanguage === 'EN' ? 'So, who I am ...' : '... קצת על עצמי');
    $("#about2 h1").text(currentLanguage === 'EN' ? 'My First Steps' : 'צעדי הראשונים');
    $("#about3 h1").text(currentLanguage === 'EN' ? 'So, who I am ...' : 'החזון שלי');

    $("#about1 p").html(currentLanguage === 'EN' ? "Esther Green interior designer, <a href='https://www.alisa-sheinson.com/'>Studio Alisa Sheinson</a>.<br><br>Hi, I'm Esther Green, an artist and painter in the past. <br>4 years ago, I started doing interior design. <br>I graduated from architecture and interior design studies at Prog College. <br>" : "אסתר גרין מעצבת פנים, <a href='https://www.alisa-sheinson.com/'>סטודיו עליזה שינזון</a>.<br><br>היי, אני אסתר גרין, אמנית וציירת בעברי. <br>ולפני 4 שנים, נכנסתי לעולם העיצוב והחלטתי שזה התחום שלי.. <br>בוגרת לימודי אדריכלות ועיצוב פנים במכללת פרוג. <br>");
    $("#about2 p").html(currentLanguage === 'EN' ? "I took my first steps in the world of interior design with the designer <a href='https://www.yaron-bengera.com/'>Yaron Yiftach Ben-Gera</a>. <br>There I gained knowledge and experience in drawing, interior design, and especially planning solutions. <br>Today I am a freelancer in the field of interiors as well as an architect and interior designer at <a href='https://www.alisa-sheinson.com/'>Studio Alisa Sheinson</a>.<br><br>Among my major projects are designing children's rooms, gardens, hotel rooms, bathrooms, etc." : "את צעדי הראשונים בעולם עיצוב הפנים עשיתי עם המעצב <a href='https://www.yaron-bengera.com/'>ירון יפתח בן-גרא</a>. <br>שם רכשתי ידע וניסיון בשרטוט, עיצוב פנים, ובעיקר פתרונות תכנון. <br>כיום אני עצמאית בתחום הפנים וכן אדריכלית ומעצבת פנים בסטודיו  <a href='https://www.alisa-sheinson.com/'>סטודיו עליזה שינזון</a>.<br><br>בין הפרויקטים המרכזיים שלי ניתן למנות עיצוב חדרי ילדים, גינות, חדרי מלון, חדרי רחצה ועוד'.");
    $("#about3 p").html(currentLanguage === 'EN' ? "I believe that every imagination can become a reality.<br>With great ambition and careful planning, down to the smallest details,<br>while emphasizing the customer's needs<br> and with,of course, special design, the sky's the limit.<br><br>My love is art, my specialty is designing, and my tool is planning." : "אני מאמינה שכל דמיון יכול להפוך למציאות.<br>עם שאיפה גבוהה ובתכנון קפדני עד לפרטים הקטנים,<br>תוך שימת דגש על צרכי הלקוח<br> ועם כמובן עיצוב מיוחד, השמיים הם הגבול.<br><br>האהבה שלי זה אמנות, המומחיות שלי זה עיצוב, והכלי שלי זה תכנון.");
    $('#familiar-tech li:eq(0)').text(currentLanguage === 'EN' ? 'Art' : 'אומנות');
    $('#familiar-tech li:eq(1)').text(currentLanguage === 'EN' ? 'Design' : 'עיצוב');
    $('#familiar-tech li:eq(2)').text(currentLanguage === 'EN' ? 'Planning' : 'תכנון');
    $('#portfolio---h1').text(currentLanguage === 'EN' ? 'Portfolio' : 'תיק עבודות');
    $("#contact p:eq(0)").html(currentLanguage === 'EN' ? 'Contact' : 'צור קשר');
    $("#contact p:eq(1)").html(currentLanguage === 'EN' ? 'Please fill out the following contact form and I will get back to you as soon as possible.<br><br>Thank you!' : 'אנא מלא את טופס יצירת הקשר ונחזור אליך בהקדם האפשרי.<br><br>תודה!');
    $("input[name='first_name']").attr("placeholder", currentLanguage === 'EN' ? "First Name" : 'שם פרטי');
    $("input[name='last_name']").attr("placeholder", currentLanguage === 'EN' ? "Last Name" : 'שם משפחה');
    $("input[name='email']").attr("placeholder", currentLanguage === 'EN' ? "Email" : 'אימייל');
    $("input[name='telephone']").attr("placeholder", currentLanguage === 'EN' ? "Telephone" : 'פלאפון');
    $("textarea[name='message']").attr("placeholder", currentLanguage === 'EN' ? "Message" : 'הודעה');
    $("#SubmitButton").text(currentLanguage === 'EN' ? 'Submit' : 'שליחה');

    // $('h3').text(currentLanguage === 'EN' ? 'black and red its my color' : 'שחור ואדום זו הצבעים שלי');
    // $('p:eq(1)').text(currentLanguage === 'EN' ? "Hi my name is Yael and I don't like to eat meat" : "שלום שמי יעל ואני לא אוהבת לאכול בשר");
  }
  
  // מאזין לאירוע שינוי במצב הצ'קבוקס
  $('#language-toggle').change(function() {
    changeLanguage();
  });
});


