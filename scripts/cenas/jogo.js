class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa
  }  
  
  setup() {

    // Start Parallax        
    background_1 = new Background(imageGameBackground_1, 1);
    background_2 = new Background(imageGameBackground_2, 2.5);
    background_3 = new Background(imageGameBackground_3, 3);
    background_4 = new Background(imageGameBackground_4, 3.5);
    background_5 = new Background(imageGameBackground_5, 4);
    // End Parallax    



    // cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao()
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15)

    inimigos.push(inimigo)
    inimigos.push(inimigoGrande)
    inimigos.push(inimigoVoador)
  
  }

  // keyPressed(key) {
  //   if (key === 'ArrowUp') {
  //     personagem.pula()
  //     somDoPulo.play()
  //   }
  // }
  
  keyPressed(Key){
  
    if (gameOver) {
      if (key === 'Enter') {
        // console.log('Digitado: Enter');
        resetaJogo();
        
      }
    } else {
      if ((key === 'ArrowUp' || key === ' ') && !gamePaused) {
        // if(personagem.pula())
        //   somDoPulo.play()
            personagem.pula()
            somDoPulo.play()
      }

      if ((key === 'ArrowLeft' || key === 'ArrowRight') && !gamePaused) {
       movimento = (key === 'ArrowLeft') ? -1 : 1;
      }

      if (key === 'Pause' || key === 'Escape') {
        gamePaused = !gamePaused;
        if(!gamePaused) {
          loop();
        }

      }
  }
  
  }
  

  

  draw() {
    noFill();
    // Start Parallax
    background_1.show();
    background_1.move();
    background_2.show();
    background_2.move();
    background_3.show();
    background_3.move();
    background_4.show();
    background_4.move();    
    // End Parallax

    //cenario.exibe();
    //cenario.move();

    vida.draw()
    pontuacao.exibe()
    pontuacao.adicionarPonto()
    personagem.exibe();
    personagem.aplicaGravidade();
    const linhaAtual = this.mapa[this.indice]
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe()
    inimigo.move()

    background_5.show();
    background_5.move();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece()
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida()
      personagem.tornarInvencivel()
      if (vida.vidas === 0) {
        image(imagemGameOver, width / 2 - 200, height / 3)
        noLoop()
        somDoJogo.stop();
        background(0, 0, 0, 125);
        textFont(fonteTelaInicial);
        textSize(24);
        strokeWeight(0);
        fill(255);
        textAlign(CENTER);
        text('pressione ENTER para jogar novamente.', width / 2, (height / 2)+80);
        
        // resetaJogo();
        // sketch.setup();
        gameOver = true;
        return;                    
        
        
      }
    }
   
  
  }
    
  
}