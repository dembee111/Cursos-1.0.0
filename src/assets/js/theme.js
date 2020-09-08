"use strict";

// collapse new card
$('[name="gridRadios"]').on("change", function () {
  if ($(this).val() === "newCard") {
    $("#collapseExample").collapse("show");
  } else {
    $("#collapseExample").collapse("hide");
  }
});

//invoice print
function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}

//Owl carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
});
// fix rule
jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchstart", handle, {
      passive: !ns.includes("noPreventDefault"),
    });
  },
};
jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchmove", handle, {
      passive: !ns.includes("noPreventDefault"),
    });
  },
};

// Loader spinner
var myVar;

function iLoader() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

// Modal video js

$(document).ready(function () {
  // Gets the video src from the data-src on each button

  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });

  // when the modal is opened autoplay it
  $("#myModal").on("shown.bs.modal", function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });

  // stop playing the youtube video when I close the modal
  $("#myModal").on("hide.bs.modal", function (e) {
    // a poor man's stop video
    $("#video").attr("src", $videoSrc);
  });

  // document ready
});

// Scroll button go to top
$(document).ready(function () {
  // show hide button on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1200) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });

  // Smooth scrolling to top
  $(".scrollToTop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });
});

// Course Detail Page add Comment
var windowHeight = window.innerHeight - 80;

document.getElementById("innerHeight").style.cssText =
  "height: " + windowHeight + "px; overflow-y: scroll;";

function toggleText(showMore) {
  var x = document.getElementById(showMore);
  if (x.innerHTML === "Show more") {
    x.innerHTML = "Show less";
  } else {
    x.innerHTML = "Show more";
  }
}
