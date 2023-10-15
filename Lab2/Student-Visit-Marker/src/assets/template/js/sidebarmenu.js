/*
Template Name: Admin Template
Author: Wrappixel

File: js
*/
// ==============================================================
// Auto select left navbar
// ==============================================================
$(function () {
    "use strict";
    var url = window.location + "";
    var path = url.replace(
      window.location.protocol + "//" + window.location.host + "/",
      ""
    );
    $(".sidebar-item").each(function () {
      var current = $(this).children("a")[0].href.replace(
        window.location.protocol + "//" + window.location.host + "/",
        ""
      );

      //console.log(`${current === path}: ${current} - ${path}`)
      if(current === path){
        
        $(this).children("a").addClass("active");
        $(this).addClass("selected");
      }
    });

  
    $(".sidebar-item a").on("click", function (e) {
      if (!$(this).parent().hasClass("selected")) {
        $(".sidebar-item").each(function (e) {
          $(this).removeClass("selected");
        });

        // hide any open menus and remove all other classes
        $("ul", $(this).parents("ul:first")).removeClass("in");
        $("a", $(this).parents("ul:first")).removeClass("active");
        $(this).parent().addClass("selected");
  
        // open our new menu and add the open class
        $(this).next("ul").addClass("in");
        $(this).addClass("active");
      }
    });
    $("#sidebarnav >li >a.has-arrow").on("click", function (e) {
      e.preventDefault();
    });
  });