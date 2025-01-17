AOS.init();

function PassarCapa(){
    let capa = document.getElementById('imagemcapa');
    let btnPassar = document.querySelectorAll('.passarimg');

    for(let i=0;i<btnPassar.length;i++){
        let num = i+1;
        btnPassar[i].addEventListener('click', function(){

            btnPassar.forEach(function(btn) {
                btn.classList.remove('passarimg_active');
            });

            btnPassar[i].classList.add('passarimg_active');

            capa.style.backgroundImage = 'url(img/capaaventura' + num + '.jpg';
        });
    }
}

PassarCapa();

//Carrosel atividades
const setaR = document.getElementById('ativ_setaR');
const setaL = document.getElementById('ativ_setaL');

const ativBtn = document.querySelectorAll('.ativ_btn');

const fundoCarroselAtiv = document.getElementById('atividades');
const tituloPrincipalAtiv = document.getElementById('ativ_titulo');
const textosCardsAtiv = document.querySelectorAll('.ativ_text');
const iconCardsAtiv = document.querySelectorAll('.ativ_iconCards');

var numBtnActive = 0;

function verificarBtn(){
    let tituloCards = [
        'Atividades maritimas',
        'Atividades nas montanhas',
        'Atividades na neve',
        'Atividades aéreas',
        'Atividades de camping',
        'Atividades em cachoeiras'
    ];
    
    let coresIconCards = [
        '#153999',
        '#3B6D1B',
        '#B2D3DD',
        '#AB927B',
        '#412751',
        '#716333'
    ];
    
    let descricaoCardDificuldades = [
        'Correntes fortes, mudanças climáticas inesperadas e ondas imprevisíveis são desafios comuns em atividades no mar. Fadiga, visibilidade limitada e imprevistos podem aumentar os riscos. A preparação adequada e o conhecimento das condições ajudam a minimizar esses problemas.',
        'As atividades nas montanhas enfrentam desafios como mudanças repentinas no clima, terrenos irregulares e altitude elevada. O cansaço físico e a adaptação ao ambiente podem ser difíceis. Preparação física e mental é essencial para enfrentar esses obstáculos.',
        'Atividades na neve enfrentam desafios como baixas temperaturas, ventos fortes e terrenos escorregadios. A fadiga e o risco de hipotermia podem ser altos. Preparação para o frio e conhecimento do ambiente são fundamentais para lidar com essas dificuldades.',
        'Atividades aéreas podem apresentar desafios como mudanças climáticas imprevisíveis, turbulências e a necessidade de habilidades técnicas precisas. A fadiga e o medo da altura também podem ser obstáculos. Preparação mental e física são essenciais para lidar com esses desafios.',
        'Acampamentos podem apresentar dificuldades como mudanças climáticas repentinas, terrenos irregulares e a necessidade de adaptação ao ambiente selvagem. A escassez de recursos e a possibilidade de encontros com animais selvagens são riscos.',
        'Atividades em cachoeiras podem envolver riscos como correntes fortes, pedras escorregadias e quedas acidentais. A água fria e as dificuldades de navegação no terreno podem ser desafiadoras. Conhecimento da área e precaução são essenciais para evitar acidentes.'
    ];
    let descricaoCardRequisitos = [
        'Atividades marítimas exigem força, resistência e equilíbrio. O controle respiratório é essencial em mergulhos e atividades aquáticas, enquanto surfe e remo pedem boa coordenação e agilidade. O preparo físico é fundamental para enfrentar os desafios naturais do ambiente marítimo.',
        'Boa resistência, força e equilíbrio são essenciais para caminhadas e escaladas. A adaptação à altitude é importante, pois pode afetar o desempenho físico. A preparação física é fundamental para suportar os desafios do terreno montanhoso.',
        'Força, resistência e equilíbrio são essenciais para atividades como esqui e snowboard. O controle da respiração e a resistência ao frio também são importantes. A adaptação ao ambiente gelado exige bom preparo físico.',
        'Boa saúde cardiovascular, resistência e controle do equilíbrio são importantes. Atividades como paraquedismo e voo livre exigem resistência e coordenação. O controle mental e a preparação para situações de estresse também são fundamentais.',
        'Boa resistência física e habilidades de sobrevivência são importantes. Caminhadas longas e transporte de equipamentos pesados exigem força e resistência. O preparo mental também é fundamental para lidar com condições adversas e imprevistos.',
        'Boa resistência física, força e equilíbrio são importantes para atividades como rapel ou trilhas em áreas de cachoeiras. A habilidade de nadar e a capacidade de suportar a água fria também são essenciais para garantir a segurança.'
    ];
    let descricaoCardEquipamentos = [
        'Coletes salva-vidas, máscaras de mergulho e rádios de comunicação são fundamentais para a segurança. Em esportes como surfe, pranchas com leashes são indispensáveis. Dispositivos como sinalizadores e kits de primeiros socorros são cruciais para lidar com emergências.',
        'Roupas apropriadas, botas de trekking e mochilas são indispensáveis. Em atividades de escalada, cordas e equipamentos de segurança são cruciais. Dispositivos de navegação e kits de primeiros socorros também são essenciais para a segurança nas montanhas.',
        'Botas térmicas, roupas impermeáveis e coletes salva-vidas são essenciais. Para esportes como esqui e snowboard, pranchas, bastões e capacetes são necessários. Além disso, dispositivos de comunicação e kits de primeiros socorros são fundamentais para segurança.',
        'Equipamentos de segurança como paraquedas, altímetros e capacetes são indispensáveis. Em voos de avião ou balão, os dispositivos de navegação e comunicação são essenciais. Kits de primeiros socorros e roupas adequadas também são importantes para segurança.',
        'Barracas impermeáveis, sacos de dormir e mochilas são itens indispensáveis. Filtros de água, fogareiros e lanternas garantem conforto e segurança. Kits de primeiros socorros e roupas adequadas são essenciais para lidar com emergências e mudanças climáticas.',
        'Equipamentos como cordas para rapel, tênis adequados para terrenos escorregadios e coletes salva-vidas são indispensáveis. Protetores para os pés e mochilas impermeáveis ajudam a garantir conforto e segurança. Kits de primeiros socorros também são essenciais para emergências.'
    ];

    for(let i=0;i<ativBtn.length;i++){
        if(numBtnActive == i){
            let numImg = i+1;
            fundoCarroselAtiv.style.backgroundImage = 'url(img/aventura' + numImg + '.jpg)';
            tituloPrincipalAtiv.innerHTML = tituloCards[i];
            textosCardsAtiv[0].innerHTML = descricaoCardDificuldades[i];
            textosCardsAtiv[1].innerHTML = descricaoCardRequisitos[i];
            textosCardsAtiv[2].innerHTML = descricaoCardEquipamentos[i];

            iconCardsAtiv.forEach(function(cor){
                cor.style.backgroundColor = coresIconCards[i];
            });

            ativBtn.forEach(function(btn){
                btn.classList.remove('ativ_active');
            });

            ativBtn[i].classList.add('ativ_active');
        }
    }
}

setaR.addEventListener('click', function(){
    numBtnActive++;
    if(numBtnActive >= ativBtn.length-1){
        numBtnActive = ativBtn.length-1;
    }
    verificarBtn();
});

setaL.addEventListener('click', function(){
    numBtnActive--;
    if(numBtnActive <= 0){
        numBtnActive = 0;
    }
    verificarBtn();
});

//Alternar modo light e dark
const toggleTheme = document.querySelector('#toggletheme');
const rootHtml = document.documentElement;

function changeTheme(){
    let currentTheme = rootHtml.getAttribute('data-theme');

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