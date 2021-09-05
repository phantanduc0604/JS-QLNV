function DanhSachNhanVien() {
    //thuộc tính
    this.mangNV = [];

    //Phương thức
    this.themNV = function (nv) {
        this.mangNV.push(nv);
    }
    this.timViTri = function (ma) {
        var viTri = -1;
        this.mangNV.map(function (item, index) {
            if (item.taiKhoan == ma) {
                viTri = index;
            }
        });
        return viTri;
    }

    this.xoaNhanVien = function (ma) {
        var viTri = this.timViTri(ma);
        if (viTri >= 0) {

            this.mangNV.splice(viTri, 1);
        } else {
            console.log("ko tim thay");
        }
    }

    this.capnhapNhanhVien = function (nv) {
        var Vitri = this.timViTri(nv.taiKhoan);
        if (Vitri >= 0) {
            this.mangNV[Vitri] = nv;

        } else {

            console.log("Ko tim duoc");
        }
    }

    this.timKiem = function (tukhoaTK) {
        var mangKQ = [];
        var lowerTK = tukhoaTK.trim().toLowerCase();
        this.mangNV.map(function (item, index) {
            var tenThuong = item.loaiNV.trim().toLowerCase();
            var kq = tenThuong.indexOf(lowerTK);
            if (kq >= 0) {
                mangKQ.push(item);
            }
        });

        return mangKQ;
    }
}