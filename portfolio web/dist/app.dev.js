"use strict";

var sections = document.querySelectorAll('.section');
var sectBtns = document.querySelectorAll('.control');
var sectBtn = document.querySelectorAll('.control');
var allSections = document.querySelector('.main-content');

function pageTransitions() {
  //Button click active class
  for (var i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      var currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].classList.remove('active-btn');
      this.classList.add('active-btn');
    });
  } //Sections Active 


  allSections.addEventListener('click', function (e) {
    var id = e.target.dataset.id;

    if (id) {
      //remove selected from the other btns
      sectBtns.forEach(function (btn) {
        btn.classList.remove('active');
      });
      e.target.classList.add('active'); //hide other sections

      sections.forEach(function (section) {
        section.classList.remove('active');
      });
      var element = document.getElementById(id);
      element.classList.add('active');
    }
  }); //Toggle theme

  var themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', function () {
    var element = document.body;
    element.classList.toggle('light-mode');
  });
}

pageTransitions();