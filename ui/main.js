console.log('Loaded!');
var img=document.getElementById("madi");
var leftMargin = 0;
function ch(){
    leftMargin += 1;
    img.style.leftMargin = leftMargin + "px";
}
img.onClick=function(){
    var interval = setInterval(ch,50);
}