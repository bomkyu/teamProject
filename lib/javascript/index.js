document.addEventListener("DOMContentLoaded", function(){
    const elem = document.querySelectorAll('section')[2];
    const rect = elem.getBoundingClientRect().top;
    let flag = false;
  
    window.addEventListener('wheel',scroll_ev);
  
    function scroll_ev(event) {
      if (window.scrollY == 0) {
        flag = true;
      }
      if (flag && event.deltaY > 0) {
        scrollToSmoothly(elem, rect, 5000);
        flag = false;
      }
      if (event.deltaY < 0) {
        flag = false;
      }
    }
  
    function scrollToSmoothly(element, to, duration) {
      var start = element.scrollTop,
          change = to - start,
          currentTime = 0,
          increment = 20;
      
      function animateScroll() {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        console.log(val);
        window.scrollTo(0, val);
        if (currentTime < duration && change !== 0) {
          requestAnimationFrame(animateScroll);
        }
      }
      animateScroll();
    }
    
    // 이동 속도 계산을 위한 이징 함수를 정의합니다.
    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    };
  });