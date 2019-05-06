$(document).ready(function() {

    // Smooth Scroll.  From https://css-tricks.com/snippets/jquery/smooth-scrolling/

// Scroll to specific values
// scrollTo is the same
window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
  });
  
  // Scroll certain amounts from current position 
  window.scrollBy({ 
    top: 100, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });


// mobile navigation
document.getElementsByClassName("mobile-nav-icon")[0].addEventListener('click', function(e) {
      
    // returns array of DOM elements 
    document.getElementsByClassName("mobile-nav")[0].style.height="100%";

    // disable vertical scrolling
    document.getElementsByTagName('body')[0].className += ' disable-scroll';
});


// Clicking anywhere on the div, except the links, will close the mobiel nav window

        document.getElementsByClassName("mobile-nav")[0].addEventListener('click', function (e) {
           console.log("clicked somewhere on mobile nav");
           console.log(  document.getElementsByTagName('body')[0].classList);
           
           // e.target returns the DOM element 
           console.log(e.target.nodeName);

           if(e.target.nodeName != 'A') {
            document.getElementsByClassName("mobile-nav")[0].style.height="0";
           }

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

    // https://stackoverflow.com/questions/15843581/how-to-correctly-iterate-through-getelementsbyclassname
    // https://stackoverflow.com/questions/2125714/explanation-of-slice-call-in-javascript
    // https://stackoverflow.com/questions/34518321/iterate-through-all-available-getelementsbyclassname-nodes

    var dots = document.getElementsByClassName('dots');

    console.log(dots.length);

    for(var i = 0; i < dots.length; i++) {
        console.log("hi", dots[i]);
    }

   
    

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

if($('body').hasClass('drinks-page-body')){

    $(function() {
        // generate beer grid
        generateDrinkList(drinks);
    });


    var drinks = [
        {
            "id": 0, 
            "name": "Guinness Draught",
            "type": "Stout - Irish Dry", 
            "abv": "4.2", 
            "ibu": "45", 
            "company": "Guinness",
            "location": "St. James's Gate, Dublin", 
            "description": "Swirling clouds tumble as the storm begins to calm. Settle. Breathe in the moment, then break through the smooth, light head to the bittersweet reward."
        }, {
            "id": 1, 
            "name": "Shiner Ruby Redbird ",
            "type": "Fruit Beer", 
            "abv": "4.01", 
            "ibu": "13", 
            "company": "Spoetzl Brewery  ",
            "location": "Shiner, TX", 
            "description": "Brewed with genuine Texas Rio Red Grapefruit, the signature sweet citrus of the Rio Grande Valley, and ginger. This lager beer features grapefruit tartness and finishes with a 'lil kick of ginger. With Texas Ruby Red Grapefruit and Ginger, a crisp and refreshing summer beer."
        }, {
            "id": 2, 
            "name": "Lite ",
            "type": "Lager - American Light", 
            "abv": "4.2", 
            "ibu": "10", 
            "company": "Miller Brewing Company  ",
            "location": "Milwaukee, WI  ", 
            "description": "Our flagship brand, Miller Lite, is the great tasting, less filling beer that defined the American light beer category in 1975. We deliver a clear, simple message to consumers:"
        }, {
            "id": 3, 
            "name": "The Hemperor HPA ",
            "type": "IPA - American", 
            "abv": "7", 
            "ibu": "55", 
            "company": "New Belgium Brewing Company",
            "location": "Fort Collins, CO", 
            "description": "Get ready: The Hemperor HPA, an exciting new style, will change the way you think about hoppy beers. We found a unique way to recreate the flavors of hemp with a beer that complements the inclusion of hop flavors and hemp hearts (seeds) to deliver something new, delicious and extremely dank."
        }, {
            "id": 4, 
            "name": "Misadventures And Missteps ",
            "type": "Belgian Strong Golden Ale", 
            "abv": "10", 
            "ibu": "", 
            "company": "Neshaminy Creek Brewing Company", 
            "location": "Croydon, PA", 
            "description": "Belgian Golden Strong brewed with Lemongrass and Pink Peppercorns"
        }, {
            "id": 5, 
            "name": "Summer Crush",
            "type": "Pale Wheat Ale - American", 
            "abv": "5", 
            "ibu": "", 
            "company": "Yards Brewing Co.",
            "location": "Philadelphia, PA", 
            "description": "Summer Crush is an easy drinking, flavorful Wheat Beer with a juicy citrus finish that transports you to bright summer days and hot summer nights. Brewed with orange and lime zest, this crushable delight brings the refreshment to the shore, the front stoop, the rooftop, and everywhere else you celebrate summer."
        }
    ];

    }

    var generateDrinkList = function(array) {
        array.forEach((element, index) => {
            const drinkCard = document.createElement('div');

            const markup = `
                <div class="beer-card">
                    <div class="header">
                        <div class="name">${element.name}</div>
                        <div class="type">${element.type}</div>
                    </div>
                    
                    <div class="info">
                        <div class="abv">${element.abv}% ABV</div>
                        <div class="ibu">${element.ibu} IBU</div>
                        <div class="company">${element.company}</div>
                        <div class="location">${element.location}</div>
                    </div>

                    <div class="description">${element.description}</div>
                
                </div>
            `;

            drinkCard.innerHTML = markup;
            drinksGrid = document.querySelector('.drinks-page-body .beer-grid')
            drinksGrid.appendChild(drinkCard);
        });
    }

    if($('body').hasClass('menu-page-body')) {
        document.querySelector('.scroll-to').addEventListener('click', function() {
            
            arrow = this.children[0];
            // difference between .childNodes and .children: https://www.w3schools.com/jsref/prop_element_children.asp
            linkBox = this.children[2];


            if (linkBox.offsetHeight > 20) {
                linkBox.classList.remove('link-box-grow');
                arrow.classList.remove('fa-chevron-down');
                arrow.classList.add('fa-chevron-up');
            } else {
                
                linkBox.classList.add('link-box-grow');
                arrow.classList.remove('fa-chevron-up');
                arrow.classList.add('fa-chevron-down');

            }

           
        });

        document.querySelectorAll('.link-box > span').forEach((element, index) => {
            element.addEventListener('click', function() {

                const sectionToGoTo = this.dataset.scrollto;

                document.querySelector('.' + sectionToGoTo).scrollIntoView({
                    behavior: 'smooth'
                });

            });
        });

    }

});

