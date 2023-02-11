
let contenedorImg=document.querySelector('.content-img');
let principalImg=document.querySelector('.principalImg');
let cambioImg=document.querySelectorAll('.cambioImg');

let titulo=document.getElementById('tituloProducto');
let saborEscoger=document.getElementById('selectSabor');

for(let i=0;cambioImg.length>i;i++){
    cambioImg[i].addEventListener('click',(e)=>{
        let imagen=cambioImg[i].src;
        principalImg.src=imagen;
    });
}

let precioCalcular=15;
let precioCalcular2=13;
let preDg=100;
let preDp=70;
let cantidad=document.getElementById('can');
let cambio=document.querySelectorAll('.can2');
let precio=document.getElementById('precio');
let pre=document.querySelector('.span');
let predg=document.querySelector('.dg');
let predp=document.querySelector('.dp');

function calcularPrecio(nombre){

    let p;
    let c=1;
    let p2;

    if(nombre.textContent=="Desayuno Grande"){
        p=100;
        p2=100;
    }
    else if(nombre.textContent=="Desayuno Pequeño"){

        p=70;
        p2=70;
    }
    else if(nombre.textContent=="ChessCake Glass"){

        p=13;
        p2=13;

    }
    else{
        p=15;
        p2=15;
    }


    for(let i=0;cambio.length>i;i++){

        cambio[i].addEventListener('click',(e)=>{

    
            if(e.target.textContent=="+"){
                c++;
                p+=p2;
            }
            if(e.target.textContent=="-"){
                c--;
                p-=p2;
            }
            if(c==0){
                c=1;
            }
            if(p==0){
                p=p2;
            }
            cantidad.textContent=c;
            precio.textContent=`s/${p}.00`
        });
    
    }
}
calcularPrecio(titulo);



