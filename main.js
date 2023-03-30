$('.g-carousel').owlCarousel({
    center: true,
	autoplay:true,
    items:1,
    loop:true,
    margin:10,
    responsive:{
		0:{
            items:1
        },
        600:{
            items:3
        },
		1000:{
            items:5
        },
    }
});
$('.test-carousel').owlCarousel({
    center: true,
	autoplay:true,
    items:1,
    loop:true,
    margin:10,
    responsive:{
		0:{
            items:1
        },
        600:{
            items:1
        },
		1000:{
            items:3
        },
    }
});

function showNavbar(){
    document.querySelector(".navbar-collapse").style.display = "none"
    document.querySelector(".navbar-toggler").style.display = "block"
    document.querySelector(".nav-button").style.display = "block"
}

function hideNavbar(){
    document.querySelector(".navbar-collapse").style.display = "block"
    document.querySelector(".navbar-toggler").style.display = "none"
    document.querySelector(".nav-button").style.display = "none"
}