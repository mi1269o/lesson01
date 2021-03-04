const arga = process.argv[2];
//constで定数を設定
//argは引数という意

const argb = process.argv[3];
//process.argvはnode.jsのコマンドライン引数を取得する
//argvの後の[]の中は2以降になる。０と１はパスが格納されている

console.log(arga/argb*100 + "%");
//スラッシュは割り算で、＊は掛け算
//＋は文字列をつける時にも使える
