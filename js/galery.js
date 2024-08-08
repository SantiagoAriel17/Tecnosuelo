
window.addEventListener('load', function () {
  var preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});



(function() {
  var $lightbox = $("<div class='lightbox'></div>");
  var $img = $("<img>");
  var $caption = $("<p class='caption'></p>");

  // Agregar imagen y título al lightbox
  $lightbox
    .append($img)
    .append($caption);

  // Agregar lightbox al documento
  $('body').append($lightbox);

  $('.lightbox-gallery img').click(function(e) {
    e.preventDefault();

    // Obtener enlace de la imagen y descripción
    var src = $(this).attr("data-image-hd");
    var cap = $(this).attr("alt");

    // Agregar datos al lightbox
    $img.attr('src', src);
    $caption.text(cap);

    // Mostrar lightbox
    $lightbox.fadeIn('fast');

    $lightbox.click(function() {
      $lightbox.fadeOut('fast');
    });
  });

}());

// Función para verificar si una sección está visible en la ventana
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

     // Función para animar elementos que entran desde la derecha al aparecer en pantalla
     function animateFromRight(element) {
      // Agrega la clase de animación al elemento
      element.classList.add('animate-from-right');
    }
    

// Función para manejar la animación al hacer scroll
function handleScrollAnimation() {
  var elementsToAnimate = document.querySelectorAll('.animate-from-right');
  elementsToAnimate.forEach(function(element) {
    if (isElementInViewport(element)) {
      animateFromRight(element);
    }
  });
}

// Función para determinar si un elemento está en el viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para activar la animación cuando una sección es visible
function checkAnimations() {
  var animatedSections = document.querySelectorAll('.animated');
  animatedSections.forEach(function(section) {
    if (isElementInViewport(section) && window.scrollY > 0) {
      section.classList.add('visible');
    }
  });
}

// Manejador de evento para animar elementos al hacer scroll
window.addEventListener('scroll', function() {
  handleScrollAnimation();
});

// Animar elementos que ya están en el viewport al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  handleScrollAnimation();
});


// Detectar el desplazamiento de la página y verificar animaciones al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    checkAnimations();
  });

  // Agregar animación desde la derecha hacia el centro
  function animateSection(section) {
    section.classList.add('animate-from-right');
  }

  var sections = document.querySelectorAll('.animated');
  window.addEventListener('scroll', function() {
    sections.forEach(function(section) {
      if (isElementInViewport(section) && window.scrollY > 0) {
        animateSection(section);
      }
    });
  });
});

/* Video Lightbox - Magnific Popup */
$('.popup-youtube, .popup-vimeo').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false,
  iframe: {
      patterns: {
          youtube: {
              index: 'youtube.com/', 
              id: function(url) {        
                  var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                  if ( !m || !m[1] ) return null;
                  return m[1];
              },
              src: 'https://www.youtube.com/embed/%id%?autoplay=1'
          },
          vimeo: {
              index: 'vimeo.com/', 
              id: function(url) {        
                  var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                  if ( !m || !m[5] ) return null;
                  return m[5];
              },
              src: 'https://player.vimeo.com/video/%id%?autoplay=1'
          }
      }
  }
});


/* Details Lightbox - Magnific Popup */
$('.popup-with-move-anim').magnificPopup({
type: 'inline',
fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
fixedBgPos: true,
overflowY: 'auto',
closeBtnInside: true,
preloader: false,
midClick: true,
removalDelay: 300,
mainClass: 'my-mfp-slide-bottom'
});

/* Template: Tivo - SaaS App HTML Landing Page Template
   Author: Inovatik
   Created: Sep 2019
   Description: Custom JS file
*/


(function($) {
  "use strict"; 

/* Preloader */
$(window).on('load', function() {
  var preloaderFadeOutTime = 5000;
  function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    setTimeout(function() {
      preloader.fadeOut(preloaderFadeOutTime);
    }, 500);
  }
  hidePreloader();
});



  // closes the responsive menu on menu item click
  $(".navbar-nav li a").on("click", function(event) {
  if (!$(this).parent().hasClass('dropdown'))
      $(".navbar-collapse").collapse('hide');
  });


  /* Image Slider - Swiper */
  var imageSlider = new Swiper('.image-slider', {
      autoplay: {
          delay: 2000,
          disableOnInteraction: false
  },
      loop: true,
      spaceBetween: 30,
      slidesPerView: 5,
  breakpoints: {
          // when window is <= 580px
          580: {
              slidesPerView: 1,
              spaceBetween: 10
          },
          // when window is <= 768px
          768: {
              slidesPerView: 2,
              spaceBetween: 20
          },
          // when window is <= 992px
          992: {
              slidesPerView: 3,
              spaceBetween: 20
          },
          // when window is <= 1200px
          1200: {
              slidesPerView: 4,
              spaceBetween: 20
          },

      }
  });


  /* Text Slider - Swiper */
var textSlider = new Swiper('.text-slider', {
      autoplay: {
          delay: 6000,
          disableOnInteraction: false
  },
      loop: true,
      navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
  });




  /* Details Lightbox - Magnific Popup */
$('.popup-with-move-anim').magnificPopup({
  type: 'inline',
  fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
  fixedBgPos: true,
  overflowY: 'auto',
  closeBtnInside: true,
  preloader: false,
  midClick: true,
  removalDelay: 300,
  mainClass: 'my-mfp-slide-bottom'
});
  
  
  /* Move Form Fields Label When User Types */
  // for input and textarea fields
  $("input, textarea").keyup(function(){
  if ($(this).val() != '') {
    $(this).addClass('notEmpty');
  } else {
    $(this).removeClass('notEmpty');
  }
  });



})(jQuery);


window.addEventListener('load', function () {
  var preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});



(function() {
  var $lightbox = $("<div class='lightbox'></div>");
  var $img = $("<img>");
  var $caption = $("<p class='caption'></p>");

  // Agregar imagen y título al lightbox
  $lightbox
    .append($img)
    .append($caption);

  // Agregar lightbox al documento
  $('body').append($lightbox);

  $('.lightbox-gallery img').click(function(e) {
    e.preventDefault();

    // Obtener enlace de la imagen y descripción
    var src = $(this).attr("data-image-hd");
    var cap = $(this).attr("alt");

    // Agregar datos al lightbox
    $img.attr('src', src);
    $caption.text(cap);

    // Mostrar lightbox
    $lightbox.fadeIn('fast');

    $lightbox.click(function() {
      $lightbox.fadeOut('fast');
    });
  });

}());

// Función para verificar si una sección está visible en la ventana
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

     // Función para animar elementos que entran desde la derecha al aparecer en pantalla
     function animateFromRight(element) {
      // Agrega la clase de animación al elemento
      element.classList.add('animate-from-right');
    }
    

// Función para manejar la animación al hacer scroll
function handleScrollAnimation() {
  var elementsToAnimate = document.querySelectorAll('.animate-from-right');
  elementsToAnimate.forEach(function(element) {
    if (isElementInViewport(element)) {
      animateFromRight(element);
    }
  });
}

// Función para determinar si un elemento está en el viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para activar la animación cuando una sección es visible
function checkAnimations() {
  var animatedSections = document.querySelectorAll('.animated');
  animatedSections.forEach(function(section) {
    if (isElementInViewport(section) && window.scrollY > 0) {
      section.classList.add('visible');
    }
  });
}

// Manejador de evento para animar elementos al hacer scroll
window.addEventListener('scroll', function() {
  handleScrollAnimation();
});

// Animar elementos que ya están en el viewport al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  handleScrollAnimation();
});


// Detectar el desplazamiento de la página y verificar animaciones al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    checkAnimations();
  });

  // Agregar animación desde la derecha hacia el centro
  function animateSection(section) {
    section.classList.add('animate-from-right');
  }

  var sections = document.querySelectorAll('.animated');
  window.addEventListener('scroll', function() {
    sections.forEach(function(section) {
      if (isElementInViewport(section) && window.scrollY > 0) {
        animateSection(section);
      }
    });
  });
});

/* Video Lightbox - Magnific Popup */
$('.popup-youtube, .popup-vimeo').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false,
  iframe: {
      patterns: {
          youtube: {
              index: 'youtube.com/', 
              id: function(url) {        
                  var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                  if ( !m || !m[1] ) return null;
                  return m[1];
              },
              src: 'https://www.youtube.com/embed/%id%?autoplay=1'
          },
          vimeo: {
              index: 'vimeo.com/', 
              id: function(url) {        
                  var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                  if ( !m || !m[5] ) return null;
                  return m[5];
              },
              src: 'https://player.vimeo.com/video/%id%?autoplay=1'
          }
      }
  }
});


/* Details Lightbox - Magnific Popup */
$('.popup-with-move-anim').magnificPopup({
type: 'inline',
fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
fixedBgPos: true,
overflowY: 'auto',
closeBtnInside: true,
preloader: false,
midClick: true,
removalDelay: 300,
mainClass: 'my-mfp-slide-bottom'
});