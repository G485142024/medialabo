function greeting(){
    let x = document.querySelector('input[name="left"]'); 
    let y = document.querySelector('input[name="right"]'); 
    let s = Number(x.value) + Number(y.value)
    let p = document.querySelector('#answer');
    p.textContent='=' + s;
}
let b = document.querySelector('button#calc');
b.addEventListener('click', greeting);