// 1. Pega os elementos do HTML
const terminalInput = document.getElementById('terminal-input');
const terminalSaida = document.getElementById('terminal-saida');
const terminalBody = document.getElementById('terminal-body');

// 2. Da as budega dos comandos pro terminal
const comandos = {
    help: "Comandos disponíveis: <strong>sobre</strong>, <strong>skills</strong>, <strong>projetos</strong>, <strong>github</strong>, <strong>clear</strong> <br> <strong style='color: #f83838;'>ATENÇÃO: easter eggs disponíveis, tente encontrar!</strong>",
    sobre: "Alice Silva Pereira, 14 anos. Estudante Full-Stack focada no ecossistema JavaScript, Node.js e automações de testes com GitHub Actions.",
    skills: "HTML5, CSS3, JavaScript (DOM/Async), Node.js, Git/GitHub, GitHub Actions e consumo de REST APIs.",
    projetos: "Alguns dos meus projetos mais recentes:<br>1. J.A.R.V.I.S. (IA & Voz)<br>2. Conversa com Terminal (CLI em Node.js)<br>3. Previsão do Tempo (API Groq)<br>4. Spotify Web (iTunes API)",
    github: 'Meu perfil: <a href="https://github.com/AliceSilva2012" target="_blank" style="color: #38bdf8;">github.com/AliceSilva2012</a>',
    clear: "Terminal limpo! Digite <strong style='color: #38bdf8;'>help</strong> para ver os comandos disponíveis.",
    404: "Achou que ia conseguir me bugar não é? Vai projcurar mais easter eggs.",
    // EASTER EGGS GALÁTICOS E INÉDITOS
    ps2: "🔊 WHOOOOOOSH... (Inserindo o disco da nostalgia!)",
    jarvis: "🤖 'Ao seu dispor, Sr. Stark. Sistemas operando a 100%.'",
    spiderman: "🕷️ 'Com grandes códigos vêm grandes responsabilidades.'",
    pokemon: "🔴 'Um Pikachu selvagem apareceu! Ele usou Choque do Trovão no seu servidor!'",
    ola: "Olá, que formal! Está procurando easter eggs? Tenta de novo<br>Digite <strong style='color: #38bdf8;'>help</strong> para ver os comandos disponíveis.",
    alice: "Cara, você achou outro meio de contato.",
    matrix: "<span style='color: #00ff00;'>01000001 01001100 01001001 01000011 01000101 (Você encontrou a Matrix!)</span>",
    // EASTER EGGS DE NERDOLA SEM GRAÇA
    "nerdola sem graça": "AAAAAAAAAAAAAAAAAAAAAAAAAAA, não me pagam pra isso!",
    //  COMANDOS DE ESPERTINHO LITERAL
    "easter egg": "Sério que você digitou literalmente 'easter egg'? Tenta de novo, nerdola sem graçaa...",
    easteregg: "Sério mesmo? Nerdola sem graçaa... Achou que era fácil é? TENTA DE NOVO!",
    oi: "Olá ser humano! Digite <strong style='color: #38bdf8;'>help</strong> para ver os comandos disponíveis."
};


terminalInput.addEventListener('keydown', function(event) {
    // esse enter é a tecla que a pessoa apertou, se for enter, processa o comando
    if (event.key === 'Enter') {
        // Pega o texto digitado, remove espaços nas pontas e deixa em minúsculo
        const comandoDigitado = this.value.trim().toLowerCase(); // Pega o valor do input, remove espaços e deixa em minúsculo (igual no projeto de Conversa com Terminal)
        // Limpa o campo de entrada para o próximo comando
        this.value = '';

        // Se a pessoa apertou Enter sem digitar nada, ignora o comando
        if (comandoDigitado === '') return;
        // Depois da resposta do terminal, limpa e adiciona uma nova linha para o próximo comando
        if (comandoDigitado === 'limpar' || comandoDigitado === 'clear') {
            terminalSaida.innerHTML = '';
            return;
        }
        // Processa e exibe o resultado na tela
        processarComando(comandoDigitado);
    }
});

// essa funcao processa o comando digitado e mostra a resposta no terminal (agora resolvendo o problema de não mostrar a resposta)
function processarComando(comando) {
    // Criar a linha mostrando o que o usuário digitou
    const linhaComando = document.createElement('div');
    linhaComando.style.marginTop = '8px'; // Adiciona um espaço entre os comandos com o css (e sim, pode fazer isso no JS porque é uma div criada dinamicamente)
    linhaComando.innerHTML = `<span class="prompt">alice@dev:~$</span> ${comando}`;
    terminalSaida.appendChild(linhaComando); //appendChild adiciona a linha de comando digitada pelo usuário no terminal

    // Criar a linha da resposta
    const linhaResposta = document.createElement('div'); //cria uma nova div para a resposta do comando
    linhaResposta.style.color = '#cbd5e1'; //ESTILOOOOOOO
    linhaResposta.style.marginBottom = '8px'; //ESPAÇOOOOOO

    // Se o comando existir no nosso objeto, mostra a resposta. Se não, avisa que não encontrou.
    if (comandos[comando]) { //o [comando] é a chave do objeto, se existir, mostra a resposta
        linhaResposta.innerHTML = comandos[comando]; //se tiver, mostra
    } else {// se não tiver, mostra que não encontrou
        linhaResposta.innerHTML = `Comando não reconhecido: <span style="color: #ef4444;">${comando}</span>. Digite <strong style="color: #38bdf8;">'help'</strong> para ver a lista.`;
    }

    terminalSaida.appendChild(linhaResposta); //chama a div de resposta e adiciona no terminal

    // Rola o terminal para o final automaticamente
    terminalBody.scrollTop = terminalBody.scrollHeight; //pros comandos que não cabem na tela, rola a tela para o final automaticamente e nao explodir na tela
}