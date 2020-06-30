// class Cenario {
//   constructor(imagem, velocidade){
//     this.imagem = imagem;
//     this.velocidade = velocidade;
//     this.x1 = 0;
//     this.x2 = width;
//   }

//   exibe() {
//     image(this.imagem, this.x1, 0, width, height);
//     image(this.imagem,this.x2, 0, width, height);
//   }

//   move() {
//     this.x1 = this.x1 - this.velocidade;
//     this.x2 = this.x2 - this.velocidade;

//     if (this.x1 < -width){
//       this.x1 = width;
//     }
//     if (this.x2 < -width){
//       this.x2 = width;
//     }
//   }
// }

class Background {
  constructor(image, speed) {
    this.image = image;
    this.speed = speed;
    this.x1 = 0;
    this.x2 = width;
  }

  show() {
    image(this.image, this.x1, 0, width, height);
    image(this.image, this.x2, 0, width, height);
  }

    move() {
      this.x1 = this.x1 - this.speed;
      this.x2 = this.x2 - this.speed;

      if (this.x1 < -width) {
        this.x1 = width - 10;
      }

      if (this.x2 < -width) {
        this.x2 = width - 10;
      }
    }  
}