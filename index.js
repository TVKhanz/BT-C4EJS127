// 1 biến:
// cú pháp:key [tên biến] = [giá trị]
// key: var let const
// var,let : có thể gán lại giá trị của biến
// const không thể gán lại giá trị cho bến
// <=> var a
// console. log(a)
// a=5
// 2. kiểu dữ liệu:
// string, number, boolean, undefined, NaN , array ,object
// 3. các phép toán:+-*/ | %++ -- ** |
//  >< , >= , <= , != ,== , === , && , || 
// BT:
let a = parseInt(prompt("nhập vào số a"))
let b = parseInt(prompt("nhập vào số b"))
let c = parseInt(prompt("nhập vào số c"))
let P = a + b + c
console.log(`chu vi của tam giác là : ${P}`)
let w = parseInt(prompt("nhập vào số cân nặng"))
let h = parseFloat(prompt("nhập vào số chiều cao(m)"))
let BMI = w /(h**2)
console.log( `chỉ sồ BMI của bạn là ${BMI}`);
// 4. câu điều kiện
if (BMI < 18) {
    console.log('bạn hơi gầy');
}else if ( BMI >=18 && BMI < 25){
    console.log("bạn cân đối");
}
else{
    console.log(" bạn béo");
}
