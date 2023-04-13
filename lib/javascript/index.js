document.addEventListener("DOMContentLoaded", function(){
    
    const elem = document.querySelectorAll('section')[2]; //섹션 노드리스트
    const rect = elem.getBoundingClientRect();
    const elemY = rect.top + window.pageYOffset;

    /*window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 10 && scrollY < elemY) {
            window.scrollTo({
            top: elemY,
            });
        }
        window.removeEventListener('scroll');
    });*/
});