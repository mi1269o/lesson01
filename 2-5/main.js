

const arga = process.argv[2];

let x;
x = Math.floor(arga/100);
//Math.floorは小数点以下切り捨ての意
//100円で割る

let a;
a = arga%100;
//10円で割ったあまり

let y;
y = Math.floor(a/10);
//100で割ったあまりを10円で割る

let z;
z = Math.floor(a%10);
//100で割ったあまりを、さらに10円で割ったあまりを、全て1円で払う


console.log("100円玉"+x+"枚,"+"10円玉"+y+"枚,"+"1円玉"+z+"枚");
//それぞれの答えを並べて出す