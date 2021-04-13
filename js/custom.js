$(function(){
    // active class in navbar 
    $('.navbar .nav-item').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    // banner slider 
    $('.banner-slider').slick({
        arrows:false,
        dots:true,
        autoplay:false,
    });

    $('.color-icon').on('click',function(){
      $('.color-packer').toggleClass('colorpos');
    });
    $('.color-packer ul .blue').on ('click',function(){
      $('body').addClass('blue').removeClass('green').removeClass('purple').removeClass('orange');
    });
    $('.color-packer ul .green').on ('click',function(){
      $('body').addClass('green').removeClass('blue').removeClass('purple').removeClass('orange');
    });
    $('.color-packer ul .purple').on ('click',function(){
      $('body').addClass('purple').removeClass('green').removeClass('blue').removeClass('orange');
    });
    $('.color-packer ul .orange').on ('click',function(){
      $('body').addClass('orange').removeClass('green').removeClass('purple').removeClass('blue');

      $('.color-packer ul .default').on ('click',function(){
        $('body').removeClass('orange').removeClass('green').removeClass('purple').removeClass('blue');
      });
    });

     // about video pup 
    $('.venobox').venobox({
        overlayColor: 'rgba(226, 60, 54, 0.782)',
        spinner: 'cube-grid',
        closeBackground: '#e23e38',
        spinColor:'#e23e38',
    });

    // testimonial slider 
    $('.feedback-slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
        ],
    });
    // counter up 
    $('.counter').counterUp({
        time: 1500,
    });
    // brand slider 
    $('.brand-slider').slick({
        autoplay:true,
        slidesToShow: 5,
        prevArrow: '<i class="slick-prev prev-arrow fas fa-chevron-left "></i>',
        nextArrow: '<i class="slick-next next-arrow fas fa-chevron-right"></i>',
        centerMode: true,
        centerPadding: '60px', 
        responsive: [
          {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
      ],
    }); 
}); 

$(function(){
  var backToTop = $('.backToTop');
  var html_body = $('html,body');
  
  
      $(window).scroll(function () { 
          var scrolling = $(this).scrollTop();
          if(scrolling > 200){
              backToTop.fadeIn();
          }else{
              backToTop.fadeOut();
          }
          if(scrolling >200){
               $('.navbar').addClass('fixd_nav');
           }else{
               $('.navbar').removeClass('fixd_nav');
           }
      });
  
  
      backToTop.on('click',function(){
          html_body.animate({
              scrollTop:0,
          },1500);
      });
  
      $('.navbar .navbar-nav .nav-item a').on('click', function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  html_body.animate({
                      scrollTop: target.offset().top - 0
                  }, 1500,);
                  return false;
              }
          }
      });  
  });
  

