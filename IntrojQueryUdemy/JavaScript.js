﻿//Select all divs and give them a purple background
//Select the divs with class "highlight" and make them 200 px wide
//Select the div with id "third" and give it an orange border
//Bonus: Select the first div only and change its font color to pink-- >$("div").css("background", "purple");
$(".highlight").css("width", "200px");
$("#third").css("border", "2px solid orange");
$("div:first-of-type").css("color", "pink");