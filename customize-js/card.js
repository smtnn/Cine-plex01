var multipleItemCarousel = document.querySelector('#carouselExampleControls')
// const b1 = docume
if(window.matchMedia("(min-width:576px)").matches){
    var carousel = new bootstrap.Carousel(multipleItemCarousel,
    {
        interval: false,
    })

    var carouselWidth = $('.carousel-inner-running')[0].scrollWidth;
    var cardlWidth = $('.carousel-item-running').width();

    var scrollPosition = 0;

    $('.carousel-control-next-running').on('click', function(){
        if(scrollPosition < (carouselWidth - (cardlWidth * 4))){
            scrollPosition = scrollPosition + cardlWidth;
            $('.carousel-inner-running').animate({scrollLeft: scrollPosition}, 600)
        }
    });

    $('.carousel-control-prev-running').on('click', function(){
        if(scrollPosition > 0){
            scrollPosition = scrollPosition - cardlWidth;
            $('.carousel-inner-running').animate({scrollLeft: scrollPosition}, 600)
        }
    });
}else{
    $(multipleItemCarousel).addClass('slide');
}

// up_comeing
var multipleItemCarouselUP = document.querySelector('#carouselExampleControls_UP')

if(window.matchMedia("(min-width:576px)").matches){
    var carousel = new bootstrap.Carousel(multipleItemCarouselUP,
    {
        interval: false,
    })

    var carouselWidthUP = $('.carousel-inner_UP')[0].scrollWidth;
    var cardlWidthUP = $('.carousel-item_UP').width();

    var scrollPosition = 0;

    $('.carousel-control-next-UP').on('click', function(){
        if(scrollPosition < (carouselWidthUP - (cardlWidthUP * 4))){
            scrollPosition = scrollPosition + cardlWidthUP;
            $('.carousel-inner_UP').animate({scrollLeft: scrollPosition}, 600)
        }
    });

    $('.carousel-control-prev-UP').on('click', function(){
        if(scrollPosition > 0){
            scrollPosition = scrollPosition - cardlWidthUP;
            $('.carousel-inner_UP').animate({scrollLeft: scrollPosition}, 600)
        }
    });
}else{
    $(multipleItemCarouselUP).addClass('slide');
}