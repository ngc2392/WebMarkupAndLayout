// mobile navigation
document.getElementsByClassName("mobile-nav-icon")[0].addEventListener('click', function(e) {
    // returns array of DOM elements 
    document.getElementsByClassName("mobile-nav")[0].style.height="100%";
});


// clicking anywhere besides the links will close the nav 


if ($('body').hasClass('home-page-body')) {

    var slideIndex = 1;
    showSlides(1);

    // can also use .querySelector
    let sliderArrowPrev = document.getElementsByClassName("prev-arrow")[0];
    let sliderArrowNext = document.getElementsByClassName("next-arrow")[0];
    

    sliderArrowPrev.addEventListener("click", function(e) {

        showSlides(slideIndex += -1);


       // console.log(this);
        

    });

    sliderArrowNext.addEventListener("click", function(e) {

        showSlides(slideIndex += 1);


       // console.log(this);
    
    });
    

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // n is the slide index of the slide that is about to show  
    function showSlides(n) {

        // var is scoped to the entire function.  Let is scoped to the enclosing block.

        //var i;
        const slides = document.getElementsByClassName("slide");
        const dots = document.getElementsByClassName("dot");
        if (n > slides.length) { 
            slideIndex = slides.length;
        }
        if (n < 1) { 
            //slideIndex = slides.length; 
            slideIndex = 1;
            return;
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";

    }


    /*
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slide");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { 
           // slideIndex = 1; 
        }
        if (n < 1) { 
            slideIndex = slides.length; 
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    */
}