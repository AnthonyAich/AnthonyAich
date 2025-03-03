const contactSend = () => {
    const sendText = document.querySelector('#send');
    const sendPlane = document.querySelector('#contactPlane');
    const sendButton = document.querySelector('#sendButtonContact');
    sendButton.style.backgroundColor = "#43ACF2";
    sendText.style.opacity = "0";

    sendPlane.classList.add('svgContactAnimation');
    sendText.classList.add('spanContactAnimation');
    setTimeout(() => {
        sendPlane.classList.remove('svgContactAnimation');
        sendPlane.style.display = 'none';
        sendText.classList.remove('spanContactAnimation');
        sendText.style.opacity = "1";

        (localStorage.getItem('language') == null) ? localStorage.setItem('language', "english") : false;

        lang = localStorage.getItem('language');
        fetch('assets/js/' + lang + '.json')
            .then(response => response.json())
            .then(lang => language = lang);
        sendText.innerHTML = language.sent;

        setTimeout(() => {
            sendPlane.style.display = 'inline-block';
            sendText.innerHTML = language.send;
            sendText.style.opacity = "initial";
            sendButton.style.backgroundColor = "transparent";

        }, 1700);


    }, 1700);



}