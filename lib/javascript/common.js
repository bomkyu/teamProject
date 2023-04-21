//로컬스트리지에 저장.
if(window.localStorage.getItem('person') === null){
    const obj = {
        bomkyu : {
            id : '0',
            name : 'SEO BEOM KYU',
            keyword : '소통',
            introduce : '개인이 갖고 있는 능력도 중요하지만<br> 다른 사람과 상호작용하면서 자신의 한계를 파악하고 성장할 수 있는 발판이 되기 때문입니다. 그렇기에 저는 먼저 다가가는 걸 두려워하지 않으며, 질문하는 것을 망설이지 않습니다.',
            status : 'false'
        },
        hyemin : {
            id : '1',
            name : 'CHO HAE MIN',
            keyword : '소통',
            introduce : '개인이 갖고 있는 능력도 중요하지만<br> 다른 사람과 상호작용하면서 자신의 한계를 파악하고 성장할 수 있는 발판이 되기 때문입니다. 그렇기에 저는 먼저 다가가는 걸 두려워하지 않으며, 질문하는 것을 망설이지 않습니다.',
            status : 'false'
        },
        taeyoon : {
            id : '2',
            name : 'LEE TAE YOON',
            keyword : '소통',
            introduce : '개인이 갖고 있는 능력도 중요하지만<br> 다른 사람과 상호작용하면서 자신의 한계를 파악하고 성장할 수 있는 발판이 되기 때문입니다. 그렇기에 저는 먼저 다가가는 걸 두려워하지 않으며, 질문하는 것을 망설이지 않습니다.',
            status : 'false'
        } 
    };
    const objString = JSON.stringify(obj);
    window.localStorage.setItem('person', objString);
    //console.log(objString);
    
}else{
    const personString = window.localStorage.getItem('person');
    //console.log(personString);
}

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