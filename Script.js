// Função para adicionar o CSS ao documento
function adicionarEstilos() {
    const estiloCSS = `
/* CABEÇALHO */
* {
    margin: 0;
}

#arrumar {
    display: flex;
    flex-direction: column;
    margin-bottom: 20vh;
    margin-top: 5vh;
}

.separacao {
    margin-left: 70%;
    padding-top: 1%;
}

#icone1 {
    width: 20%;
    display: flex;
}

#sobre1 {
    text-decoration: none;
    font-size: 4vh;
    position: absolute;
    margin-top: 1.9%;
    margin-left: 73%;
    font-family: Arial, Helvetica, sans-serif;
    color: #9f8067;
}

#sobre1:hover {
    transform: scale(1.1);
    filter: drop-shadow(2px 2px 5px #a39998);
    transition: transform 0.3s ease;
}

#casinha {
    margin-left: 70vw;
    margin-top: 2vh;
}

#casinha:hover {
    transform: scale(1.1);
    filter: drop-shadow(2px 2px 5px #a39998);
    transition: transform 0.3s ease;
}

#header1 {
    background-color: #D6D0C4;
    color: #fff;
    padding: 10px 20px;
    padding-bottom: 3vh;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
}

#bloco2 {
    width: 100%;
    margin-top: 10vh;
}

.cart-total {
    display: flex;
    padding-left: 1vh;
    font-family: Arial, Helvetica, sans-serif;
    font-optical-sizing: auto;
    color: #9F8067;
    font-size: 5vh;
    letter-spacing: 2px;
    margin-left: 67vw;
    margin-top: 5vh;
}

#button2 {
    outline: none;
    color: #DAA06D;
    padding: 0.8em;
    padding-left: 2em;
    padding-right: 2em;
    border: 2px dashed #DAA06D;
    border-radius: 15px;
    background-color: #EADDCA;
    box-shadow: 0 0 0 4px #EADDCA, 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
    transition: .1s ease-in-out, .4s color;
    margin-top: 2.3vh;
    font-size: 2.6vh;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    margin-left: 43vw;
}

#button2:active {
    transform: translateX(0.1em) translateY(0.1em);
    box-shadow: 0 0 0 4px #EADDCA, 1.5px 1.5px 2.5px 1.5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
}

#quantidade {
    border: 1px solid #7D634E;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 170px;
    height: 50px;
    background-color: #fff;
    margin-top: 2vh;
    margin-left: 25vw;
}

#nomequan {
    margin-left: 25vw;
}

#quantia {
    height: 50px;
    width: 70px;
    border: 1px solid #7D634E;
    display: flex;
    align-items: center;
    justify-content: center;
}

.quantidade-btn {
    border: none;
    cursor: pointer;
    background-color: white;
    color: #7D634E;
    font-size: xx-large;
    width: 50px;
    height: 50px;
}

#produto {
    display: flex;
    align-items: center;
    height: 25vh;
    width: 70%;
    background-color: #FAF2E1;
    margin-left: 15%;
    position: absolute;
    margin-top: 10vh;
}

.organizacao {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 10vh;
    justify-content: center;
}

.organizacao img {
    width: 9vw;
    height: 18vh;
    padding-left: 4%;
}

.escrito {
    display: flex;
    flex-direction: column;
    padding-left: 3vh;
    padding-bottom: 7vh;
    font-family: Arial, Helvetica, sans-serif;
    font-optical-sizing: auto;
    color: #9F8067;
    font-size: xx-large;
    letter-spacing: 2px;
    position: absolute;
    margin-left: 11vw;
}

#caixinha {
    display: flex;
    flex-direction: column;
    padding-left: 15vh;
    padding-bottom: 4.9vh;
    font-family: Arial, Helvetica, sans-serif;
    color: #9F8067;
    font-optical-sizing: auto;
    font-size: x-large;
    letter-spacing: 2px;
    align-items: center;
    position: absolute;
}

#precinho {
    color: #d85c7c;
    margin-top: 12vh;
    margin-left: 3vw;
    font-size: xx-large;
    position: absolute;
    margin-left: 42vw;
    padding-bottom: 9vh;
}

.cart-item {
    flex-direction: column;
    display: flex;
}

/* RODAPÉ  */

footer {
    margin-top: 7vh;
    background-color: #D6D0C4;
    color: #fff;
    display: flex;
    position: absolute;
    width: 100%;
    box-shadow: 0 -2px 4px #D6D0C4;
    height: 30vh;
}

.insta {
    position: absolute;
    display: flex;
    align-items: center;
    margin-top: 1.5%;
    margin-left: 2%;
}

.insta img {
    width: 6vh;
}

.tele {
    position: absolute;
    display: flex;
    align-items: center;
    margin-top: 6%;
    margin-left: 2%;
}

.tele img {
    width: 6vh;
}

.ema {
    position: absolute;
    display: flex;
    align-items: center;
    margin-top: 10.5%;
    margin-left: 2%;
}

.ema img {
    width: 6vh;
}

.insta p {
    font-size: 2.5vh;
    margin-left: 1vh;
    color: #565147;
}

.tele p {
    font-size: 2.5vh;
    margin-left: 1vh;
    color: #565147;
}

.ema p {
    font-size: 2.5vh;
    margin-left: 1vh;
    color: #565147;
}

.logof {
    position: absolute;
    display: flex;
    margin-top: 2%;
    margin-left: 83%;
}

.logof img {
    width: 33vh;
}

#doll {
    color: #565147;
    margin-left: 90vh;
    margin-top: 26vh;
    font-size: 2vh;
}

#vazio {
    color: #9F8067;
    font-size: xx-large;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 5vh;
    margin-left: 30vh;
}

#vazioimg {
    width: 100vh;
    margin-left: 95vh;
    margin-top: -30vh;
}

#finalizarcompra{
    background-color: #FAF2E1;
    width: 70%;
    height: 19vh;
    margin-left: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5%;
    margin-top: 5vh;
    
}

#total{
    font-size: 3.5vh;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: -1%;
    color: #D85C7C;
    margin-top: 1%;
}

#cupom{
    font-size: 3vh;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: #9F8067;
    display: flex;
    justify-content: space-around;
}

#escritin{
    margin-left: 10%;
    font-size: 4vh;
}

#caixin{
    width: 70%;
    height: 5vh;
    border-radius: 2vh;
    border: none;
    font-size: 3vh;
    color: #9F8067;
    margin-top: 2.5vh;
    margin-right: 3%;
}

input:focus{
    outline: #9F8067;
}

#button3{
    outline: none;
    color: #DAA06D;
    padding: 0.9em;
    padding-left: 2em;
    padding-right: 2em;
    border: 2px dashed #DAA06D;
    border-radius: 10px;
    background-color: #EADDCA;
    box-shadow: 0 0 0 4px #EADDCA, 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
    transition: .1s ease-in-out, .4s color;
    font-size: 2vh;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    margin-right: 6vh;
    width: 21vh;
}

#button3:active {
    transform: translateX(0.1em) translateY(0.1em);
    box-shadow: 0 0 0 4px #EADDCA, 1.5px 1.5px 2.5px 1.5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
}
    `;

    const styleTag = document.createElement('style');
    styleTag.type = 'text/css';
    styleTag.appendChild(document.createTextNode(estiloCSS));
    document.head.appendChild(styleTag);
}

// Adiciona o CSS ao documento quando o DOM está totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    adicionarEstilos();
    atualizarCarrinho(); // Certifique-se de chamar atualizarCarrinho após adicionar os estilos
    updateCartCount();  // Atualiza o contador do carrinho
});


// Remove um item do carrinho
function removerDoCarrinho(nome) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho = carrinho.filter(p => p.nome !== nome);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho(); // Atualiza a página do carrinho
    updateCartCount(); // Atualiza o contador do carrinho
}

// Atualiza o carrinho na página
function atualizarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoContainer = document.getElementById('carrinho');
    const totalContainer = document.getElementById('total');
    const finalizarCompraContainer = document.getElementById('finalizarcompra');
    const imagem = document.getElementById('imgfinal');
   
    carrinhoContainer.innerHTML = '';
    let total = 0;

    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML = '<p id="vazio">Seu carrinho está vazio.</p>';
        imagem.innerHTML = '<img id="vazioimg" src="img/vazio.svg">';
        totalContainer.innerText = '';
        finalizarCompraContainer.style.display = 'none'; // Esconde a div de finalizar compra
        return;
    }

    finalizarCompraContainer.style.display = 'flex'; // Exibe a div de finalizar compra

    carrinho.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML =
        `<div id="arrumar">
            <div class="organizacao">
                <div id="produto">
                    <img src="${item.imagem}" alt="${item.nome}">
                    <div class="escrito">
                        <strong><p>${item.nome}</p></strong>
                        <br>
                        <strong><p>R$ ${item.preco.toFixed(2)}</p></strong>
                    </div>
                    <div id="caixinha">
                        <strong><p id="nomequan">Quantidade</p></strong>
                        <br>
                        <div id="quantidade">
                            <button class="quantidade-btn" data-index="${index}" data-change="-1">-</button>
                            <p id="quantia">${item.quantidade}</p>
                            <button class="quantidade-btn" data-index="${index}" data-change="1">+</button>
                        </div>
                    </div>
                    <p class="escrito" id="precinho"><strong> R$${(item.preco * item.quantidade).toFixed(2)}</strong></p>
                    <button id="button2" data-nome="${item.nome}">Remover</button>
                </div>
            </div>
        </div>`;
        carrinhoContainer.appendChild(itemElement);
        total += item.preco * item.quantidade;
    });

    totalContainer.innerText = "Total: R$ " + total.toFixed(2);

    // Adiciona eventos aos botões de quantidade e remover
    document.querySelectorAll('.quantidade-btn').forEach(btn => {
        btn.addEventListener('click', (event) => {
            const index = parseInt(event.target.dataset.index);
            const change = parseInt(event.target.dataset.change);
            alterarQuantidade(index, change);
        });
    });

    document.querySelectorAll('#button2').forEach(btn => {
        btn.addEventListener('click', (event) => {
            const nome = event.target.dataset.nome;
            removerDoCarrinho(nome);
        });
    });
}


// Alterar a quantidade do item
function alterarQuantidade(index, change) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho[index].quantidade = Math.max(1, carrinho[index].quantidade + change);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
    updateCartCount(); // Atualiza o contador do carrinho
}


// Função para atualizar o contador de itens no carrinho
function updateCartCount() {
    // Obtém o carrinho do localStorage
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Calcula o total de itens
    const totalItems = carrinho.reduce((sum, item) => sum + item.quantidade, 0);

    // Atualiza o contador na página
    document.getElementById('cart-count').textContent = totalItems;
}

// Chama a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', updateCartCount);

// Exemplo de função para adicionar um item ao carrinho (para teste)
function adicionarAoCarrinho(nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // Verifica se o produto já está no carrinho
    const produtoExistente = carrinho.find(p => p.nome === nome);

    let imagem = event.target.dataset.imagem;
    
    if (produtoExistente) {
        produtoExistente.quantidade += 1;
    } else {
        carrinho.push({ nome, preco, quantidade: 1, imagem: imagem });
    }

    // Atualiza o localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Atualiza o contador de itens
    updateCartCount();

    // Popup
    const closePopupButton = document.getElementById('close-popup');
    const popup = document.getElementById('popup');

    // Abre o popup
    popup.style.display = 'flex';

    // Fecha o popup
    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Fecha o popup se clicar fora da área do popup
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
}