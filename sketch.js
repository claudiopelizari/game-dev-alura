function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40)
  somDoJogo.loop();
  jogo = new Jogo()
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  };
  
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
}

function setupReset() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40)
  somDoJogo.loop();
  jogo = new Jogo()
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  };  
}


function keyPressed() {
 jogo.keyPressed(key);
}

function mouseClicked(event) {  
  personagem.pula()
  somDoPulo.play()  
}

function draw() {
  cenas[cenaAtual].draw();
}


function keyReleased(){
  if (key === 'ArrowLeft' || key === 'ArrowRight') movimento = 0;
}


function resetaJogo(){
  gameOver = false;
  setupReset();
  loop();
}


// function touchStarted() {
//   canvasPressed();
//   return false;
// }

function canvasPressed() {
  //console.log('foi');
  if (gameOver) {
    resetaJogo();
  } else {
    if(personagem && personagem.pula())
      somDoPulo.play();
  }
} 
