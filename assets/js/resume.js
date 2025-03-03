document.getElementById('cv').addEventListener('click', function () {
    document.getElementById('cvOverlay').classList.remove('overlayClose');
    document.getElementById('cvContent').classList.add('overlayContentAnimation');
    document.getElementById('cvContent').classList.remove('overlayContentClose');
    document.getElementById('cvOverlay').classList.add('overlayOpen');

    document.getElementById('cvOverlay').style.display = 'block';
});

document.getElementById('closeCV').addEventListener('click', function () {
    document.getElementById('cvContent').classList.remove('overlayContentAnimation');
    document.getElementById('cvOverlay').classList.remove('overlayOpen');

    document.getElementById('cvOverlay').classList.add('overlayClose');
    document.getElementById('cvContent').classList.add('overlayContentClose');
    setTimeout(function () {
        document.getElementById('cvOverlay').style.display = 'none';
    }, 900);

});