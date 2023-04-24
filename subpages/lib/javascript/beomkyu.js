AOS.init();
	let buy_el = document.querySelector('.buy_list');
	let buy_btn = document.querySelector('.buy_btn');

	if(buy_el){
		let person_string = window.localStorage.getItem('person');
		let select_person_string = window.localStorage.getItem('select_person');
		let person_parse = JSON.parse(person_string);
		let select_person = JSON.parse(select_person_string);

		const person_arr = Object.values(person_parse);
		let select_person_arr;
		person_arr.forEach(key => {
			let buy_el_li = document.createElement('li');
			buy_el_li.setAttribute('data-id',`${key.id}`);
			buy_el_li.setAttribute('data-status',`${key.status}`);
			
			buy_el_li.innerHTML = `
									<div class="buy_inner">
										<div class="face_wrap">
											<div class="face_thumb">

											</div>
										</div>
										<h2 class="name txt_c">${key.name}</h2>
										<p class="keyword txt_c">‘${key.keyword}’</p>
										<p class="introduce txt_l">
											${key.introduce}
										</p>
										<div class="cover">
											<span></span>
										</div>
									</div>
								  `
			buy_el.appendChild(buy_el_li);
		});

		let buy_el_child = Array.from(buy_el.children);
		let buy_select = new Array();
		buy_el_child.forEach((el, index)=>{
			if(el.dataset.status === 'true'){
				el.classList.add('active');
			}
			el.addEventListener('click', (event) => {
				let select_id = el.getAttribute('data-id');
				if(el.dataset.status === 'true'){
					event.stopPropagation(); // 이벤트 버블링 중지
					return
				}

				el.classList.toggle('active');

				if(el.classList.contains('active')){
					buy_select.push(person_arr[select_id]);
				}else{
					buy_select = buy_select.filter(obj => obj.id !== select_id);
				}
			});	
		});
		
		buy_btn.addEventListener('click', ()=> {
			const buy_list = buy_el.querySelectorAll('li');
			const statusLengths = Array.from(buy_list).map(buy_list => buy_list.dataset.status.length);

			if(buy_list.length == statusLengths.length){
				alert('모든 개발자가 선택되었습니다.');
				return;
			}

			if(buy_select.length == 0 ){
				alert('개발자를 선택해 주세요');
			}
			
			buy_select.forEach(element => {
				element.status = 'true';
				const idx = person_arr.findIndex(obj => obj.id === element.id);
				person_arr[idx].status = 'true';
			});
			const objString = JSON.stringify(buy_select);
			
			if(select_person == null){
				window.localStorage.setItem('select_person', objString);
				
			}else{
				select_person_arr = Object.values(select_person)

				console.log(select_person_arr);
				select_person_arr.push(...buy_select);
				
				const new_select_person = JSON.stringify(select_person_arr);
				window.localStorage.setItem('select_person', new_select_person);
				buy_select.length = 0;
			}
			window.localStorage.setItem('person', JSON.stringify(person_arr));
			
		});
	}

    const targets = document.querySelectorAll('section');
	const progress = document.querySelector(".sec_2");
	const options = { root: null, threshold: 0.1, rootMargin: "-0px" };
	const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach((entry) => {
		const container = entry.target;
		if (entry.isIntersecting) {
		container.classList.add("fade-in");

		} else {

		}
	});
	}, options);

	targets.forEach((target) => {
	observer.observe(target);
	});

	function checkVisible( element, check = 'above' ) {
	const viewportHeight = $(window).height(); // Viewport Height
	const scrolltop = $(window).scrollTop(); // Scroll Top
	const y = $(element).offset().top;
	const elementHeight = $(element).height();   
	
		// 반드시 요소가 화면에 보여야 할경우
	if (check == "visible") 
		return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
		
	// 화면에 안보여도 요소가 위에만 있으면 (페이지를 로드할때 스크롤이 밑으로 내려가 요소를 지나쳐 버릴경우)
	if (check == "above") 
		return ((y < (viewportHeight + scrolltop)));
	}
		
	// 리소스가 로드 되면 함수 실행을 멈출지 말지 정하는 변수
	let isVisible = false;
		
	// 이벤트에 등록할 함수
	const func = function () {
		if ( !isVisible && checkVisible('.sec_2') ) {
			
			chard_start();
			isVisible = true;
		}
		
		// 만일 리소스가 로드가 되면 더이상 이벤트 스크립트가 있을 필요가 없으니 삭제
		//isVisible && window.removeEventListener('scroll', func);
	}
		
	// 스크롤 이벤트 등록
	window.addEventListener('scroll', func);



	//차트가 시작하는 지점.
	function chard_start(){
		var numItems = $('.circle_pg').length //그래프 Element 개수를 구함.
		let object = {  persent0: '80',
						persent1: '80',
						persent2: '60',
						persent3: '40' ,
						persent4: '32' ,
						persent5: '40'}; 
		

	
		for(let i = 0; i < numItems; i++){
			
			const donut = document.getElementsByClassName("circle_pg")[i]
			const show_persent = document.getElementsByClassName("persent_area")[i]
			
			let total = object['persent'+i];

			//console.log(total);
			
			let t4 = 0; //시작지점

			const donutAnimation = setInterval(() => {
				
				donut.dataset.percent = t4
				
				show_persent.dataset.percent = t4
				donut.style.background = `conic-gradient(#FFF 0 ${t4}%, #000 ${t4}% 100% )`
				t4++ >= total && clearInterval(donutAnimation) //0이였던 t4가 증가하는데 total과 값이	같아지면 종료.
				//console.log("T4값 : "+t4+", "+"total값 "+total);
			}, 30)

		}
	}