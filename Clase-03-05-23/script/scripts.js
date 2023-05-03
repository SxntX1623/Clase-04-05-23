let increment = 0

let show = document.querySelector('.Show');
let cuerpo = document.querySelector('.container');

document.addEventListener('click', (e)=>{

if(e.target.matches('#decrese')){

increment--;
show.innerHTML = increment;
cuerpo.style.backgroundColor = `rgba(234,${245 + increment+20},237,0.9)`;
document.getElementById("img").src='${increment}';
}

















































    else if(e.target.matches('#reset')){
        increment = 0;
        show.innerHTML = increment;
        cuerpo.style.backgroundColor= `rgba(${234 + increment},200,237,0.9)`;
        document.getElementById("img").src=`./img/${increment}.jpg`
    }

    else if(e.target.matches('#increase')){
        increment++;
        show.innerHTML = increment;
        cuerpo.style.backgroundColor= `rgba(234,200,${237 + increment},0.9)`;
        document.getElementById("img").src=`./img/${increment}.jpg`
    }
})