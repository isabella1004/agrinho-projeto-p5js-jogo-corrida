// Lista de jogadores
let xJogadores = [450, 450, 450, 450];
let yJogadores = [100, 200, 300, 400];
let jogadores = ["🚜", "🚚", "🚛", "🛻"];
let vencedor = null;

// Configuração do da Tela
function setup() {
  createCanvas(500, 500);
  frameRate(10); // Reduz a velocidade da animação
}

function draw() {
  ativaJogo();
  criaJogadores();
  criaChegada();
  movimentaJogadores(); // Adicionada função para movimento automático
  verificaGanhador();
  
  // Se houver vencedor, mostra mensagem
  if (vencedor !== null) {
    fill("white");
    textSize(60);
    text(jogadores[vencedor] + " venceu!", 80, 200);
  }
}

// Cor de fundo da Tela ativado/desativado
function ativaJogo() {
  if (focused == true) {
    background("rgb(161,240,243)");
  } else {
    background("#F7B6CC");
  }
}

// Cria os jogadores
function criaJogadores() {
  textSize(30);
  for (let i = 0; i < 4; i++) {
    text(jogadores[i], xJogadores[i], yJogadores[i]);
  }
}

// Cria linha de chegada
function criaChegada() {
  fill("white");
  rect(50, 0, 10, 500);

  fill("black");
  for (let yAtual = 10; yAtual < 500; yAtual += 20) {
    rect(50, yAtual, 10, 10);
  }
}

// Função para movimentação automática dos jogadores
function movimentaJogadores() {
  if (vencedor === null) { // Só move se não houver vencedor
    for (let i = 0; i < 4; i++) {
      xJogadores[i] -= random(5, 20); // Move cada jogador aleatoriamente
    }
  }
}

// Verifica quem ganhou
function verificaGanhador() {
  for (let i = 0; i < 4; i++) {
    if (xJogadores[i] < 50 && vencedor === null) {
      vencedor = i; // Define o vencedor
    }
  }
}