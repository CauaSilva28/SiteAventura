const toggleTheme = document.querySelector('#toggletheme');
const rootHtml = document.documentElement;

const btnpassar1 = document.getElementById('botaopassar1');
const btnpassar2 = document.getElementById('botaopassar2');
const btnpassar3 = document.getElementById('botaopassar3');

const capa = document.getElementById('imagemcapa');
var num = 1;

destacarbtn();

capa.style.backgroundImage = "url(img/capaaventura" + num + ".jpg)";

function mudar1(){
    num=1;
    capa.style.backgroundImage = "url(img/capaaventura" + num + ".jpg)";
    destacarbtn();
}
function mudar2(){
    num=2;
    capa.style.backgroundImage = "url(img/capaaventura" + num + ".jpg)";
    destacarbtn();
}
function mudar3(){
    num=3;
    capa.style.backgroundImage = "url(img/capaaventura" + num + ".jpg)";
    destacarbtn();
}

setInterval(function(){
    num++;
    if(num > 3){
        num = 1;
    }

    destacarbtn();
    
    capa.style.backgroundImage = "url(img/capaaventura" + num + ".jpg)";
},5000);

function destacarbtn(){
    if(num == 1){
        btnpassar1.style.background = '#c7d9ff';
        btnpassar1.style.scale = '130%';
        btnpassar2.style.background = '#3258a8';
        btnpassar2.style.scale = '100%';
        btnpassar3.style.background = '#3258a8';
        btnpassar3.style.scale = '100%';
    }
    else if(num == 2){
        btnpassar2.style.background = '#c7d9ff';
        btnpassar2.style.scale = '130%';
        btnpassar1.style.background = '#3258a8';
        btnpassar1.style.scale = '100%';
        btnpassar3.style.background = '#3258a8';
        btnpassar3.style.scale = '100%';
    }else{
        btnpassar3.style.background = '#c7d9ff';
        btnpassar3.style.scale = '130%';
        btnpassar2.style.background = '#3258a8';
        btnpassar2.style.scale = '100%';
        btnpassar1.style.background = '#3258a8';
        btnpassar1.style.scale = '100%';
    }
}

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

//Transicao aparecer scroll
const myObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry) {
        if(entry.isIntersecting){
            entry.target.classList.add('transicao');
        }
        else{
            entry.target.classList.remove('transicao');
        }
    });
});

const elements = document.querySelectorAll('.localaparecer');
const elements2 = document.querySelectorAll('.localsurgir');

elements.forEach((element) => myObserver.observe(element));
elements2.forEach((element) => myObserver.observe(element));