// 1. Pega os elementos do HTML
const terminalInput = document.getElementById('terminal-input');
const terminalSaida = document.getElementById('terminal-saida');
const terminalBody = document.getElementById('terminal-body');

// 2. Da as budega dos comandos pro terminal
const comandos = {
    help: "Comandos disponíveis: <strong>sobre</strong>, <strong>skills</strong>, <strong>projetos</strong>, <strong>github</strong>, <strong>easter egg</strong>, <strong>clear</strong> <br> <strong style='color: #f83838;'>ATENÇÃO: easter eggs disponíveis, tente encontrar!</strong>",
    sobre: "Alice Silva Pereira, 14 anos. Estudante Full-Stack focada no ecossistema JavaScript, Node.js e automações de testes com GitHub Actions.",
    skills: "HTML5, CSS3, JavaScript, Node.js, Git/GitHub, GitHub Actions e consumo de REST APIs.",
    projetos: "Alguns dos meus projetos mais recentes:<br>1. J.A.R.V.I.S. (IA & Voz)<br>2. Conversa com Terminal (CLI em Node.js)<br>3. Previsão do Tempo (API Groq)<br>4. Spotify Web (iTunes API) <br> Inclusive, todos estão na seção de Projetos, se quiser dar uma olhada! <br> <strong style='color: #38bdf8;'>Dica: tente encontrar os easter eggs!</strong>",
    github: 'Meu perfil: <a href="https://github.com/AliceSilva2012" target="_blank" style="color: #38bdf8;">github.com/AliceSilva2012</a>',
    "easter egg": "Easter eggs disponíveis! Tente encontrar todos!",
    clear: "Terminal limpo! Digite <strong style='color: #38bdf8;'>help</strong> para ver os comandos disponíveis.",
    404: "Achou que ia conseguir me bugar não é? Vai projcurar mais easter eggs.",
    // EASTER EGGS GALÁTICOS E INÉDITOS
    ps2: "🔊 WOOOOOOOOOOWWW (não esquece do PS3!)",
    ps3: "🎮 'Não esquece do PS4!'",
    ps4: "🎮 'Não esquece do ps5!'",
    ps1: "🎮 'Não esquece do PS2!'",
    psvita: "🎮 'Não esquece do XBOX!'",
    jarvis: "🤖 'Ao seu dispor, Sr. Stark. Sistemas operando a 100%.'",
    ps5: "🎮 'Não esquece do psvita!'",
    zelda: "🗡️ 'It's dangerous to go alone! Take this: console.log(\"Hero!\");'",
    "tony stark": "🦾 'Eu sou o Homem de Ferro.'",
    nintendinho: "🎮 'Não esquece do nintendo switch!'",
    "nintendo switch": "🎮 'Não esquece do game boy!'",
    "game boy": "🎮 'Não esquece do nintendo ds!'",
    "nintendo ds": "🎮 'Não esquece do nintendo 3ds!'",
    "nintendo 3ds": "🎮 'Não esquece do xbox 360!'",
    "xbox 360": "🎮 'Não esquece do xbox one!'",
    "xbox one": "🎮 'Não esquece do minecraft!'",
    nintendo: "🎮 'ZEEEELLLLDAAAAAAAAAAAAAAA!'",
    xbox: "🎮 'Xbox? NOSTALGIC (não esquece do nintendinho)'",
    code: "Easter egg encontrado! Você é um verdadeiro dev, parabéns! <br> Tente procurar mais easter eggs, tem muitos escondidos!",
    minecraft: "⛏️ 'Cuidado com os Creepers! Não esquece do super mario world!'",
    supermarioworld: "🍄 'Não esquece do super mario 64!'",
    "super mario 64": "🍄 'Não esquece do sonic!'",
    sonic: "🦔 'Não esquece do tetris!'",
    tetris: "🧩 'Não esquece do pacman!'",
    pacman: "👾 'Não esquece do donkey kong!'",
    "donkey kong": "🦍 'Não esquece do pokemon!'",
    "capitão américa": "Eu posso fazer isso o dia todo.",
    thor: "Traga-me o Thanos!",
    hulk: "Esse é o meu segredo, Capitão, tô sempre com raiva.",
    "homem aranha": "🕷️ 'Com grandes poderes vêm grandes responsabilidades.'",
    "viuva negra": "Eu não tinha nada, e aí eu consegui esse emprego, essa família. Mas nada dura para sempre.",
    "gavião arqueiro": "A cidade está voando, estamos lutando contra um exército de robôs e eu tenho um arco e flecha. Nada disso faz sentido.",
    pokemon: "🔴 'Um Pikachu selvagem apareceu! Ele usou Choque do Trovão no seu servidor!'",
    roblox: "AAÀAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA, não me pagam pra isso!",
    code: "Easter egg encontrado! Você é um verdadeiro dev, parabéns! <br> Tente procurar mais easter eggs, tem muitos escondidos!",
    jesus: "✝️ 'Eu sou o caminho, a verdade e a vida'. <br> Boa, tem muito mais easter eggs escondidos, tente procurar mais!",
    darthvader: "'Luke, eu sou seu pai.', <br> AAAAAAAAAAAAAAAA, plot twist!",
    ola: "Olá, que formal! Está procurando easter eggs? Tenta de novo<br>Digite <strong style='color: #38bdf8;'>help</strong> para ver os comandos disponíveis.",
    alice: "EEEEEEEEUUUUU?!",
    matrix: "<span style='color: #00ff00;'>01000001 01001100 01001001 01000011 01000101 (Você encontrou a Matrix!)</span>",
    "easter egg": "Parabéns, você desbloqueou um easter egg! <br> Tente procurar mais, tem muitos escondidos!",
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