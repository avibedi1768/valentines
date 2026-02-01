const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const message = document.getElementById('message');

function randBetween(min, max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

function moveYes() {
  // pick prominent random displacement
  const x = randBetween(-300, 300);
  const y = randBetween(-220, 220);
  const z = randBetween(-120, 120);
  // apply 3D transform
  yesBtn.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
}

// On desktop pointerenter -> move
yesBtn.addEventListener('pointerenter', (e)=>{
  // only react when pointer is hovering (prevents mobile touches triggering pointerenter weirdly)
  if (e.pointerType === 'mouse' || e.pointerType === 'pen') moveYes();
});

// On click/tap (for mobile) -> move
yesBtn.addEventListener('click', ()=>{
  moveYes();
});

// No button: show thanking message
noBtn.addEventListener('click', ()=>{
  message.textContent = 'thank god! i am safe. thanks';
});

// Prevent Yes from being focused via keyboard and moving unexpectedly; allow accessibility focus outline
yesBtn.addEventListener('focus', ()=>{
  // if user navigates to it via keyboard, move as well to be playful
  moveYes();
});

// Ensure transforms reset on resize for predictable behavior
window.addEventListener('resize', ()=>{
  yesBtn.style.transform = '';
});
