/* developer_taeyoon page start! */

AOS.init();

const allPage = document.querySelectorAll('.all_page > li > a');
allPage.forEach((page, index)=>{
    page.addEventListener('click', (aTag)=>{
            aTag.preventDefault();
            document.querySelector(`#s${index + 1}`).scrollIntoView({ behavior: 'smooth', block: 'center'});
    });
});

/* developer_taeyoon page end! */




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




/* review start! */
const review = document.querySelector('.review_space');
const jsonSel = document.querySelector('.json_sel');
const reviewAdd = document.querySelector('.review_add');
const reviewName = document.querySelector('.review_name');
const reviewText = document.querySelector('.review_text');


if(review){
    review.addEventListener('click', ()=>{
        review.classList.toggle('active');
    });
}


if(reviewName){
    reviewName.addEventListener('input', function() {
        if (/[^0-9a-zA-Z_]/g.test(this.value)) { // test()는 정규표현식을 검사하는 메소드이다, 정규 표현식 : /[^0-9a-zA-Z_]/
            alert('닉네임은 영문, 숫자, 언더바 이외의 문자는 입력할 수 없습니다.');
            this.value = this.value.replace(/[^0-9a-zA-Z_]/g, ''); // 영문, 숫자, 언더바 이외의 문자열 제거
        };
    });
}


if(reviewText){
    reviewText.addEventListener('input', ()=>{
        reviewText.style.height = 'auto';
        reviewText.style.height = `${reviewText.scrollHeight}px`;
    });
}


function createReview(){
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <div class="review review_sel">
            <div class="review_content">
                <div class="profile" style="background-image: url('./data/')"></div>
                <div class="reviwe_box">
                    <div class="nickname">${reviewName.value}</div>
                    <div class="coment">${reviewText.value}</div>
                    <div class="date">${new Date().toLocaleDateString()}</div>
                </div>
            </div>
        </div>
    `;

    jsonSel.prepend(newDiv);
};


if(reviewAdd){
    reviewAdd.addEventListener('click', createReview);
}


/*
    등록버튼, 닉네임텍스트, 리뷰텍스트 선택하기 로컬스토리지에 저장할 빈 배열생성 -> 로컬스토리지에 저장할 save 함수 생성 -> 
    버튼을 눌렀을 때 실행될 함수 생성 -> 지역변수로 text 불러올 변수 생성 (text:textarea.value) 텍스트 입력 필드값을 텍스트로 사용 ->
    빈 배열에 textarea의 text 푸쉬하기 -> save함수로 저장하기 -> 텍스트 필드가 비어있으면 포커스 유지해주기 -> 아이템 생성해주기 -> 생성되면 텍스트 필드 필드 초기화 및 포커스 설정
    -> 아이템 생성해주는 함수 필드 생성(생성된 곳으로 스크롤도 가능하게 하기) -> 로컬 스토리지에 할일 목록이 있으면, 각 할일을 UI에 추가하고 products 배열에 할일 추가
*/




/* review end! */