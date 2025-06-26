// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let seikai = 0;

let b = document.querySelector('button#button');
b.addEventListener('click', hantei);


function hantei() {
  let n = document.querySelector('input#text');
  let m = Number(n.value);

  kaisu++;
  console.log(`${kaisu}回目の予想: ${m}`);

  document.querySelector('span#kaisu').textContent = kaisu;
  document.querySelector('span#answer').textContent = m;

  let p = document.querySelector('#result');

  if (kaisu >= 4 || seikai >= 1) {
    p.textContent=`答えは ${kotae} でした．すでにゲームは終わっています`;
  }
  else if (m === kotae) {
    p.textContent="正解です．おめでとう!";
    seikai++
    } else {
      if (kaisu === 3) {
      p.textContent=`まちがい．残念でした答えは ${kotae} です．`;
    } else if (kaisu < 3) {
      if (m < kotae) {
      p.textContent="まちがい．答えはもっと大きいですよ";
    } else {
      p.textContent="まちがい．答えはもっと小さいですよ";
      }
    }
  }
}