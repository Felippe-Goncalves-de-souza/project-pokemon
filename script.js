const botao  = window.document.getElementById("claro");
const fundo  = window.document.getElementById('fundo');
const info   = document.querySelectorAll('#lista div');
const header = document.getElementsByTagName('header');
const icon   = document.getElementsByTagName('img');
console.log(info);

let modoatual;
let claro = 1, escuro = 2;
 
botao.addEventListener('click', ()=>{
   
    if(modoatual == 1){
        fundo.style.transition         = 'background-color 1s';
        fundo.style.backgroundColor    = "#060117";
        
        header[0].style.transition      ='background-color 1s'
        header[0].style.backgroundColor = "#0A002E";
       
        for( let nome of info){
           nome.style.transition      = 'background-color 1s';
           nome.style.backgroundColor ='#3C1DAB';
       };
       
        icon[0].style.transition = "background-color 1s";
        icon[0].setAttribute('src', './img/night-pokeball.png');
       
        icon[1].style.transition = "background-color 1s";
        icon[1].setAttribute('src', './img/moon.png');
        modoatual = escuro;
    }else{
        fundo.style.transition      = 'background-color 1s';
        fundo.style.backgroundColor = "#E47B7B";
        
        header[0].style.transition      ='background-color 1s'
        header[0].style.backgroundColor = "#340202";
       
        for( let nome of info){
           nome.style.transition      = 'background-color 1s';
           nome.style.backgroundColor ='#340202';
       };
       
        icon[0].style.transition = "background-color 1s";
        icon[0].setAttribute('src', './img/day-pokeball.png');
       
        icon[1].setAttribute('src', './img/sun.png');
    
        modoatual = claro;
    }
})

function modoEscuro(){
    fundo.style.transition      = 'background-color 1s';
    fundo.style.backgroundColor = "#060117";
    
    header[0].style.transition      ='background-color 1s'
    header[0].style.backgroundColor = "#0A002E";
   
    for( let nome of info){
       nome.style.transition      = 'background-color 1s';
       nome.style.backgroundColor ='#3C1DAB';
   };
   
    icon[0].style.transition = "background-color 1s";
    icon[0].setAttribute('src', './img/night-pokeball.png');
   
    icon[1].setAttribute('src', './img/moon.png');
    modoatual = escuro;
}

 function modoClaro(){
    fundo.style.transition      = 'background-color 1s';
    fundo.style.backgroundColor = "#E47B7B";
    
    header[0].style.transition      ='background-color 1s'
    header[0].style.backgroundColor = "#340202";
   
    for( let nome of info){
       nome.style.transition      = 'background-color 1s';
       nome.style.backgroundColor ='#340202';
   };
   
    icon[0].style.transition = "background-color 1s";
    icon[0].setAttribute('src', './img/day-pokeball.png');
   
    icon[1].setAttribute('src', './img/sun.png');

    modoatual = claro;
}
