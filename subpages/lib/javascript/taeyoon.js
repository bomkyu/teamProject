/* developers_taeyoon page start! */

AOS.init();

const allPage = document.querySelectorAll('.all_page > li > a');
allPage.forEach((page, index)=>{
    page.addEventListener('click', (aTag)=>{
        
        if(allPage.length > 0){
            aTag.preventDefault();
            document.querySelector(`#s${index + 1}`).scrollIntoView({ behavior: 'smooth'});
        }

    });
});

console.log('클릭클릭', allPage.length);

/* developers_taeyoon page end! */



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