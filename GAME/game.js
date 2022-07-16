var SCORE=0;
var time=2000;
f=0
var SET
var r=document.getElementsByClassName("smile");
var pop=document.getElementById("popup");
function go(){
    pop.style.display="none";
    SCORE=0;
    document.getElementById("END").style.marginRight="-80px";
    document.getElementById('inc').innerHTML=SCORE;
    document.getElementsByClassName("overlay")[0].style.zIndex="0";
}

function start(){
    
    document.getElementsByClassName("header")[0].style.visibility="hidden"; 
    for(var i=0;i<r.length;i++)
    {
        r[i].style.opacity="1";
        
    }
    var rh=Math.floor(Math.random() * (document.documentElement.clientHeight-120));
    var rw=Math.floor(Math.random() * (document.documentElement.clientWidth-120));
    r[0].style.left=(rw+"px") ;
    r[0].style.top=(rh+"px");
    var rh=Math.floor(Math.random() * (document.documentElement.clientHeight-120));
    var rw=Math.floor(Math.random() * (document.documentElement.clientWidth-120));
    r[1].style.left=(rw+"px") ;
    r[1].style.top=(rh+"px");
    var rh=Math.floor(Math.random() * (document.documentElement.clientHeight-120));
    var rw=Math.floor(Math.random() * (document.documentElement.clientWidth-120));
    r[2].style.left=(rw+"px") ;
    r[2].style.top=(rh+"px");
    var rh=Math.floor(Math.random() * (document.documentElement.clientHeight-120));
    var rw=Math.floor(Math.random() * (document.documentElement.clientWidth-120));
    r[3].style.left=(rw+"px") ;
    r[3].style.top=(rh+"px");
    var rh=Math.floor(Math.random() * (document.documentElement.clientHeight-120));
    var rw=Math.floor(Math.random() * (document.documentElement.clientWidth-120));
    r[4].style.left=(rw+"px") ;
    r[4].style.top=(rh+"px");
    var rh=Math.floor(Math.random() * (document.documentElement.clientHeight-120));
    var rw=Math.floor(Math.random() * (document.documentElement.clientWidth-120));
    r[5].style.left=(rw+"px") ;
    r[5].style.top=(rh+"px");
    SET=setTimeout(start,2000);
    
}
function end(){
   document.getElementById("END").style.marginRight="0";
   document.getElementsByClassName("overlay")[0].style.zIndex="-1";
}
function CLOSE(){
    document.getElementsByClassName("header")[0].style.visibility="visible";  
    clearTimeout(SET);
    for(var i=0;i<r.length;i++)
    {
    r[i].style.left="-100px";
    r[i].style.top="-100px";
    }
}
function sMILE(sc){

    SCORE+=10;
    document.getElementById('inc').innerHTML=SCORE;
    if(SCORE>=1000)
    {
        CLOSE();
    }
} 

function disappear(index){
  var audio=new Audio("zapsplat_cartoon_duck_quack_006_78898.mp3");
  audio.play();
  r[index].style.opacity="0";
}
 function tostop()
{
   document.getElementsByClassName("overlay")[0];
  
   pop.style.transition="all 2s";
   ++f;
  if(f>=3)
  { 
    pop.style.display="block";
    CLOSE();
    f=0;
    return;
    // break();
  }

}