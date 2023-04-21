/* developers_taeyoon page start! */

AOS.init();

const allPage = document.querySelectorAll('.all_page > li > a');
allPage.forEach((page, index)=>{
    page.addEventListener('click', (aTag)=>{
            aTag.preventDefault();
            document.querySelector(`#s${index + 1}`).scrollIntoView({ behavior: 'smooth', block: 'center'});
    });
});

/* developers_taeyoon page end! */




/* review start! */
const review = document.querySelector('.review_space');

if(review){
    review.addEventListener('click', ()=>{
        review.classList.toggle('active');
    });
}


const nameInput = document.querySelector('.review_name');

if(nameInput){
    nameInput.addEventListener('input', function() {
        if (/[^0-9a-zA-Z_]/g.test(this.value)) { // test()는 정규표현식을 검사하는 메소드이다, 정규 표현식 : /[^0-9a-zA-Z_]/
            alert('닉네임은 영문, 숫자, 언더바 이외의 문자는 입력할 수 없습니다.');
            this.value = this.value.replace(/[^0-9a-zA-Z_]/g, ''); // 영문, 숫자, 언더바 이외의 문자열 제거
        };
    });
}


const textareaAll = document.querySelector('.review_text');

if(textareaAll){
    textareaAll.addEventListener('input', ()=>{
        textareaAll.style.height = 'auto';
        textareaAll.style.height = `${textareaAll.scrollHeight}px`;
    });
}
/* review end! */




/* contact page start! */
const tabs = document.querySelectorAll('.tab > li');
const cardFronts = document.querySelectorAll('.card_front');
const cardBacks = document.querySelectorAll('.card_back');
const cardWraps = document.querySelectorAll('.card_wrap');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });
        cardFronts.forEach((cardFront) => {
            cardFront.classList.remove('active');
        });
        cardBacks.forEach((cardBack) => {
            cardBack.classList.remove('active');
        });
        cardWraps.forEach((cardWrap) => {
            cardWrap.classList.remove('active');
        });

        tab.classList.add('active');
        cardFronts[index].classList.add('active');
        cardBacks[index].classList.add('active');
        cardWraps[index].classList.add('active');
    });
});
/* contact page end! */