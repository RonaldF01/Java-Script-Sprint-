// //carousel

// //Array storage class
// let carouselArr = [];

// //class Carousel
// class Carousel {
//     constructor(image, title, link){
//         this.image = image;
//         this.title = title;
//         this.link = link; 
//     }
    
//     static Start(arr){
//         if(arr){
//             if(arr.length > 0){
//                 Carousel._list = arr;
//                 Carousel._sequence = 0;
//                 Carousel._size = arr.length;
//                 Carousel.Next(); //start primeiro slide imediatamente
                
//                 // Configura para rodar a cada 3 segundos
//                 Carousel._interval = setInterval(function(){ Carousel.Next(); }, 3000);
//             }
//         } else {
//             throw "Method Start need a Array Variable.";
//         }
//     }

//     static Next(){
//         // CORRIGIDO: Adicionado o "l" em Carousel e o ";" no fim
//         let carroAtual = Carousel._list[Carousel._sequence]; 

//         let caixaDaImagem = document.getElementById("carousel");
//         let caixaDoTexto = document.getElementById("carousel-title");

//         if(caixaDaImagem && caixaDoTexto){
//             caixaDaImagem.innerHTML = `
//                 <a href="${carroAtual.link}">
//                     <img src="img/${carroAtual.image}" class="foto-carro">
//                 </a>
//             `;

//             caixaDoTexto.innerHTML = `<p>${carroAtual.title}</p>`;
//         }

//         // CORRIGIDO: Coloquei esse bloco dentro da função Next antes de fechar a chave!
//         Carousel._sequence++;

//         if(Carousel._sequence >= Carousel._size){
//             Carousel._sequence = 0;
//         }
//     } // Chave do Next fechada no lugar certo agora!
// }


//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {
    constructor(image, title, link){
        this.image = image;
        this.title = title;
        this.link = link; 
    }
    
    static Start(arr){
        if(arr){
            if(arr.length > 0){
                Carousel._list = arr;
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Render(); // Desenha o primeiro slide imediatamente
                
                // Liga o motor automático pela primeira vez
                Carousel.ResetTimer();
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    // Função para zerar o cronômetro automático quando o usuário clica no botão
    static ResetTimer() {
        clearInterval(Carousel._interval);
        Carousel._interval = setInterval(function(){ Carousel.Next(); }, 3000);
    }

    // Função central que joga os dados do carro atual na tela
    static Render() {
        let carroAtual = Carousel._list[Carousel._sequence];
        // Alvo alterado para "carousel-images" para não apagar os botões HTML
        let caixaDaImagem = document.getElementById("carousel-images");
        let caixaDoTexto = document.getElementById("carousel-title");

        if(caixaDaImagem && caixaDoTexto){
            caixaDaImagem.innerHTML = `
                <a href="${carroAtual.link}">
                    <img src="img/${carroAtual.image}" class="foto-carro">
                </a>
            `;
            caixaDoTexto.innerHTML = `<p>${carroAtual.title}</p>`;
        }
    }

    // BOTÃO AVANÇAR
    static Next(){
        Carousel._sequence++;
        if(Carousel._sequence >= Carousel._size){
            Carousel._sequence = 0;
        }
        Carousel.Render();
        Carousel.ResetTimer(); // Evita que o slide mude correndo após o clique
    }

    // BOTÃO VOLTAR
    static Prev(){
        Carousel._sequence--;
        if(Carousel._sequence < 0){
            Carousel._sequence = Carousel._size - 1; // Se estava na primeira, vai para a última
        }
        Carousel.Render();
        Carousel.ResetTimer(); // Evita que o slide mude correndo após o clique
    }
}