
  if ($(window).width() > 992) {
     $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
  });
  }

$( "ul.nav li.dropdown" ).click(function() {
  $(this).toggleClass('show-dropdown');
});


$(function() {
    $(".switch-btn").on("click", function() {
        $(".switch-btn").removeClass("active");  // remove active class from all
        $(this).addClass("active");   
        $('.node-tab').hide();
        $(".code-response").hide();
    });
});
$(function() {
    $(".bestseller-btn").on("click", function() {
    $('.bestsellers-tab').show();
      });
});
$(function() {
    $(".monitoring-btn").on("click", function() {
    $('.monitoring-tab').show();
  });
});
$(function() {
    $(".opportunities-btn").on("click", function() {
    $('.opportunities-tab').show();
  });
});

$(function() {
    $(".resellers-btn").on("click", function() {
    $('.resellers-tab').show();
  });
});

$(function() {
    $(".pt-intent-success").on("click", function() {
        $('.code-response').slideToggle( "200", function() {
        // Animation complete.
     });
    });
});
$(function() {
    $(".devicon-python-plain").on("click", function() {
      $(".devicon").removeClass('active');
      $(".devicon-python-plain").addClass('active');
        $('.code-snippet').hide();
        $('.python-snippet').show();
    });
});
$(function() {
    $(".devicon-ruby-plain").on("click", function() {
      $(".devicon").removeClass('active');
      $(".devicon-ruby-plain").addClass('active');
        $('.code-snippet').hide();
        $('.ruby-snippet').show();
    });
});
$(function() {
    $(".devicon-nodejs-plain").on("click", function() {
      $(".devicon").removeClass('active');
      $(".devicon-nodejs-plain").addClass('active');
        $('.code-snippet').hide();
        $('.node-snippet').show();
    });
});
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function(event) {
  $('html').one('click',function() {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});


$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});

$("#mileage").ionRangeSlider({
    type: "double",
    grid_margin: false,
    min: 0,
    max: 1200000,
    from: 50000,
    to: 700000,
    step: 1000,
    prettify_separator: '.',
    hide_min_max: true,
    postfix: ' km',
    decorate_both: false
});
$("#year").ionRangeSlider({
    type: "double",
    grid_margin: false,
    min: 1995,
    max: 2018,
    from: 2000,
    to: 2010,
    prettify_separator: '',
    hide_min_max: true,
});

(function($) {
    
    $.fn.bmdIframe = function( options ) {
        var self = this;
        var settings = $.extend({
            classBtn: '.bmd-modalButton',
            defaultW: 640,
            defaultH: 360
        }, options );
      
        $(settings.classBtn).on('click', function(e) {
          var allowFullscreen = $(this).attr('data-bmdVideoFullscreen') || true;
          
          var dataVideo = {
            'src': $(this).attr('data-bmdSrc'),
            'height': $(this).attr('data-bmdHeight') || settings.defaultH,
            'width': $(this).attr('data-bmdWidth') || settings.defaultW
          };
          
          if ( allowFullscreen ) dataVideo.allowfullscreen = "";
          
          // stampiamo i nostri dati nell'iframe
          $(self).find("iframe").attr(dataVideo);
        });
      
        // se si chiude la modale resettiamo i dati dell'iframe per impedire ad un video di continuare a riprodursi anche quando la modale è chiusa
        this.on('hidden.bs.modal', function(){
          $(this).find('iframe').html("").attr("src", "");
        });
      
        return this;
    };
  
})(jQuery);

jQuery(document).ready(function(){
  jQuery("#myModal").bmdIframe();
});


$(function() {
  function addScore(score, $domElement) {
    $("<span class='stars-container'>")
      .addClass("stars-" + score.toString())
      .text("★★★★★")
      .appendTo($domElement);
  }

  addScore(70, $("#fixture"));
});


$(function() {
    $(".job-trigger").on("click", function() {
      $('.single-job-container').show();
      $('.all-jobs-container').hide();
    });
});  
$(function() {
    $(".job-hide-btn").on("click", function() {
      $('.single-job-container').hide();
      $('.all-jobs-container').show();
    });
});

$(function() {
    $(".competitor-next").on("click", function() {
      $('.analysis-ok').hide();
      $('.analysis-ko').show();
    });
});
$(function() {
    $(".accept-email").on("click", function() {
      $('.analysis-ko').hide();
      $('.analysis-ko-2').show();
    });
});

$(function() {
    $(".accept-email").on("click", function() {
      $('.checkout-ko').hide();
      $('.checkout-ko-2').show();
    });
});
$(function() {
    $(".submit-marketplace").on("click", function() {
      $('.check-ok').hide();
      $('.checkout-ko').show();
    });
});

$(function(){
  $(".brand-next").on("click", function (){
    $(".brand-ok").hide();
    $(".brand-success").show();
  })
})


$(function(){
  $(".leads-next").on("click", function (){
    $(".leads-ok").hide();
    $(".leads-success").show();
  })
})
$(function(){
  $(".quote-next").on("click", function (){
    $(".quote-ok").hide();
    $(".quote-success").show();
  })
})

