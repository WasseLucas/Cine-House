const catalogo = require('./database/catalogo.json')

let cinema = "Cine-House"

const adicionarFilme = (codigo, titulo, duracao, atores, anoDeLancamento, emCartaz) => {
    catalogo.push({
        codigo,
        titulo,
        duracao,
        atores,
        anoDeLancamento,
        emCartaz})
}

const buscarFilme = (codigo) => {
    for (let i = 0; i < catalogo.length; i++) {
        catalogo[i].codigo === codigo ? console.log(catalogo[i]) : ''
    }
}

const listarTodosOsFilmes = () => {
    for (let i = 0; i < catalogo.length; i++) {
        return catalogo
    }
}

let listarFilmesEmCartaz = catalogo.filter(function (obj) {
    return obj.emCartaz == true;
})

const alterarStatusEmCartaz = (codigo) => {
    for (let i = 0; i < catalogo.length; i++) {
        catalogo[i].codigo == codigo ? catalogo[i].emCartaz = !catalogo[i].emCartaz : '';
    }
}

adicionarFilme(3,"Homem Aranha",2.11,['Tom Holland','Marisa Tomei','Tobey Maguire','Andrew Garfild'],2022, true)
console.log(catalogo)