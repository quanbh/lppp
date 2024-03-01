//// 9
//bài 10

string = " High knowledge, high return"
array = string.split(" ")
array = [x.lower()  in array  != ""]
print(array)

////bài 11

class people {
   constructor(name,age,address){
            this._name=name
            this._age=age
            this._address=address
   }
   setName(nameMoi) {
      this._name=nameMoi
   }
   setAge(ageMoi){
      this._ages=ageMoi;
   }
   setAddress(addresssMoi){
      this._addresss=addresssMoi;
   }
   getName(){
         return this._name
   }
   getAge(){
      return this._age
   }
   getAddress(){
      return this._address
   } 
   
}
introduct(){
       return super.introduct() + 
   }









 ///bài 12
    class shape {
      constructor(dai,rong,dientichHCN,chuviHCN){
      supper(id)
             this._dai=dai
             this._rong=rong
             this._dientichHCN=dientichHCN
             this._chuviHCN=chuviHCN

      }
      setDai(a) {
            this._dai=daiMoi
      }
      setRong(b){
         this._rong=rongMoi
      }
      setDientichHCN(c) {
         this._dientichHCN=dientichMoi
      }
      setChuviHCN(d){
      this._chuviHCN=chuviMoi
      }

      dientich(){
            let a = this._dai * this._rong
      }
      chuvi(){

      }
    }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    ///bài 13 
 
 





















//bài 14
// class HocSinh {
//    constructor(ten, maHocSinh,khoi ,dia_chi, muc_uu_tien) {
//        this._ten = ten;
//        this._maHocSinh = maHocSinh;
//        this._dia_chi=dia_chi
//        this._khoi=khoi
//        this._muc_uu_tien=muc_uu_tien
//    }

//    hienThiThongTin() {
//        console.log("Tên học sinh: " + this._ten);
//        console.log("Mã học sinh: " + this._maHocSinh);
//        console.log("Đỉa chỉ: " + this._diemTb);
//        console.log("Khối thi:"+this._khoi)
//        console.log("Mức ưu tiên: " + this.khoiThi());
//    }

//    khoiThi() {
//        if (this._diemTb >= 8.0 && this._diemTb <= 10) {
//            return "Khối C";
//        } else if (this._diemTb >= 6.5 && this._diemTb <= 7.9) {
//            return "Khối ";
//        } else if (this._diemTb >= 5.0 && this._diemTb <= 6.4) {
//            return "Trung bình";
//        } else {
//            return "Kém";
//        }
//    }
// }
// let hocSinh1 = new HocSinh("Lê Hoàng Quân", "ko có mã học sinh", 6.5);
// hocSinh1.hienThiThongTin();
