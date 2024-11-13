AOS.init();

const telaVenda = document.getElementById('fundoTelaVenda');

function fecharTelaVenda(){
    telaVenda.style.display = 'none';
}

const catalogos = document.querySelectorAll('.catalogos');
const imgTelaVenda = document.getElementById('telaVenda-img');
const telaVendaTitulo = document.getElementById('telaVenda-title');

const fundoCatalogo1 = document.getElementById('fundoCatalogo1');
const tituloCatalogo1 = document.getElementById('tituloCatalogo1');
const descricaoCatalogo1 = document.getElementById('descricaoCatalogo1');

const fundoCatalogo2 = document.getElementById('fundoCatalogo2');
const tituloCatalogo2 = document.getElementById('tituloCatalogo2');
const descricaoCatalogo2 = document.getElementById('descricaoCatalogo2');

const fundoCatalogo3 = document.getElementById('fundoCatalogo3');
const tituloCatalogo3 = document.getElementById('tituloCatalogo3');
const descricaoCatalogo3 = document.getElementById('descricaoCatalogo3');

const fundoCatalogo4 = document.getElementById('fundoCatalogo4');
const tituloCatalogo4 = document.getElementById('tituloCatalogo4');
const descricaoCatalogo4 = document.getElementById('descricaoCatalogo4');


function aventuraMares(){
    let titulosTelaVenda = [
        'Passeio de cruzeiro oceano',
        'Passeio de iate mares',
        'Passeio de escuna mares',
        'Passeio de veleiro rios',
    ];
    
    for (let i = 0; i < catalogos.length; i++) {
        catalogos[i].onclick = function() {
            telaVenda.style.display = 'flex';
            imgTelaVenda.style.backgroundImage = 'url(img/imgpacotes/imgTelaVenda/imgvenda' + i + '.jpg)';
            telaVendaTitulo.textContent = titulosTelaVenda[i];
        };
    }

    let parteInicial = new Catalogos(
        'Mares e Rios', 
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        'url(img/imgpacotes/imgprincipalmares.jpg'
    );

    let parte2 = new Catalogos(
        'Navios e barcos', 
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        'url(img/imgpacotes/imgnavios.png'
    );

    let parte3 = new Catalogos(
        'Caiaques', 
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        'url(img/imgpacotes/imgcaiaque.jpg'
    );

    let parte4 = new Catalogos(
        'Jetski', 
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        'url(img/imgpacotes/imgjetski.jpg'
    );

    parteInicial.mudarTela(tituloCatalogo1, descricaoCatalogo1, fundoCatalogo1);
    parte2.mudarTela(tituloCatalogo2, descricaoCatalogo2, fundoCatalogo2);
    parte3.mudarTela(tituloCatalogo3, descricaoCatalogo3, fundoCatalogo3);
    parte4.mudarTela(tituloCatalogo4, descricaoCatalogo4, fundoCatalogo4);
}

function aventuraMontanhas(){
    let titulosTelaVenda = [
        'Escalada montanhas de gelo',
        'Escalada montanhas grandes',
        'Escalada montanhas pequenas',
        'Escalada com corda',
    ];
    
    for (let i = 0; i < catalogos.length; i++) {
        catalogos[i].onclick = function() {
            telaVenda.style.display = 'flex';
            imgTelaVenda.style.backgroundImage = 'url(img/imgpacotes/imgTelaVenda/imgvenda' + i + '.jpg)';
            telaVendaTitulo.textContent = titulosTelaVenda[i];
        };
    }

    let parteInicial = new Catalogos(
        'Montanhas', 
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        'url(img/imgpacotes/imgprincipalmontanhas.jpg'
    );

    let parte2 = new Catalogos(
        'Escalada', 
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        'url(img/imgpacotes/imgescalada.jpg'
    );

    let parte3 = new Catalogos(
        'Trekking e Trilhas', 
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        'url(img/imgpacotes/imgtrilhas.jpg'
    );

    let parte4 = new Catalogos(
        'Rapel', 
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        'url(img/imgpacotes/imgrapel.jpg'
    );

    parteInicial.mudarTela(tituloCatalogo1, descricaoCatalogo1, fundoCatalogo1);
    parte2.mudarTela(tituloCatalogo2, descricaoCatalogo2, fundoCatalogo2);
    parte3.mudarTela(tituloCatalogo3, descricaoCatalogo3, fundoCatalogo3);
    parte4.mudarTela(tituloCatalogo4, descricaoCatalogo4, fundoCatalogo4);
}

function TrocaTela(id) {
    sessionStorage.setItem('clicado', id);
    window.location.href = 'aventura.html';
}

window.onload = function() {
    const clicado = sessionStorage.getItem('clicado');

    if(clicado){
        switch(clicado) {
            case 'Mares':
                aventuraMares();
                break;
            case 'Montanhas':
                aventuraMontanhas();
                break;
            default:
                null;
        }
    }
}