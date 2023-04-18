//타이핑 효과//
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

//답변 펼치기//
const faqBar = document.querySelectorAll('.faq_bar_wrap > li');
console.log(faqBar);
const faqAnswer = document.querySelectorAll('.faq_answer_wrap > li');
console.log(faqAnswer);


faqBar.forEach(function(item,index){
  item.addEventListener('click',function(){
    if(faqAnswer[index].classList.contains('open')){
      faqAnswer[index].classList.remove('open');
    }else{
      faqAnswer.forEach(function(answer){
        answer.classList.remove('open');
      })
      faqAnswer[index].classList.add('open');
    }
  })
})

