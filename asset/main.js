"use strict";

window.onload = function () {
    const popupCard = document.querySelector(".popup-card");

    popupCard.classList.add("active")
        

    const audio = document.getElementById("audio");
    
    const btnTidak = document.querySelector(".tidak");
    btnTidak.addEventListener("click", ()=>{
        popupCard.classList.remove("active");
    })

    const btnYa = document.querySelector(".ya");
    btnYa.addEventListener("click", ()=>{
        popupCard.classList.remove("active");
        audio.play();
    })
}




function createImg() {
    const section = document.querySelector("section");
    let createElement = document.createElement("img");
    let size = Math.random() * 60;

    createElement.setAttribute("src","asset/1.png");
    createElement.style.width = 10 + size +'px';
    createElement.style.height = 10 + size +'px';
    createElement.style.left = Math.random() * window.innerWidth +'px';
    createElement.style.animationDuration = Math.random() * 10 + 4 + 's';

    section.appendChild(createElement);

    setTimeout(()=>{
        createElement.remove();
    },4000)
}

setInterval(() => {
    createImg();
}, 200);


function sapa() {
    const h1 = document.querySelector("h1");
    const img = document.getElementsByName('img');
    const root= document.querySelector(':root');
    let jam = new Date().getHours();

    if(jam > 18 ) {
        h1.innerHTML = `Good Night <img src="asset/2.png" class="love">`;
        root.style.setProperty('--primary-color',' rgba(255,255,255,.9');
        root.style.setProperty('--secondary-color',' rgb(5, 5, 54)');
        
    }
    else if(jam > 11) {
        h1.innerHTML = `Good Afternoon <img src="asset/2.png" class="love">`;
        root.style.setProperty('--primary-color',' rgb(255, 174, 0)');
        root.style.setProperty('--secondary-color','rgba(255,255,255,.9');      
    }
    else {
        h1.innerHTML = `Good Morning <img src="asset/2.png" class="love">`;
        root.style.setProperty('--primary-color','rgb(0, 89, 206)');
        root.style.setProperty('--secondary-color','rgba(255,255,255,.9');
    }
}

sapa();


function jam() {
    let jam = new Date().getHours();
    let menit = new Date().getMinutes();
    let detik = new Date().getSeconds();

    const dataJam = document.querySelector("#jam");
    const dataMenit = document.querySelector("#menit");
    const dataDetik = document.querySelector("#detik");

    dataJam.innerHTML = jam;
    dataMenit.innerHTML = menit;
    dataDetik.innerHTML = detik;
}

setInterval(()=>{
    jam();
},1000)