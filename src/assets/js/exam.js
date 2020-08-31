"use strict";
var currentTabExam = 0; // Current tab is set to be the first tab (0)
showTabExam(currentTabExam); // Display the current tab
var procTest; // for %

function showTabExam(n) {
  // This function will display the specified tab of the form...
  var tab = document.getElementsByClassName("tab");
  // This Area will display the indicators and progress bar of form...
  document.getElementById("allTest").innerHTML = tab.length;
  tab[n].style.display = "block";
  document.getElementById("oneTest").innerHTML = n + 1;
  procTest = ((n + 1) / tab.length) * 100;
  document.getElementById("procTest").innerHTML = procTest + "%";
  document.getElementById("progressBar").style.cssText =
    "width:" + procTest + "%";

  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == tab.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n);
}
// Exam tab for indicator section
function clickedTestExam(evt) {
  var x, y;
  x = document.getElementsByClassName("tab");
  y = x[currentTabExam].getElementsByClassName("choise");
  for (var i = 0; i < y.length; i++) {
    y[i].className = y[i].className.replace(" clicked", "");
  }
  evt.currentTarget.className += " clicked";
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");

  // Hide the current tab:
  x[currentTabExam].style.display = "none";
  document.getElementsByClassName("step")[currentTabExam].className +=
    " finish";

  // Increase or decrease the current tab by 1:
  currentTabExam = currentTabExam + n;
  // if you have reached the end of the form...
  if (currentTabExam >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTabExam(currentTabExam);
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
