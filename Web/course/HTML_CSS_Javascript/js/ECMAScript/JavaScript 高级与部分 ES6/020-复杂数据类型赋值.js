/* 
    由于复杂数据类型间的赋值操作，是将一个变量的内存地址赋值给另一个变量，
    所以在修改其中一个变量的值后，另一个变量的值也会随之改变。
*/
var obj1 = {
    width: 20
}
var obj2 = obj1
obj2.width = 40
console.log(obj1.width);