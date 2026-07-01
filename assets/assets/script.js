
function showFeedback(id){
  document.querySelectorAll('.feedback').forEach(x=>x.style.display='none');
  const el=document.getElementById(id); if(el) el.style.display='block';
}
let currentScreen=0;
function moveScreen(delta){
  const screens=[...document.querySelectorAll('.screen')];
  if(!screens.length) return;
  screens[currentScreen].classList.remove('active');
  currentScreen=Math.max(0,Math.min(screens.length-1,currentScreen+delta));
  screens[currentScreen].classList.add('active');
  const bar=document.querySelector('.progress span');
  if(bar) bar.style.width=((currentScreen+1)/screens.length*100)+'%';
}
function markStep(id){
  const el=document.getElementById(id); if(el) el.style.display='block';
}
