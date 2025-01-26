// $(document).ready(function() {
//     // Swiper: Slider
//         new Swiper('.swiper-container', {
//             loop: true,
//             nextButton: '.swiper-button-next',
//             prevButton: '.swiper-button-prev',
//             // slidesPerView: 3,
//             paginationClickable: true,
//             spaceBetween: 10,
//             breakpoints: {
//                 1920: {
//                     slidesPerView: 4.5,
//                     spaceBetween: 15
//                 },
//                 1500: {
//                     slidesPerView: 4,
//                     spaceBetween: 15
//                 },
//                 1028: {
//                     slidesPerView: 2,
//                     spaceBetween: 30
//                 },
//                 480: {
//                     slidesPerView: 1,
//                     spaceBetween: 10
//                 }
//             }
//         });
//     });
$(document).ready(function(){
    $(".gallery_slider").owlCarousel({
      loop: true,             // Enables infinite loop
      margin: 10,             // Space between items
      nav: false,             // Hide navigation buttons
      autoplay: true,         // Enables autoplay
      autoplayTimeout: 3000,  // Time between slides (3 seconds)
      autoplayHoverPause: true, // Pause on hover
      responsive: {
        0: {
          items: 1            // Show 1 item on small screens
        },
        600: {
          items: 2            // Show 2 items on medium screens
        },
        1000: {
          items: 3            // Show 3 items on large screens
        },   
         1920: {
            items: 4.5,
            spaceBetween: 15
        },
        1439: {
            items: 4.5,
            spaceBetween: 15
        }
      }
    });
  });

  $(document).ready(function(){
    $(".blog_slider").owlCarousel({
      loop: true,             // Enable infinite scrolling
      margin: 20,             // Margin between items
      nav: false,              // Show navigation arrows
      dots: true,             // Show navigation dots
      autoplay: true,         // Enable autoplay
      autoplayTimeout: 3000,  // Time between slides (3 seconds)
      autoplayHoverPause: true, // Pause autoplay on hover
      responsive: {
        0: {
          items: 1            // 1 card per slide for small screens
        },
        768: {
          items: 2            // 2 cards per slide for medium screens
        },
        1200: {
          items: 3            // 3 cards per slide for large screens
        }
      }
    });
  });
  
  

    // *************counter js**************

let count = document.querySelectorAll(".count")
let arr = Array.from(count)

arr.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},50)

})