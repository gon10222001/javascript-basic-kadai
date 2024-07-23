let num;

// numへ値を代入
num = 2;

// 判定処理
if (num % 3 === 0 & num % 5 !== 0) {
  console.log('3の倍数です');
}
else if (num %3 !== 0 & num % 5 === 0) {
  console.log('5の倍数です');
}
else if (num % 3 === 0 & num % 5 === 0) {
  console.log('3と5の倍数です');
}
else {
  console.log(num);
}
