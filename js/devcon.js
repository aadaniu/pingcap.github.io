!function(e){function n(i){if(t[i])return t[i].exports;var c=t[i]={i:i,l:!1,exports:{}};return e[i].call(c.exports,c,c.exports,n),c.l=!0,c.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/js/",n(n.s=18)}({18:function(e,n,t){e.exports=t(19)},19:function(e,n,t){"use strict";function i(){var e=$(this).scrollTop(),n=$("header").height();e>0?($("header").hide(),$(".devcon-nav").css("top","0"),$(".devCon").css("padding-top",n)):($("header").show(),$(".devcon-nav").css("top",n),$(".devCon").css("padding-top",2*n))}function c(){var e,n=$(this)[0].className;switch(n){case"schedule-btn":e=".agenda__container h1";break;case"instructor-btn":e=".instructors__container h1";break;case"contact-btn":e=".contact__container h1";break;case"signup-btn":e=".signup__container"}var t=0;t=$("header").length&&!$("header").is(":hidden")?2*$("header").height():$("header").height(),$("html, body").animate({scrollTop:$(e).offset().top-t},1e3)}function s(){window.matchMedia("(max-width: 1100px)").matches?$(".banner .image img").attr("src","/images/community/devcon-banner-mobile.png"):$(".banner .image img").attr("src","/images/community/devcon-banner-pc.png")}function o(){var e=$("header").height();$("header").length&&!$("header").is(":hidden")?($(".devcon-nav").css("top",e),$(".devcon-nav").css("height",e),$(".devCon").css("padding-top",2*e)):($(".devcon-nav").css("top",0),$(".devcon-nav").css("height",e))}$(document).ready(function(){if($("header").length){var e=$("header").height();$(".devcon-nav").css("top",e),$(".devcon-nav").css("height",e),$(".devCon").css("padding-top",2*e)}$(".detail-block").hide(),s(),$(window).scroll(i),$(window).resize(o),$(window).resize(s),$(".schedule-btn").click(c),$(".instructor-btn").click(c),$(".contact-btn").click(c),$(".signup-btn").click(c),$(".instructor").click(function(){if(window.matchMedia("(max-width: 1024px)").matches){$(".intro").css("opacity","0");$(this).find(".intro").css("opacity","1")}}),$(".section-burger").click(function(){"block"==$(".dropdown-btns").css("display")?$(".dropdown-btns").css("display","none"):$(".dropdown-btns").css("display","block")});var n;$(".agenda__table .collapsable").click(function(){window.matchMedia("(min-width: 550px)").matches&&(n&&(n.removeClass("selected-bg"),n.children()[3].innerText="+"),$(this).addClass("selected-bg"),"none"==$(this).next()[0].style.display?($(".detail-block").hide(),$(this).next().show(),$(this).children("td")[3].innerText="-"):($(this).next().hide(),$(this).removeClass("selected-bg"),$(this).children("td")[3].innerText="+"),n=$(this))})})}});