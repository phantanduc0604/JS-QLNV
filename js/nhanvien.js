function NhanVien(tk, hoten, email, mk, ngaylam, luongCB, chucvu, giolam) {

    //thuộc tính
    this.taiKhoan = tk;
    this.hoten = hoten;
    this.email = email;
    this.mk = mk;
    this.ngayLam = ngaylam;
    this.luong = luongCB;
    this.chucVu = chucvu;
    this.gioLam = giolam;
    this.tongLuong = 0;
    this.loaiNV = "";

    //phương thức
    this.tinhLuong = function () {
        if (this.chucVu == "Sếp") {
            return this.luong * 3;
        } else if (this.chucVu == "Trưởng phòng") {
            return this.luong * 2;
        } else if (this.chucVu == "Nhân viên") {
            return this.luong;
        }
    }

    this.xeploaiNV = function () {
        if (this.gioLam >= 0 && this.gioLam < 160) {
            return "Trung Bình";
        } else if (this.gioLam >= 160 && this.gioLam < 176) {
            return "Khá";
        } else if (this.gioLam >= 176 && this.gioLam < 192) {
            return "Giỏi";
        } else if (this.gioLam >= 192) {
            return "Xuất Sắc";
        }
    }

}
