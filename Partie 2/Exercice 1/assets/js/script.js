$("#exercice1").mouseover(zoom);
$("#exercice1").mouseout(originScale);
    
function zoom() {
    $(this).css("width", "300px");
}

function originScale() {
    $(this).css("width", "200px");
}