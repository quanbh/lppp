// // class là đối tượng đại diện 

// // class là tạo kiểu dữ liệu




class PhanSo {
    constructor(tu, mau) {
        this._tu = tu;
        this._mau = mau;
    }

    // phương thức set
    setTu(tuMoi) {
        this._tu = tuMoi;
    }

    setMau(mauMoi) {
        this._mau = mauMoi;
    }

    // phương thức geat
    getTu() {
        return this._tu;
    }

    getMau() {
        return this._mau;
    }

    cong(ps) {
        let tu = this._tu * ps._mau + this._mau * ps._tu;
        let mau = this._mau * ps._mau;
        return new PhanSo(tu, mau);
    }

    tru(ps) {
        let tu = this._tu * ps._mau - this._mau * ps._tu;
        let mau = this._mau * ps._mau;
        return new PhanSo(tu, mau);
    }

    nhan(ps) {
        let tu = this._tu * ps._tu;
        let mau = this._mau * ps._mau;
        return new PhanSo(tu, mau);
    }

    chia(ps) {
        let tu = this._tu * ps._mau;
        let mau = this._mau * ps._tu;
        return new PhanSo(tu, mau);
    }

    // rút gon phân số
    rutGon(){
        let a = this._tu
        let b = this._mau
        while(b!==0){
            let temp = b;
            b = a%b;
            a = temp;
        }
        let ucln = a;
        return new PhanSo(this._tu/ucln, this._mau/ucln)
    }
    hienThiPhanSo(){
        return this._tu + "/" + this._mau
    }
}

let PhanSo1 = new PhanSo(1, 2);
let PhanSo2 = new PhanSo(3, 4);
let tong = PhanSo1.cong(PhanSo2);
console.log(tong.rutGon().hienThiPhanSo());
let hieu = PhanSo1.tru(PhanSo2);
console.log(hieu.rutGon().hienThiPhanSo());
let tich = PhanSo1.nhan(PhanSo2);
console.log(tich.rutGon().hienThiPhanSo());
let thuong = PhanSo1.chia(PhanSo2);
console.log(thuong.rutGon().hienThiPhanSo());






// //thực hành OOP



// /*
// 1.xây dựng hcn gồm thuộc tính: width.\, height
// -xây dựng phương thức tính chu vi diện tích hcn và hiển thị thông tin hcn
// 2 xây dựng lớp HocSinh gồm thuộc tính: ten, maHocSinh, diemTb
// -xây dựng phương thức hiển thị thông tin học sinh
// -xây dựng phương thức xếp loại học lực học sinh cho biết:
// +Giỏi: 10 - 8,0
// +Khá:  7,9 - 6,5
// +Trung Bình: 6,4 - 5,0
// +Kém: nhỏ hơn 5,0

// */

// // bài 1

// class HinhChuNhat {
//     constructor(width, height) {
//         this._width = width;
//         this._height = height;
//     }
//     tinhChuVi() {
//         return 2 * (this._width + this._height);
//     }
//     tinhDienTich() {
//         return this._width * this._height;
//     }
//     hienThiThongTin() {
//         console.log("Chiều dài là : " + this._width);
//         console.log("Chiều rộng là : " + this._height);
//         console.log("Chu vi là : " + this.tinhChuVi());
//         console.log("Diện tích là : " + this.tinhDienTich());
//     }
// }
// let hcn = new HinhChuNhat(5, 3); 
// hcn.hienThiThongTin(); 



// ////bài 2 xây dựng lớp HocSinh gồm thuộc tính: ten, maHocSinh, diemTb
// class HocSinh {
//     constructor(ten, maHocSinh, diemTb) {
//         this._ten = ten;
//         this._maHocSinh = maHocSinh;
//         this._diemTb = diemTb;
//     }

//     hienThiThongTin() {
//         console.log("Tên học sinh: " + this._ten);
//         console.log("Mã học sinh: " + this._maHocSinh);
//         console.log("Điểm trung bình: " + this._diemTb);
//         console.log("Xếp loại học lực: " + this.xepLoaiHocLuc());
//     }

//     xepLoaiHocLuc() {
//         if (this._diemTb >= 8.0 && this._diemTb <= 10) {
//             return "Giỏi";
//         } else if (this._diemTb >= 6.5 && this._diemTb <= 7.9) {
//             return "Khá";
//         } else if (this._diemTb >= 5.0 && this._diemTb <= 6.4) {
//             return "Trung bình";
//         } else {
//             return "Kém";
//         }
//     }
// }
// let hocSinh1 = new HocSinh("Lê Hoàng Quân", "ko có mã học sinh", 6.5);
// hocSinh1.hienThiThongTin();

// /*
// 3 xậy dựng class quản lý học sinh biết 
// -xây dựng phương thức: thêm học sinh vào danh sách
// -xây dựng phương thức: cập nhật thông tin học sinh
// -xây dựng phương thức: hiển thị danh sách học sinh 
// -xây dựng phương thức: xóa học sinh trong danh sách biết maHocSinh cần xóa
// */








