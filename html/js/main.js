
function main() {
(function () {
   'use strict';
   let path = 'img/schnnap/360_main/';
    let imgs = [
    {img:'4.png'}
    ,{img:'8.png'}
    ,{img:'9.jpg'}
    ,{img:'i_1.pic.jpg'}
    ,{img:'i_2.pic.jpg'}
    ,{img:'i_3.pic.jpg'}
    ,{img:'i_4.pic.jpg'}
    ,{img:'12.jpg'}
    ,{img:'i_5.pic.png'}
  ]
   imgs.map(info => {
    $("#img-show-div").append('<div class="col-sm-6 col-md-4 col-lg-4">'+
    '<div class="portfolio-item">'+
      '<div class="hover-bg"> <a href="'+path+info.img+'" title="Project Title" data-lightbox-gallery="gallery1">'+
        '<div class="hover-text">'+
          '<h4>click to enlarge</h4>'+
        '</div>'+
        '<img src="'+path+"big_"+info.img+'" class="img-responsive" alt="Project Title" style="height: 259.7px; width: 389px;"> </a> </div>'+
    '</div>'+
 '</div>')
  })
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 50
            }, 900);
            return false;
          }
        }
      });


    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	
	
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });

 
		
}());


}
main();