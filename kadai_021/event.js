// ボタンのHTML要素を取得（id="btn"）
const btn01 = document.getElementById('btn');

// テキストのHTML要素を取得（id="text"）
const text01 = document.getElementById('text');

// ボタンのclickイベント
btn01.addEventListener('click', () => {
  // 2秒後にテキストを変更
  setTimeout(() => {
    text01.textContent = 'ボタンをクリックしました';
  }, 2000);
});
