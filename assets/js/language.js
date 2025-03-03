const init = () => {
    //scroll to top
    window.scrollTo(0, 0);
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.display = 'none';
    }, 3000);
    getLanguage();
    document.getElementById("en").addEventListener("click", function () { setLanguage('english') });
    document.getElementById("nl").addEventListener("click", function () { setLanguage('dutch') });
    document.getElementById("fr").addEventListener("click", function () { setLanguage('french') });
}
let language;
function getLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('english') : false;
    fetch('assets/js/' + localStorage.getItem('language') + '.json')
        .then(response => response.json())
        .then(lang => language = lang);

}
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    fetch('assets/js/' + lang + '.json')
        .then(response => response.json())
        .then(lang => language = lang);
    setTimeout(() => {
        document.getElementById("whoText").innerHTML = language.whoText;
        document.getElementById("title").innerHTML = language.title;
        document.getElementById("contactMe").innerHTML = language.contactMe;
        document.getElementById("who").innerHTML = language.who;
        document.getElementById("aboutItem").innerHTML = language.about;
        document.getElementById("homeItem").innerHTML = language.home;
        document.getElementById("projectsItem").innerHTML = language.projects;
        document.getElementById("contactItem").innerHTML = language.contact;
        document.getElementById("cv").innerHTML = language.resume;
        document.getElementById("myResume").innerHTML = language.myResume;
        document.getElementById("myProjects").innerHTML = language.myProjects;
        document.getElementById("myProgrammingSkills").innerHTML = language.myProgrammingSkills;
        // contact me text
        document.getElementById("contactText").innerHTML = language.contactText;
    }, 100)
}
window.onload = init;
