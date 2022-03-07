window.addEventListener('load', function(){
    new Glider(document.querySelector('.customer__flex'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.customer__indicator',
        arrows: {
            prev: '.customer__back',
            next: '.customer__next'
        },
        responsive: [
            {
              breakpoint: 768,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            }
          ]
    });
})