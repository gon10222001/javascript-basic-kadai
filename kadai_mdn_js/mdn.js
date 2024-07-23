let today
let year
let month
let day

// システム日付取得
today = new Date();

// システム日付を年月日に分解
year  = today.getFullYear();
month = today.getMonth() + 1;
day   = today.getDate();

// 編集・出力
console.log(String(year) + '年' + String(month) + '月' + String(day) + '日'); 