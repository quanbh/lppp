// // ////kiểu dữ liệu 
// // /// 1 string: chuỗi : "",``,''
// // /// 2 boolean: true/false
// // /// 3 object
// // /// 4 null: rỗng
// // /// 5 number: 0-9
// // /// 6 undefinded: ko xác định (khi khai biến ko gán giá trị)

// // // let a;
// // // console.log(a);


// // ///////////biến và khai báo biến
// // // let b = 2;

// // // {
// // //     {
// // //         {
// // //             var a = 1;  
            
// // //         }
// // //         console.log(b);
// // //     }
// // // }
// // // console.log(a);
// //  /*
// //  toán tử
// //  1. toán tử gán: =
// //  2.số học: =,-,x,:
// //  3.so sánh: >,<,=,==,===,>=,=<,!=,!==
// //  4.ba ngôi:(<điều kiện>)thực hiện lệnh nếu điều kiện đúng 
// //  5.logic: &&,||,++a,--a,b++,b--


// //  */

// // // console.log(
// // //     2 > 1 && 3 > 2 && 100 > 1 && -1 < -2 && 3 > 1   /////tìm kqua sai nếu ko có thì true
// // // );

// // // console.log(
// // // 1 > 2 || 3 > 1 || 0 > 2 ); /////tìm kqua đúng nếu ko có thì false

// // /////3 ngôi

// // // console.log(
// // //     3>1?"điều kiện trả về đúng" : "điều kiện sai trả về sai");



// // // ++a đến câu lệnh này a đc tăng 1 đơn vị
// // // --a đến  câu lệnh này a đc giảm đi 1 đơn vị
// // // b++ sau dòng này b đc tăng 1 đơn vị
// // // b-- sau dòng này b đc giảm 1 đơn vị 


// // ///bài tập về tiền tố hạu tố
// // // let p = 3
// // // let q = 7
// // // let r  = 10
// // // let result = ++p * q-- + --r + p++;
// // // //           4      7     9      4
// // // let result2= result + --p * p-- + q++ + r--;
// // // //             41      4     4      6    9


// // // console.log("result", result);
// // // console.log("result2", result2);




// // // let str = "Hello";
// // // let updatedStr = str++ + "World"
// // // console.log("updatedStr", updatedStr);

// // // let numbers = [1,2,3,4,5];
// // // let i = 2
// // // console.log(numbers[i++]);

// // ///////hàm mũi tên : khai báo hàm tính tổng 2 số
// // // function sum(a,b) {
// // //      return a + b;    
// // // }
// // // const sum1 = (a,b) => {
// // //     return a + b;
// // // };
// // // const sum3 = (a,b) => a + b;

// // // /////ko tham số
// // //   const alert1 = ()=>{
// // //     alert("Đây là hàm ko tham số ")
// // //   }

// // // alert1();
// // // console.log(
// // // sum(1,2)
// // // );


// // // let arr1 = [1,2,3]
// // // // let arr2 = arr1; ////ko sử dụng toán tiwr sao chép mảng
// // // // arr2[2]= "đx thay đổi nhé, lêu lêu"
// // // // console.log(arr1);

// // // let arr2 = [...arr1]
// // // arr2[3] = "Đx thay đổi rồi nhé"
// // // console.log(arr1);

// // // let arr3 = ["hi","hello","bonjour"];
// // // let arr2 = [...arr1, ...arr2, arr3 ];
// // // console.log("arr4:",arr4);




// // let arr = [1,2,3,4,5];
// // ///yêu cầu in ra các gái trị bên trong gấp đôi mảng cũ
// // // let arr2 = arr.map(item => item*2);
// // // console.log("arr2:",arr2);


// // let arr3 = arr.filter(item => item % 2 == 0  );
// // console.log("arr3:",arr3  ); 











// ES6 Syntax (Cú pháp ES6):

// let, const: Đây là cách khai báo biến trong ES6. 
//let được sử dụng để khai báo biến có thể thay đổi giá trị sau khi đã được gán,
// trong khi const được sử dụng để khai báo biến có giá trị không thay đổi sau khi đã được gán.
// map(), filter(): Đây là các phương thức được thêm vào trong ES6 cho mảng. 
//map() được sử dụng để tạo ra một mảng mới bằng cách ánh xạ mỗi phần tử của mảng gốc qua một hàm callback, 
//trong khi filter() được sử dụng để tạo ra một mảng mới chỉ chứa các phần tử thỏa mãn một điều kiện được cung cấp.
// Spread syntax (...): Đây là cú pháp mở rộng được sử dụng để trải rộng các phần tử của một mảng hoặc các thuộc tính của một đối tượng.
// Arrow function (()=>{}): Đây là cú pháp của hàm mũi tên được giới thiệu trong ES6, giúp rút ngắn cách viết hàm và giữ ngữ cảnh của this.
// OOP (Object-Oriented Programming - Lập trình hướng đối tượng):

// Object (Đối tượng): Đối tượng cụ thể trong lập trình, có thể có thuộc tính và phương thức.
// Class (Lớp): Đây là một mẫu (template) để tạo ra các đối tượng. Trong JavaScript ES6, class được sử dụng để định nghĩa các kiểu dữ liệu mới.
// Kế thừa: Là khái niệm trong lập trình hướng đối tượng, trong đó một lớp con có thể kế thừa các thuộc tính và phương thức từ một lớp cha.
// Xử lý chuỗi: Là quá trình làm việc với dữ liệu kiểu chuỗi, bao gồm các phương thức như cắt, nối, thay thế, tách và biến đổi chuỗi.
