

const arga = process.argv[2];

switch(arga){
//switch文は最初の()の中と一致するラベルのところに飛んでいく
case '2':
case '3':
case '4':
//caseのことをラベル名という
//caseが複数ある時は、ラベルを続けて並べて書く
//ラベルの最後は;ではなく:を書く
//引数は文字として認識される(?)ので””で囲む
    console.log("春");
    break;

case '5':
case '6':
case '7':
    console.log("夏");
    break;

case '8':
case '9':
case '10':
    console.log("秋");
    break;

case '11':
case '12':
case '1':
    console.log("冬");
    break;

default:
    console.log("1-12の数字を入れてください");
    break;
};

