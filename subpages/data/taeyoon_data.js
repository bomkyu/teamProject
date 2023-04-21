fetch('./data/review.json')
    .then(response => response.json())
    .then(review => {
        const reviewWrap = document.querySelector('.review_wrap');
        review.data.forEach(review => { // "data" 배열에 접근
            const { profile, nickname, coment, date } = review;
            const newDiv = document.createElement('div');
            newDiv.classList.add('review', 'review_sel');
            newDiv.innerHTML = `
                <div class="review_content">
                    <div class="profile" style="background-image: url('./data/${profile}')"></div>
                    <div class="reviwe_box">
                        <div class="nickname">${nickname}</div>
                        <div class="coment">${coment}</div>
                        <div class="date">${date}</div>
                    </div>
                </div>
            `;
            reviewWrap.append(newDiv);
        });
    })
    .catch(error => console.error(error));