$(document).ready(function(){

    // Sticky navbar
    let nav_offset_top = $(".header-area").height() + 10;
    
    function navbarFixed() {
        if($(".header-area").length) {
            $(window).scroll(function() {
                let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top) {
                    $(".header-area .main-menu").addClass("navbar-fixed");
                } else {
                    $(".header-area .main-menu").removeClass("navbar-fixed");
                }
            })
        }
    }

    navbarFixed();

    // Portfolio filtering
    let $btns = $('.portfolio-area .button-group button');

    $btns.click(function (e) {

        $('.portfolio-area .button-group button').removeClass('activeFilter');
        e.target.classList.add('activeFilter');

        let selector = $(e.target).attr('data-filter');
        $('.portfolio-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    // Make the page load with 'all' already active on portfolio
    $(".portfolio-area .button-group #btn1").trigger("click");

    // Year for copyright
    const year = new Date().getFullYear();
    $("#footer-text").text("© Izhak Latovski " + year);

    // Make menu nav item active when clicked
    $('.nav-link').click(function(e){
        var id = e.target.id;
        $('.nav-link').removeClass('active');
        $("#"+id).addClass('active');
       });

    // Make menu nav item active depending on section
    $("section").mouseenter(function(){
   	 var id = $(this).attr('id');
   	 $('.nav-link').removeClass('active');
   	 $("#"+id+"-nav-link").addClass('active');
   });

   // Make menu nav collapse after choosing
   $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

   
}); 