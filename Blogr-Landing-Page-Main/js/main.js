var nav_mobile = document.getElementById("nav-mobile");
var header_menu = document.getElementById("header-menu");
var coll = document.getElementsByClassName("collapsible");
var i;
var submenu_0 = document.getElementById("nav-mobile-option-product").id;
var submenu_1 = document.getElementById("nav-mobile-option-company").id;
var submenu_2 = document.getElementById("nav-mobile-option-connect").id;
var arrow_0 = document.getElementById('arrow-light-0');
var arrow_1 = document.getElementById('arrow-light-1');
var arrow_2 = document.getElementById('arrow-light-2');
var arrow_dark_0 = document.getElementById('arrow-dark-0');
var arrow_dark_1 = document.getElementById('arrow-dark-1');
var arrow_dark_2 = document.getElementById('arrow-dark-2');



//nav bar
$(document).mouseup(function (e) {
  if ($(e.target).closest("#header-sub-option-main-0").length
              === 0) {
      $("#header-sub-option-main-0").fadeOut();
      arrow_0.classList.remove('rotate_180');
      $("#arrow-light-0").toggleClass("rotate_0");
  }
  if ($(e.target).closest("#header-sub-option-main-1").length
              === 0) {
      $("#header-sub-option-main-1").fadeOut();
      arrow_1.classList.remove('rotate_180');
      $("#arrow-light-1").toggleClass("rotate_0");
  }
  if ($(e.target).closest("#header-sub-option-main-2").length
              === 0) {
      $("#header-sub-option-main-2").fadeOut();
      arrow_2.classList.remove('rotate_180');
      $("#arrow-light-2").toggleClass("rotate_0");
  }
});
$(function() {
  $("#header-option-0").click(function() {
      $("#header-sub-option-main-0").fadeIn();
      if (arrow_0.classList.contains('rotate_180') == false){
        $("#arrow-light-0").toggleClass("rotate_180");
        arrow_0.classList.remove('rotate_0');
      }   
  }).focusout(function () {
    $("#header-sub-option-main-0").fadeOut(); 
  });

  $("#header-option-1").click(function() {
    $("#header-sub-option-main-1").fadeIn();
    if (arrow_1.classList.contains('rotate_180') == false){
      $("#arrow-light-1").toggleClass("rotate_180");
      arrow_1.classList.remove('rotate_0');
    }   
}).focusout(function () {
    $("#header-sub-option-main-1").fadeOut();
});
$("#header-option-2").click(function() {
  $("#header-sub-option-main-2").fadeIn();
  if (arrow_2.classList.contains('rotate_180') == false){
    $("#arrow-light-2").toggleClass("rotate_180");
    arrow_2.classList.remove('rotate_0');
  }   
}).focusout(function () {
  $("#header-sub-option-main-2").fadeOut();
});
});
// mobile nav menu
$(document).ready(function() {
    $("#header-menu").click(function() {
      $(".content1").toggleClass("active");
      $("#nav-mobile").toggleClass("active");
    });
  });
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      content.style.display = "block";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
function rotate(sub_element){
  if (sub_element === submenu_0 && arrow_dark_0.classList.contains('rotate_0') == true){
    $("#arrow-dark-0").toggleClass("rotate_180");
    arrow_dark_0.classList.remove('rotate_0');
  }
  else if(sub_element === submenu_0){
    $("#arrow-dark-0").toggleClass("rotate_0");
    arrow_dark_0.classList.remove('rotate_180');
  }
  if (sub_element === submenu_1 && arrow_dark_1.classList.contains('rotate_0') == true){
    $("#arrow-dark-1").toggleClass("rotate_180");
    arrow_dark_1.classList.remove('rotate_0');
  }
  else if(sub_element === submenu_1){
    $("#arrow-dark-1").toggleClass("rotate_0");
    arrow_dark_1.classList.remove('rotate_180');
  }
  if (sub_element === submenu_2 && arrow_dark_2.classList.contains('rotate_0') == true){
    $("#arrow-dark-2").toggleClass("rotate_180");
    arrow_dark_2.classList.remove('rotate_0');
  }
  else if(sub_element === submenu_2){
    $("#arrow-dark-2").toggleClass("rotate_0");
    arrow_dark_2.classList.remove('rotate_180');
  }
}