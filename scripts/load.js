function preload() {
  // Parallax Background 
  imageGameBackground_1 = loadImage('imagens/cenario/sky.png');
  imageGameBackground_2 = loadImage('imagens/cenario/bg_decor.png');  
  imageGameBackground_3 = loadImage('imagens/cenario/middle_decor.png');
  imageGameBackground_4 = loadImage('imagens/cenario/foreground.png');
  imageGameBackground_5 = loadImage('imagens/cenario/ground.png');
  // Parallax Background
  
  //imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemVida = loadImage('imagens/assets/heart.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  fita = loadJSON('fita/fita.json')
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}