
const a = process.argv[2];
const b = process.argv[3];

function calculation(X){
    return X.split("").reverse().join("");
     //splitで()内のもので区切りをつけ、reverceで配列内を反転させ、joinで区切りを外す  
};
//上記の関数式では値がまだ文字列として認識されている

function num(X){
    return Number(calculation(X));    
};
//上記の関数式で値を数値として認識させる


const ans = num(a) + num(b);
//関数名(代入したい値)

console.log(ans);
