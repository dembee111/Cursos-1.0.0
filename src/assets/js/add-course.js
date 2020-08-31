"use strict";
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tabcontent");
  x[n].style.display = "block";

  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn1").style.display = "none";
  } else {
    document.getElementById("prevBtn1").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn1").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn1").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n);
}

function clickedTest(evt) {
  var x, y;
  x = document.getElementsByClassName("tabcontent");
  y = x[currentTab].getElementsByClassName("choise");
  for (var i = 0; i < y.length; i++) {
    y[i].className = y[i].className.replace(" clicked", "");
  }
  evt.currentTarget.className += " clicked";
}

function nextPrev1(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tabcontent");

  // Hide the current tab:
  x[currentTab].style.display = "none";
  document.getElementsByClassName("step")[currentTab].className += " finish";

  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm1").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

// Add button
var max_fields = 5;
var max_fields_what = 6;
var add_button = $(".add_button");
var wrapper = $(".cont");

var add_button1 = $(".add_button1");
var wrapper1 = $(".cont1");

var x = 1;
var y = 1;
$(add_button).click(function (e) {
  e.preventDefault();
  if (x < max_fields) {
    x++;
    $(wrapper).append(
      '<div class="d-flex align-items-center mt-3"><button type="button" class="btn btn-white btn-xs delete"><i class="fe fe-x icon-lg text-danger "></i></button><input class="form-control" id="require" type="text" placeholder="Requirement"></div>'
    ); //add input box
  } else {
    alert("You Reached the limits");
  }
});

$(wrapper).on("click", ".delete", function (e) {
  e.preventDefault();
  $(this).parent("div").remove();
  x--;
});

// Add what will learn input
$(add_button1).click(function (e) {
  e.preventDefault();
  if (y < max_fields_what) {
    y++;
    $(wrapper1).append(
      '<div class="d-flex align-items-center mt-3"><button type="button" class="btn btn-white btn-xs delete"><i class="fe fe-x icon-lg text-danger "></i></button><input class="form-control" id="require" type="text" placeholder="What we learn"></div>'
    ); //add input box
  } else {
    alert("You Reached the limits");
  }
});

$(wrapper1).on("click", ".delete", function (e) {
  e.preventDefault();
  $(this).parent("div").remove();
  x--;
});
