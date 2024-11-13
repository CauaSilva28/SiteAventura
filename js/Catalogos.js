class Catalogos{
    constructor(titulo, descricao, fundo){
        this.titulo = titulo;
        this.descricao = descricao;
        this.fundo = fundo;
    }

    mudarTela(_titulo, _descricao, _fundo){
        _titulo.innerHTML = this.titulo;
        _descricao.innerHTML = this.descricao;
        _fundo.style.backgroundImage = this.fundo;
    }
};