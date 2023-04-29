AOS.init();
let get_storage = { //객체로 스토리지 관리.
	'get_parse_data' : function(name) { //받아오는 데이터 로직
		return  JSON.parse(window.localStorage.getItem(name));
	},
	'set_parse_data' : function(name,data) { //추가하는 데이터 로직
		let json_string = JSON.stringify(data);
		window.localStorage.setItem(name, json_string);
	}
}

//로컬스토리지에서 get,set 함수 사용하는 변수들
const dev_arr = Object.values(get_storage.get_parse_data('dev'));

let buy_ul = document.querySelector('.buy_list');
let buy_btn = document.querySelector('.buy_btn');

let selected_dev_arr = new Array();

if(buy_ul){
	//리스트 생성 함수
	let create_list = () => {
		dev_arr.forEach(key => {
			let create_li = document.createElement('li');
			create_li.setAttribute('data-id',`${key.id}`);
			create_li.setAttribute('data-status',`${key.status}`);
			
			create_li.innerHTML = `
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
			buy_ul.appendChild(create_li);
		});

		event_handler();
	}

	create_list();

	// 아이템들의 이벤트 생성 핸들러
	function event_handler(){
		Array.from(buy_ul.children).forEach((el)=>{
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
					selected_dev_arr.push(dev_arr[select_id]); //selected_dev_arr 배열에 값을 집어넣음.
				}else{
					selected_dev_arr = selected_dev_arr.filter(obj => obj.id !== select_id); //id값으로 배열의 요소를 지움.
				}
			});	
		});
	}
	
	//예외처리
	function exception_handler(buy_list) {
		
		const statusLengths = Array.from(buy_list)
				.filter(buy_list => buy_list.dataset.status === 'true')
				.map(buy_list => buy_list.dataset.status.length);

		if(buy_list.length == statusLengths.length){
			alert('모든 개발자가 선택되었습니다.');
			return;
		}

		if(selected_dev_arr.length == 0 ){
			alert('개발자를 선택해 주세요');
			return;
		}
	}

	buy_btn.addEventListener('click', ()=> {
		const buy_list = buy_ul.querySelectorAll('li');

		exception_handler(buy_list); //예외처리

		//data-value인 data-status를 true로 바꿔줌(element)
		selected_dev_arr.forEach(element => {
			element.status = 'true';
			const idx = dev_arr.findIndex(obj => obj.id === element.id);
			dev_arr[idx].status = 'true';
			buy_list[idx].setAttribute('data-status', 'true');
		});

		//로컬스토리지 dev_selected에 값 넣는 부분
		if(get_storage.get_parse_data('dev_selected') == null){
			get_storage.set_parse_data('dev_selected',selected_dev_arr);

		}else{
			const new_selected_dev_arr = Object.values(get_storage.get_parse_data('dev_selected'));
			new_selected_dev_arr.push(...selected_dev_arr)
			get_storage.set_parse_data('dev_selected',new_selected_dev_arr);
		}
		get_storage.set_parse_data('dev',dev_arr);
		
		modal();
	});

	function modal(){		
		let modalNumber = Math.floor(Math.random()*89999999) + 10000000; //8자리 랜덤숫자
		let modalId = selected_dev_arr.map(el => el.id);
		let modalName = selected_dev_arr.map(el => el.name);
		let modalImg = selected_dev_arr.map(el=> el.image_url);
		let modalKeyword = selected_dev_arr.map(el=> el.keyword);
		
		let today = new Date();
		let year = today.getFullYear();
		let month = today.getMonth()+1;
		let date = today.getDate();
		let hours = today.getHours();
		let minutes = today.getMinutes();
		let seconds = today.getSeconds();

		document.getElementById('ordernumber').innerText = `${modalNumber}`;
		document.getElementById('date').innerText = `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`;
		document.getElementById('name').innerText = `${modalName}`;
		document.getElementById('keyword').innerText = `${modalKeyword}`;
		
		selected_dev_arr = []; //배열 초기화
		//주문번호, 거래일시 초기화 필요
		
			
		//이미지 li 생성하는 함수
		function createModalImg(){
			const modalImgWrap = document.querySelector('.modal_img_wrap'); //li가 들어갈 ul
			
			let create_li_img = document.createElement('li');
			create_li_img.setAttribute('id',modalId); //생성한 li의 아이디값을 modalId 와 동일하게 넣어줌
			const newImg = create_li_img.querySelector('img'); //생성한 li의 img 가져옴

			create_li_img.innerHTML = `
										<div>
											<img src="./lib/images/${modalImg}" alt="${modalName}" class="hm">
										</div>
									`
			modalImgWrap.appendChild(create_li_img); //생성한 li를 ul에 넣어줌

			//newImg.setAttribute('src','./lib/images/hm_profile.jpg'); //img의 src재설정
			//newImg.classList.add('hm');

		}
		createModalImg();
	/*	if(modalImgLi.id == modalId) {
			createModalImg();
			
		} else {
			
		} */

	}
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