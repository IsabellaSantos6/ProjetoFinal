// Editando carrossel1
var carrossel1 = document.querySelector('#carrossel1')
var slides = document.querySelectorAll('.slide')
var esquerda = document.querySelector('#seta-esquerda')
var direita = document.querySelector('#seta-direita')

var slideAtual1 = 0
var qtdSlides = slides.length

esquerda.addEventListener('click',()=>{
    slideAtual1--
    
    if(slideAtual1 < 0){
        slideAtual1 = qtdSlides - 1
    }

    carrossel1.style.transform = `translateX(${-slideAtual1 * slides[0].offsetWidth}px)`
})

direita.addEventListener('click',()=>{
    slideAtual1++
    
    if(slideAtual1 > qtdSlides-1){
        slideAtual1 = 0
    }

    carrossel1.style.transform = `translateX(${-slideAtual1 * slides[0].offsetWidth}px)`
})

// Editando dropdown

var dropdown = document.getElementsByClassName('dropdown-btn');
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
}

// Editando carrossel 2

var carrossel2 = document.querySelectorAll('#carrossel2 .slide2')
var carrossels2 = document.querySelector('#carrossel2')

var slideAtual2 = 0

function carrossel_automatioco(){
  slideAtual2 ++
  if(slideAtual2 > carrossel2.length - 1){
      slideAtual2 = 0
  }

  carrossels2.style.transform = `translateX(${-slideAtual2 * carrossel2[0].offsetWidth}px)`
}
setInterval(carrossel_automatioco, 2000);

// Editando card modelos

var animando = document.querySelectorAll('[data-anime="right"]');

var animacaoClass = 'animate';

function animeScroll(){
  var windowTop = window.pageYOffset + ((window.innerHeight * 2) / 4);
  animando.forEach(function(elemento){
    if((windowTop)>elemento.offsetTop){
      elemento.classList.add(animacaoClass);
    }else{
      elemento.classList.remove(animacaoClass);
    }
  })

}

animeScroll();

if(animando.length){
    window.addEventListener('scroll',function() {
      animeScroll();
  })
}

// Editando icones

var animando2 = document.querySelectorAll('[data-anime="top"]');

var animacaoClass2 = 'animate2';

function animeScroll2(){
  var windowTop2 = window.pageYOffset + ((window.innerHeight * 3) / 4);
  animando2.forEach(function(elemento2){
    if((windowTop2)>elemento2.offsetTop){
      elemento2.classList.add(animacaoClass2);
    }else{
      elemento2.classList.remove(animacaoClass2);
    }
  })

}

animeScroll2();

if(animando2.length){
    window.addEventListener('scroll',function() {
      animeScroll2();
  })
}

// Editando modal


var fade = document.querySelector('#fade')
var modal = document.querySelector('#modal')
var abrirModal = document.querySelector('#cadastre-se')
var concluir = document.querySelector('#concluir')

var ativaModal = [fade,abrirModal]

var toggleModal = ()=>{
    fade.classList.toggle('hide')
    modal.classList.toggle('hide')
}



ativaModal.map((el)=>{
    el.addEventListener('click', ()=>toggleModal())
})
concluir.addEventListener('click',()=>{
  alert("Sua vaga foi garantida")
  
  let nome = document.querySelector ('#nome')
  let email = document.querySelector('#e-mail')
  let numero = document.querySelector('#numero')
  localStorage.setItem('nome', nome.value)
  localStorage.setItem('email',email.value)
  localStorage.setItem('numero',numero.value)
    
  toggleModal()
})

