function changebg(color)
{//   document.body.background="none";
    document.body.style.backgroundColor=color;
    var txt=document.getElementsByClassName('TXT')[0]
   //  console.log(txt);
   
   //  console.log(txt);
    if(color == 'rgb(32, 26, 26)')
    {  document.getElementsByClassName("flex")[0].style.backgroundColor='rgb(59, 52, 52)';
       // BACK.style.backgroundColor='#A9A9A9'
      txt.style.backgroundColor='rgb(28, 34, 34)';
       //  for(let elm of txt)
        txt.style.color ='white';
    }
    else{
       document.getElementsByClassName("flex")[0].style.backgroundColor='grey';
       txt.style.backgroundColor='white';
       //  for(let elm of txt)
        txt.style.color="black";
    }

}
function RUN(){
   // alert('hello');
   document.querySelector(".OUTPUT").innerHTML=document.querySelector(".TXT").value;
   // alert(a);
   // var b=document.querySelector(".TXT").value;
}