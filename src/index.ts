// // 請介紹兩個字串方法跟數字方法

//字串方法1 str .includes（searchString [，position ]）>>搜尋該字串(searchString)中的目標字串(position)
//有則回TRUE，否則回FALSE
const str = 'To be, or not to be, that is the question.';
console.log(str.includes('To be'));  //true

//字串方法2 str.toLowerCase() 將指定的字符串的新字符串全部轉換為小寫。
var sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toLowerCase());//he quick brown fox jumps over the lazy dog.

//數字方法1 Number.parseInt（字符串， [ 基數 ]），字符串=進位數的數值；基數=何種進位，回傳數值為該字符串的10進位

var parsed = Number.parseInt("11",8);//9
parsed=parsed*100//9*100
console.log(parsed)

//數字方法2 Number.isFinite（VALUE）//V
console.log(Number.isFinite(123));//TRUEALUE若是有限數值會出現TRUE；反之若非有限數值則會出現FALSE


// // 錢錢大於一個值，叫乾爹
let money = 40000;
let limit = 500000; // 限制值

if (money>=40000 && money<500000) {
    console.log('乾爹');
} else {
    console.log('乾哥');
}
