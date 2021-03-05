const baseUrl = 'https://recipe-puppy.p.rapidapi.com/',
    apiKey = 'a1bca28f62mshbea80f8316490ddp11c9c0jsnd2dab23f5d22';

// Get Elements --------------------------------------------
const searchInput = getElement('.search-bar'),
    searchButton = getElement('.search-button'),
    container = getElement('.results'),
    erroMessage = getElement('.error');

var plateName, // Nome passado na caixa de busca
    result, // Responsavel por guardar os dados recebidos da API
    card = ''; // Responsavel por receber o HTML 

// Build Functions --------------------------------------------

// Função para reduzir a escrita na captura de elementos HTML
function getElement(element) {
    return document.querySelector(element);
}

// Função responsavel por fazer requisições para a API e inserir as respostas na variavel plate
function requestPlateInfo(url, name) {
    fetch(url + '?p=1&q=' + name, {
            method: 'GET',
            headers: new Headers({
                'x-rapidapi-key': 'a1bca28f62mshbea80f8316490ddp11c9c0jsnd2dab23f5d22',
                'x-rapidapi-host': 'recipe-puppy.p.rapidapi.com'
            })
        })
        .then(response => response.json())
        .then(data => {
            plate = data;
        })
        .catch(err => console.log(err));
    container.innerHTML = null;
    card = '';
}

// Função responsavel por montar o HTML exibido na pagina
function createCard() {
    plate.results.forEach(result => {
        card += `
        <div class="plate-info">
            <h5 class="name">${result.title}</h5>
            <a href="${result.href}" class="link" target="_blank">Link receita</a>
            <h6 class="ingredients">Ingredientes: ${result.ingredients}</h6>
        </div>`;
    });
    return card;
}


// Função que faz a chamada das principais funções e inicia o app
function startApp(plateName) {
    requestPlateInfo(baseUrl, plateName);
    setTimeout(function (){
        container.innerHTML += createCard();
    }, 2000);
}

// Add Events --------------------------------------------

searchButton.addEventListener('click', event => {
    event.preventDefault();
    plateName = searchInput.value.toLowerCase();
    startApp(plateName);
});
