document.addEventListener("DOMContentLoaded", function(){
    // 스크립트 취합 혜민님 작업
    const Elheader = document.querySelector('header');
    window.addEventListener('scroll',function(){
        if(window.scrollY > 0){
            Elheader.classList.add('scroll')
        }else{
            Elheader.classList.remove('scroll')
        }
    })
});