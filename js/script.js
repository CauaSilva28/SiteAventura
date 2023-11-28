const capa = document.getElementById('imagemcapa');
var num = 1;

capa.style.backgroundImage = "url(../img/capaaventura" + num + ".jpg)";

function mudar1(){
    num=1;
    capa.style.backgroundImage = "url(../img/capaaventura" + num + ".jpg)";
}
function mudar2(){
    num=2;
    capa.style.backgroundImage = "url(../img/capaaventura" + num + ".jpg)";
}
function mudar3(){
    num=3;
    capa.style.backgroundImage = "url(../img/capaaventura" + num + ".jpg)";
}

setInterval(function(){
    num++;
    if(num > 3){
        num = 1;
    }
    capa.style.backgroundImage = "url(../img/capaaventura" + num + ".jpg)";
},5000);
