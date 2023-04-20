let sections = document.querySelectorAll('section');
const create_el = () =>{
    const children_ul = document.createElement('ul');
    children_ul.className = 'hori max_750 m_center mt100 row4 gap20 space_around';
    sections[4].appendChild(children_ul);

    for(let i = 0; i < 4; i++){
        const li = document.createElement('li');
        li.setAttribute('data-aos', 'zoom-in-down');
        li.setAttribute('data-aos-easing', 'ease-out-cubic');
        li.setAttribute('data-aos-duration', `500`);
        li.setAttribute('data-aos-delay', `${500 + i * 100}`);

        const img = document.createElement('img');
        img.style.transform = 'scale(1)';
        img.setAttribute('src', `./lib/images/img_skill${i+1}.svg`);
        img.setAttribute('alt', `skill 이미지 ${i+1}번`);

        li.appendChild(img);
        children_ul.appendChild(li);
    }
}

create_el();