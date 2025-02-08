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
  
  
  
  $(document).ready(function(){
    $(".client_slider").owlCarousel({
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


// typewrite 
var TxtType = function(e, t, s) {
  this.toRotate = t,
  this.el = e,
  this.loopNum = 0,
  this.period = parseInt(s, 10) || 2e3,
  this.txt = "",
  this.tick(),
  this.isDeleting = !1
};
TxtType.prototype.tick = function() {
  var e = this.loopNum % this.toRotate.length
    , t = this.toRotate[e];
  this.isDeleting ? this.txt = t.substring(0, this.txt.length - 1) : this.txt = t.substring(0, this.txt.length + 1),
  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  var s = this
    , i = 200 - 100 * Math.random();
  this.isDeleting && (i /= 2),
  this.isDeleting || this.txt !== t ? this.isDeleting && "" === this.txt && (this.isDeleting = !1,
  this.loopNum++,
  i = 500) : (i = this.period,
  this.isDeleting = !0),
  setTimeout(function() {
      s.tick()
  }, i)
}
,
window.onload = function() {
  for (var e = document.getElementsByClassName("typewrite"), t = 0; t < e.length; t++) {
      var s = e[t].getAttribute("data-type")
        , i = e[t].getAttribute("data-period");
      s && new TxtType(e[t],JSON.parse(s),i)
  }
  var o = document.createElement("style");
  o.type = "text/css",
  o.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}",
  document.body.appendChild(o)
}
;
