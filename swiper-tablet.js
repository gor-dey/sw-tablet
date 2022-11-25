let readMore = document.querySelector('.swiper--readmore');
// let textMore = document.querySelector('.repair-of-brands');
let readMoreImg = readMore.querySelector('.img__read-more');
let readMoreText = readMore.querySelector('.read-more--text');
let readMoreTextNo = readMore.querySelector('.read-more--text--no');
let maxHeightOfFlex = document.querySelector('.image-slider__wrapper');

readMore.onclick = function() {
    // textMore.classList.toggle('js-text-more');
    // readMore.classList.toggle('js-button-more');
    
    readMoreImg.classList.toggle('js-img__read-more');

    readMoreText.classList.toggle('js-read-more--text');
    readMoreTextNo.classList.toggle('js-read-more--text--no');

    maxHeightOfFlex.classList.toggle('js-image-slider__wrapper');
}

console.log(maxHeightOfFlex)