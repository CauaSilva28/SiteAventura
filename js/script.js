const toggleTheme = document.querySelector('#toggletheme');
const rootHtml = document.documentElement;

const capa = document.getElementById('imagemcapa');
var num = 1;

capa.style.backgroundImage = "url(img/capaaventura" + num + ".jpg)";

function mudar1(){
    num=1;
    capa.style.backgroundImage = "url(img/capaaventura" + num + ".jpg)";
}
function mudar2(){
    num=2;
    capa.style.backgroundImage = "url(img/capaaventura" + num + ".jpg)";
}
function mudar3(){
    num=3;
    capa.style.backgroundImage = "url(img/capaaventura" + num + ".jpg)";
}

setInterval(function(){
    num++;
    if(num > 3){
        num = 1;
    }
    capa.style.backgroundImage = "url(img/capaaventura" + num + ".jpg)";
},5000);

//Alternar modo light e dark
function changeTheme(){
    const currentTheme = rootHtml.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        rootHtml.setAttribute('data-theme', 'light');
    } 
    else {
        rootHtml.setAttribute('data-theme', 'dark');
    }

    toggleTheme.classList.toggle('bi-moon-fill');
    toggleTheme.classList.toggle('bi-sun');
}

toggleTheme.addEventListener('click', changeTheme);