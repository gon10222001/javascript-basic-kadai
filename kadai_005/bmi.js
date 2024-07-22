let weight;
let height;
let bmi;

// 体重（weight）、身長（height）の代入
weight = 68;
height = 1.7;

// BMIの算出
// 計算式：[体重(kg)]÷[身長(m)×身長(m)]
bmi = weight / (height * height);

// BMIをコンソールへ出力
console.log(bmi);
