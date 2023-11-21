$(window).on('load resize', function(){
 if($(window).width()<640){
    $(".multi").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    } else{
    $(".multi").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
    });
}
})
