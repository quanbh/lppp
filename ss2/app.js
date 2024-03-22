// ///khởi tại kiểu dữ liệu 


// class Nguoi{
//     ///hàm khởi tạo thuộc tính cho class
//     constructor(name, age, gender, country, id, hobbies, job ){ 
//                       this._name=name;
//                       this._gender=gender;
//                       this._country=country;
//                       this._id=id
//                       this._hobbies=hobbies
//                       this._job=job



//     }
//     cry(){
//         alert("cry ");
//     }

//     gaming(){
//         alert("pro");
//     }
    
//      introduct(){
//         return(`My name is ${this._name} & i am a ${this._job} for 2 years    `);
//      }



// }
// // ///khai báo biến có kiểu dữ liệu là Nguoi
// // let HoangQuan = new Nguoi(
// // "Lê Hoàng Quân",5,"Nam","Việt Nam ","Chơi game","Học",
// // );
// // console.log(HoangQuan._name);
 

// // //// gọi phương thức
// // HoangQuan.cry();


// class HocSinh extends Nguoi {
//     constructor(name, age, gender, country, id, hobbies, job, school, classId, studentId  ){
//     super(name, age, gender, country, id, hobbies, job)
//     this._school=school
//     this._classId=classId
//     this._studentId=studentId
//     }
// //////kế thừa hoàn toàn mà ko thay đổi ggif (cái mình vừa gọi y hệt ng cha)



// ////kế thừa và ghi đề hoặc phát triển tiếp từ ng cha

// introduct(){
//     return super.introduct() + `And now i am learning at ${this._school}với mã lớp học là ${this._classId}`}
// }


// let HoangQuan = new HocSinh("Lê Hoàng Quân", "5","Nam", "Việt Nam ","009432", "Chơi game", "Học", "THCS", "11", "9A3");
// console.log(HoangQuan._name);
// console.log(HoangQuan.introduct());




















/*
xây dựng kiểu dữ liệu PhanSo trong đó bao gồm thuộc tính sau
-tuso
-mauso
các phương thứ phân số gồm: +, -, x, :
In ra phân số
*/



// class PhanSo{
//     constructor(tu, mau){
//         this._tu=tu;
//         this._mau=mau;
//     }
//              cong(PhanSoKhac){
//                 const tuMoi = this._tu*PhanSoKhac._mau+this._mau*PhanSoKhac._tu

//                 const mauMoi = this._mau * PhanSoKhac._mau
//                 return new PhanSo(tuMoi, mauMoi)
//              }
//              tru(PhanSoKhac){
//                 const tuMoi = this._tu*PhanSoKhac._mau-this._mau*PhanSoKhac._tu

//                 const mauMoi = this._mau * PhanSoKhac._mau
//                 return new PhanSo(tuMoi, mauMoi)
//              }
             
// }

// let PhanSo1 = new PhanSo(1,2);
// let PhanSo2 = new PhanSo(3,4);
// console.log(
// PhanSo1.tru(PhanSo2)
// )




