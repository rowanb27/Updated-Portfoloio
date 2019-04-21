$(document).ready(function() {


$("#aboutMeContainer").hide();
$("#contactContainer").hide();
$("#portfolioContainer").hide();


$("#aboutMe").on("click", function() {
    $("#contactContainer").hide();
    $("#portfolioContainer").hide();
    $("#aboutMeContainer").show();
});

$("#contact").on("click", function() {
    $("#portfolioContainer").hide();
    $("#aboutMeContainer").hide();
    $("#contactContainer").show();
});

$("#portfolio").on("click", function() { 
    $("#aboutMeContainer").hide();
    $("#contactContainer").hide();
    $("#portfolioContainer").show();
});








});