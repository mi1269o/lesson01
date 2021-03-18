

const height = process.argv[2];
//heightは高さという意
const width = process.argv[3];
//widthは横幅という意

//考え方として、まずfor文で四角形の形を作り、for文にif文を入れ込み四角形の模様を作る

for(i=1;i<=height;i++){
    let shape = "";
    //配列は[]だったが、文字を入れる宣言は""を使う
    for(j=1;j<=width;j++){
        if(i%2 === 0){
        //高さが偶数行目で、
            if(j%2 === 0){
            //横幅が偶数列目だった場合、
            shape　+= "*";
            //for文の中なので、"*"を足していくという意味で+ではなく+=をつける
            }else if(j%2 === 1){
            //横幅が奇数列目だった場合、
            shape += "-";
            }
        }   
        else{
        //そうじゃない場合（高さが奇数行目で、）


                //if(j%2 === 0){
                  //横幅が偶数列目だった場合、
                //shape +="-";
                //}else if(j%2 === 1){
                  //横幅が奇数列目だった場合、
                //shape += "*";
                //}


                //上記のif文を三項演算子を使えば1行で書くことが出来る
        j%2 === 0 ? (shape += "-"):(shape += "*");
        //条件式 ? (trueの場合に返す値):(falseの場合に返す値);
        

        
        }
    
    }

console.log(shape);

}
