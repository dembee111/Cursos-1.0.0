"use strict";var procTest,currentTabExam=0;function showTabExam(e){var t=document.getElementsByClassName("tab");document.getElementById("allTest").innerHTML=t.length,t[e].style.display="block",document.getElementById("oneTest").innerHTML=e+1,procTest=(e+1)/t.length*100,document.getElementById("procTest").innerHTML=procTest+"%",document.getElementById("progressBar").style.cssText="width:"+procTest+"%",document.getElementById("prevBtn").style.display=0==e?"none":"inline",e==t.length-1?document.getElementById("nextBtn").innerHTML="Submit":document.getElementById("nextBtn").innerHTML="Next",fixStepIndicator(e)}function clickedTestExam(e){for(var t=document.getElementsByClassName("tab")[currentTabExam].getElementsByClassName("choise"),n=0;n<t.length;n++)t[n].className=t[n].className.replace(" clicked","");e.currentTarget.className+=" clicked"}function nextPrev(e){var t=document.getElementsByClassName("tab");if(t[currentTabExam].style.display="none",document.getElementsByClassName("step")[currentTabExam].className+=" finish",(currentTabExam+=e)>=t.length)return document.getElementById("regForm").submit(),!1;showTabExam(currentTabExam)}function fixStepIndicator(e){for(var t=document.getElementsByClassName("step"),n=0;n<t.length;n++)t[n].className=t[n].className.replace(" active","");t[e].className+=" active"}showTabExam(currentTabExam);