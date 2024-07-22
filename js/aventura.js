AOS.init();

const telaVenda = document.getElementById('fundoTelaVenda');

function fecharTelaVenda(){
    telaVenda.style.display = 'none';
}

const catalogos = document.querySelectorAll('.catalogos');
const imgTelaVenda = document.getElementById('telaVenda-img');
const telaVendaTitulo = document.getElementById('telaVenda-title');

const titulosTelaVenda = [
    'Passeio de cruzeiro oceano',
    'Passeio de iate mares',
    'Passeio de escuna mares',
    'Passeio de veleiro rios',
];

for (let i = 0; i < catalogos.length; i++) {
    catalogos[i].onclick = function() {
        telaVenda.style.display = 'flex';
        imgTelaVenda.style.backgroundImage = 'url(../img/imgpacotes/imgTelaVenda/imgvenda' + i + '.jpg)';
        telaVendaTitulo.textContent = titulosTelaVenda[i];
    };
}