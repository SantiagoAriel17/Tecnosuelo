
window.addEventListener('load', function () {
    // Esperar a que todo el contenido de la página se cargue completamente
    window.addEventListener('load', function() {
      // Ocultar el preloader una vez que se ha cargado la página
      document.getElementById('preloader').style.display = 'none';
  });
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