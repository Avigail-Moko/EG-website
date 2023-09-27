// portfolio h1 animate

    var divP = $("#portfolio-h1");
        divP.css({ left: '+35%' });
        divP.css({ opacity: 0 });
  
    var h1P = $("#portfolio--h1");
        h1P.css({ right: '+35%' });
        h1P.css({ opacity: 0 });

        divP.delay(500).animate({ opacity:1 }, 1).animate({ left:0 }, 500);
        h1P.delay(500).animate({ opacity:1 }, 1).animate({ right:0 }, 350 );
      

// portfolio h2 animate
  $(document).ready(function() {

    var divP = $("#portfolio-h2");
        divP.css({ bottom: '+35%' });
        divP.css({ opacity: 0 });
  
    var h1P = $("#portfolio--h2");
        h1P.css({ top: '+35%' });
        h1P.css({ opacity: 0 });
   
    $(window).scroll(function() {
      var windowHeight = $(window).height();
      var scrollPosition = $(window).scrollTop();
      var divPOffset = divP.offset().top;
      var navHeight = $("nav").height();
      // off-bottom
    //   if (scrollPosition + windowHeigh < divPOffset) {
    //     divP.animate({ opacity:0 }, { duration: 400, queue: false }).animate({ left:'+35%' }, { duration: 400, queue: false });
    //     h1P.animate({ opacity:0 }, { duration: 400, queue: false }).animate({ right:'+35%' }, { duration: 400, queue: false });
    //   }
      // off-up
      if (scrollPosition  > divPOffset) {
        divP.animate({ opacity:0 }, { duration: 400, queue: false }).animate({ bottom:'-35%' }, { duration: 400, queue: false });
        h1P.animate({ opacity:0 }, { duration: 400, queue: false }).animate({ top:'-35%' }, { duration: 400, queue: false });
      }
    //   on
      if (scrollPosition + windowHeight >= divPOffset &&scrollPosition <= divPOffset ) {
        divP.animate({ opacity:1 }, { duration: 400, queue: false }).animate({ top:0 }, { duration: 400, queue: false });
        h1P.animate({ opacity:1 }, { duration: 400, queue: false }).animate({ top:0 }, { duration: 400, queue: false });
        }
    });
  });