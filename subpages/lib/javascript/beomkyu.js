AOS.init();

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