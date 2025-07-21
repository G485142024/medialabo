
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  for (const n of data.results.shop) {
    console.log("店名:", n.name);
    console.log("住所:", n.address);
    console.log("アクセス情報:", n.access);
    console.log("予算:", n.budget.name);
    console.log("キャッチコピー:", n.catch);
    console.log("ジャンル:", n.genre.name);
    console.log("営業日時:", n.open);
    console.log("最寄駅:", n.station_name);
    console.log("サブジャンル:", n.sub_genre.name);
  }
}


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

  const oldResult = document.querySelector('#result');
  if (oldResult) {
    oldResult.innerHTML = '';
  }

  let result = document.querySelector('#result');
  let ul = document.createElement('ul');

    

  for (const n of data.results.shop) {
    let ul = document.createElement('ul');
    ul.style.border = '2px solid #333';
    ul.style.borderRadius = '8px';
    ul.style.padding = '10px';
    ul.style.marginBottom = '15px';
    ul.style.listStyleType = 'none'; 

    let li1 = document.createElement('li');
    li1.textContent = "店名:"+ n.name;
    ul.appendChild(li1);
    let li2 = document.createElement('li');
    li2.textContent = "住所:"+ n.address
    ul.appendChild(li2);
    let li3 = document.createElement('li');
    li3.textContent = "アクセス情報:"+ n.access
    ul.appendChild(li3);
    let li4 = document.createElement('li');
    li4.textContent = "予算:"+ n.budget;
    ul.appendChild(li4);
    let li5 = document.createElement('li');
    li5.textContent = "キャッチコピー:"+ n.catch
    ul.appendChild(li5);
    let li6 = document.createElement('li');
    li6.textContent = "ジャンル:"+ n.genre;
    ul.appendChild(li6);
    let li7 = document.createElement('li');
    li7.textContent = "営業日時:"+ n.open;
    ul.appendChild(li7);
    let li8 = document.createElement('li');
    li8.textContent = "最寄駅:"+ n.station_name;
    ul.appendChild(li8);
    let li9 = document.createElement('li');
    if (n.sub_genre && n.sub_genre.name) {
  let li9 = document.createElement('li');
  li9.textContent = "サブジャンル:" + n.sub_genre.name;
  ul.appendChild(li9);
}

    result.appendChild(ul);
  }
}
// 課題6-1 のイベントハンドラ登録処理は以下に記述
document.addEventListener('DOMContentLoaded', () => {
  let b = document.querySelector('button#button');
  b.addEventListener('click', sendRequest);
});



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  const genreCode = document.querySelector('#kensaku').value.trim();

  const url = `https://www.nishita-lab.org/web-contents/jsons/hotpepper/${genreCode}.json`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(showResult)
    .catch(showError)
    .finally(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  const data = resp;
  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること