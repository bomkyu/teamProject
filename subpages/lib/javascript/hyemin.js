let i = 0;
let txt = 'Ask Your Developers'; 
let speed = 100;

function typing() {
  if (i < txt.length) {
    document.querySelector('.typing').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typing, speed);
  }
}
typing();