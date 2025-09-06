let saved = sessionStorage.getItem('score');
let score = -1;

if (saved !== null) {
    score = Number(saved);
}

function True(a){
    score = score + 1;
    sessionStorage.setItem('score', score); 
    if (a === 2){
        alert("Ваш результат: " + score + " из 10");
    }else{
        pass();
    }
}

function pass() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.disabled = true; 
        button.style.opacity = '0.6'; 
        button.onclick = null; 
    });
}