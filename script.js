//tab slider
    $('.tab-slider').slick({
      
      slidesToShow: 3,
      slidesToScroll: 2,
      infinite: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        
      ]

    });


$('a[data-toggle]').click(function(){


      $('a[data-toggle]').removeClass('active');

      if( $(this).parents() === $('.slick-slide.slick-current.slick-active') ) {

        $(this).addClass('active');

        console.log('it is working');

      }

    });