$(document).ready(function () {
    $('#green').css({"background-color": "green", "color": "white"});
    $('#red').css({"background-color": "red", "color": "white"});
    $('#blue').css({"background-color": "blue", "color": "white"});
    
    $('#green').click(function () {
        $('#text').css("color", "green"); 
    });
    $('#red').click(function () {
        $('#text').css("color", "red"); 
    });
    $('#blue').click(function () {
        $('#text').css("color", "blue"); 
    });
});