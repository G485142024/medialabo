function greeting(){
    let i = document.querySelector('input[name="shimei"]'); 
    let n = i.value;
    let p = document.querySelector('p#message');
    p.textContent='こんにちは、'+ n + 'さん' 
}
let b = document.querySelector('button#print');
b.addEventListener('click', greeting);