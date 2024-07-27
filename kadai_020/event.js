// ボタンのHTML要素を取得（id="btn"）
const btn01 = document.getElementById('btn');

// ボタンのclickイベント
btn01.addEventListener('click', () => {
  const text01 = document.getElementById('text');
  text01.textContent = 'ボタンをクリックしました';
})