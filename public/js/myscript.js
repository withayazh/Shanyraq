

var mySong1 = document.getElementById("mySong_khalib");
var icon1 = document.getElementById("icon_khalib");

icon1.onclick = function(){
  if(mySong1.paused){
    mySong1.play();
    icon1.src = "img/main_p2.png"
  }else{
    mySong1.pause();
    icon1.src = "img/main_pl.png"
  }
}


var mySong2 = document.getElementById("mySong_ik");
var icon2 = document.getElementById("icon_ik");

icon2.onclick = function(){
  if(mySong2.paused){
    mySong2.play();
    icon2.src = "img/main_p2.png"
  }else{
    mySong2.pause();
    icon2.src = "img/main_pl.png"
  }
}
var mySong3 = document.getElementById("mySong_91");
var icon3 = document.getElementById("icon_91");

icon3.onclick = function(){
  if(mySong3.paused){
    mySong3.play();
    icon3.src = "img/main_p2.png"
  }else{
    mySong3.pause();
    icon3.src = "img/main_pl.png"
  }
}

var mySong4 = document.getElementById("mySong_akha");
var icon4 = document.getElementById("icon_akha");

icon4.onclick = function(){
  if(mySong4.paused){
    mySong4.play();
    icon4.src = "img/main_p2.png"
  }else{
    mySong4.pause();
    icon4.src = "img/main_pl.png"
  }
}

function play0(){ var audio = document.getElementById("audio0"); if(audio.paused){
   audio.play();}else{  audio.pause();}}
function play1(){
  var audio1 = document.getElementById("audio1");
  if(audio1.paused){
    audio1.play();
  }else{
    audio1.pause();
  }
  
}
function play2(){
  var audio2 = document.getElementById("audio2");
  if(audio2.paused){
    audio2.play();
  }else{
    audio2.pause();
  }
  
}
function play3(){
  var audio3 = document.getElementById("audio3");
  if(audio3.paused){
    audio3.play();
  }else{
    audio3.pause();
  }
  
}
function play4(){
  var audio4 = document.getElementById("audio4");
  if(audio4.paused){
    audio4.play();
  }else{
    audio4.pause();
  }
  
}
function play5(){
  var audio5 = document.getElementById("audio5");
  if(audio5.paused){
    audio5.play();
  }else{
    audio5.pause();
  }
  
}
function play6(){
  var audio6 = document.getElementById("audio6");
  if(audio6.paused){
    audio6.play();
  }else{
    audio6.pause();
  }
  
}
function play7(){
  var audio7 = document.getElementById("audio7");
  if(audio7.paused){
    audio7.play();
  }else{
    audio7.pause();
  }
  
}

function play8(){
  var audio8 = document.getElementById("audio8");
  if(audio8.paused){
    audio8.play();
  }else{
    audio8.pause();
  }
  
}
function play9(){
  var audio9 = document.getElementById("audio9");
  if(audio9.paused){
    audio9.play();
  }else{
    audio9.pause();
  }
  
}
function play10(){
  var audio10 = document.getElementById("audio10");
  if(audio10.paused){
    audio10.play();
  }else{
    audio10.pause();
  }
  
}
function play11(){
  var audio11 = document.getElementById("audio11");
  if(audio11.paused){
    audio11.play();
  }else{
    audio11.pause();
  }
  
}




function myFunction(){
  document.getElementById('dbclick').onclick=function(){
    Swal.fire("Music is saved!"," " ,"success");
  }
}
