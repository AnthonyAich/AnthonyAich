window.onscroll = function () {
    let imagesToFade = document.getElementsByClassName('fadeFromLeft');
    for (let i = 0; i < imagesToFade.length; i++) {
        let imagePos = imagesToFade[i].offsetTop;
        let topOfWindow = window.scrollY;
        if (imagePos < topOfWindow + 650) {
            imagesToFade[i].classList.add('fadeIn');
            imagesToFade[i].classList.remove('fadeFromLeft');
        }
    };


    let imagesToFadeRight = document.getElementsByClassName('fadeFromRight');
    for (let i = 0; i < imagesToFadeRight.length; i++) {
        let topOfWindow = window.scrollY;
        let imagePosR = imagesToFadeRight[i].offsetTop;
        if (imagePosR < topOfWindow + 650) {
            console.log("right");
            imagesToFadeRight[i].classList.add('fadeInRight');
            imagesToFadeRight[i].classList.remove('fadeFromRight');
        }
    }

    let imagesToFadeBottom = document.getElementsByClassName('fadeFromBottom');
    for (let i = 0; i < imagesToFadeBottom.length; i++) {
        let topOfWindow = window.scrollY;
        let imagePosB = imagesToFadeBottom[i].offsetTop;
        if (imagePosB < topOfWindow + 650) {
            console.log("bottom");
            imagesToFadeBottom[i].classList.add('fadeInBottom');
            imagesToFadeBottom[i].classList.remove('fadeFromBottom');
        }
    }
}

