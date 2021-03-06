$('#slider-home').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    nav:true,
    mouseDrag:false,
    autoplay:true,
    animateOut: 'slideOutLeft',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$("#testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1199,2], 
    loop:true,
    margin:10,
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        itemsMobile:[600,1],
        pagination:true,
        navigation:false,
        navigationText:["",""],
        slideSpeed:1000,
    autoPlay:true
});