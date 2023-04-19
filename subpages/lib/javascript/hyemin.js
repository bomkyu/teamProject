//타이핑 효과//
let i = 0;
let txt = 'Ask Your Developers'; 
let speed = 100;
let type = document.querySelector('.typing');
if(type){
  function typing() {
    if (i < txt.length) {
      type.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}


//답변 펼치기//
const faqBar = document.querySelectorAll('.faq_bar_wrap > li');
const faqAnswer = document.querySelectorAll('.faq_answer_wrap > li');


faqBar.forEach(function(item,index){
  item.addEventListener('click',function(){
    if(faqAnswer[index].classList.contains('active')){
      faqAnswer[index].classList.remove('active');
    }else{
      faqAnswer.forEach(function(answer){
        answer.classList.remove('active');
      })
      faqAnswer[index].classList.add('active');
    }
  })
})

faqAnswer.forEach(function(item,index){
  item.addEventListener('click', function(){
    item.classList.remove('active');
  })
})

//풀페이지 스크롤//
/* window.addEventListener('wheel',function(e){
  e.preventDefault();
},{passive : false});

let $html = $('html');
let page = 1;
let lastPage = $('section').length;
console.log('dddd',lastPage);

$html.animate({scrollTop:0},10);
$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
 
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
 
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
 
		page--;
	}
	let posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop});
 
}); */


