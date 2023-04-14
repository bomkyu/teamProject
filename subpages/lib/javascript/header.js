const Elheader = document.querySelector('header');

window.addEventListener('scroll',function(){
    if(this.window.scrollY > 0){
        Elheader.classList.add('scroll')
    }else{
        Elheader.classList.remove('scroll')
    }
})