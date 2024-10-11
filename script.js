const text="Thanks for stopping by, I hope to see you again soon!";
const neontext=document.getElementById("neon-text");
let index=0;
function type(){
  if(index<text.length){
    neontext.textContent+=text.charAt(index);
    index++;
    setTimeout(type,200);
  }
  else{
    neontext.style.opacity=1;
  }
  }
window.onload=function(){
  type();
}