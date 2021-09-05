//Biến toàn cục
//Tạo thể hiện của lớp DanhSachSinhVien

var dsnv = new DanhSachNhanVien();
var validation = new Validation();

//Hàm rút gọn cú pháp của document.getElementById
function getELE(id) {
    //id :Kiểu string
    return document.getElementById(id);
}

function resetForm() {
    getELE("formQLNV").reset();
    getELE("tknv").disabled = false;
}

function resetSpan(spanID){
    getELE(spanID).innerHTML = "";
    getELE(spanID).style.display = "none";
}
//localStotage: nơi lưu trữ dữ liệu ở trong  trình duyệt web 
//Lưu mảng SV xuống localStotage

function setLocalStotage() {
    //localStorage: biến đối tượng có sẵn của js
    //localStorage chỉ lưu kiểu dữ liệu Json
    //chuyển dssv.mangSV từ kiểu mảng sang kiểu Json
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}

// Lấy data từ localStorage
function getLocalStotage() {
    //getItem sẽ lấy dữ liệu lên từ Json
    //parse chuyển từ Json về kiểu mảng
    if (localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThiTable(dsnv.mangNV);
    }

}


function hienThiTable(mang) {
    //content sẽ chứa nhiều thẻ tr ->  mỗi thẻ tr là 1 sv
    var content = "";
    //duyệt mảng để lấy thông tin từng sv trong mảng
    //map là 1 hàm callback function
    //item: là 1 phần tử tỏng mảng
    //index : vị trị của phần tử trong mảng
    mang.map(function (item, index) {
        //item đại diện cho 1 SV
        //template literal / string template
        content += `<tr>
            <td>${item.taiKhoan}</td>
            <td>${item.hoten}</td>
            <td>${item.email}</td>
            <td>${item.ngayLam}</td>
            <td>${item.chucVu}</td>
            <td>${item.tongLuong}</td>
            <td>${item.loaiNV}</td>
            <td class="row" style="border: none">
                <button class="btn btn-danger" onclick="xoaNV('${item.taiKhoan}')">Xoá</button>
                <button class="btn btn-info" onclick="xemChiTiet('${item.taiKhoan}')" data-target="#myModal" data-toggle="modal">Xem</button>
            </td>
            
        </tr>`;
    });
    getELE("tableDanhSach").innerHTML = content;


}

getLocalStotage();

function resetInput(){
    
    resetSpan("tbTKNV");
    resetSpan("tbTen");
    resetSpan("tbEmail");
    resetSpan("tbMatKhau");
    resetSpan("tbNgay");
    resetSpan("tbLuongCB");
    resetSpan("tbChucVu");
    resetSpan("tbGiolam");

}

function themNV() {
    var tk = getELE("tknv").value;
    var hoten = getELE("name").value;
    var email = getELE("email").value;
    var mk = getELE("password").value;
    var ngaylam = getELE("datepicker").value;
    var luongCB = getELE("luongCB").value;
    var chucvu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

    var isValid = true;
    //Kiểm tra Tài khoản
    isValid = validation.checkEmpty(tk, "tbTKNV", "Mã NV ko đc để trống") && validation.checkID(tk, "tbTKNV", "Mã SV bị trùng", dsnv.mangNV);
    //Kiểm tra tên
    isValid &= validation.checkEmpty(hoten, "tbTen", "Tên NV ko đc để trống") && validation.checkName(hoten, "tbTen", "Tên NV ko hợp lệ");

    //Kiểm tra email
    isValid &= validation.checkEmpty(email, "tbEmail", "Enail không đc để trống") && validation.checkEmail(email, "tbEmail", "Enail không đúng định dạng");

    //Kiểm tra pass
    isValid &= validation.checkEmpty(mk, "tbMatKhau", "Mật khẩu không được để trống") && validation.checkpass(mk, "tbMatKhau", "Mật khẩu không đúng định dạng");

    //Kiểm tra ngày
    isValid &= validation.checkEmpty(ngaylam, "tbNgay", "Ngày không được để trống") && validation.checkDay(ngaylam, "tbNgay", "Ngày không đúng định dạng");

    //Kiểm tra lương
    isValid &= validation.checkEmpty(luongCB, "tbLuongCB", "Lưong không được để trống") && validation.checkNum(1000000, 20000000, luongCB, "tbLuongCB", "Lưong không hợp lệ");

    //Kiểm tra Chức Vụ
    isValid &= validation.checkDropdown("chucvu", "tbChucVu", "Chọn Chức Vụ");

    //Kiểm tra giờ làm
    isValid &= validation.checkEmpty(gioLam, "tbGiolam", "Giờ làm không được để trống") && validation.checkNum(80, 200, gioLam, "tbGiolam", "Giờ làm không hợp lệ");



    if (isValid) {


        var nv = new NhanVien(tk, hoten, email, mk, ngaylam, luongCB, chucvu, gioLam);

        nv.tongLuong = nv.tinhLuong();
        nv.loaiNV = nv.xeploaiNV();

        console.table(nv);

        dsnv.themNV(nv);
        

        setLocalStotage();

        hienThiTable(dsnv.mangNV);

        resetForm();
    }
}

function xoaNV(ma) {
    dsnv.xoaNhanVien(ma);
    hienThiTable(dsnv.mangNV);
    setLocalStotage();
}

function xemChiTiet(ma) {
    var viTri = dsnv.timViTri(ma);
    var nv = dsnv.mangNV[viTri];
    getELE("tknv").disabled = true;
    resetInput();

    getELE("tknv").value = nv.taiKhoan;
    getELE("name").value = nv.hoten;
    getELE("email").value = nv.email;
    getELE("password").value = nv.mk;
    getELE("datepicker").value = nv.ngayLam;
    getELE("luongCB").value = nv.luong;
    getELE("chucvu").value = nv.chucVu;
    getELE("gioLam").value = nv.gioLam;
}

function capnhapNV() {
    var tk = getELE("tknv").value;
    var hoten = getELE("name").value;
    var email = getELE("email").value;
    var mk = getELE("password").value;
    var ngaylam = getELE("datepicker").value;
    var luongCB = getELE("luongCB").value;
    var chucvu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

    var nv = new NhanVien(tk, hoten, email, mk, ngaylam, luongCB, chucvu, gioLam);

    nv.tongLuong = nv.tinhLuong();
    nv.loaiNV = nv.xeploaiNV();

    dsnv.capnhapNhanhVien(nv);
    hienThiTable(dsnv.mangNV);

    setLocalStotage();

    resetForm();
}

function timkiemtheoLoai() {
    var tukhoaTK = getELE("searchName").value;
    hienThiTable(dsnv.timKiem(tukhoaTK));

}

getELE("searchName").addEventListener("keyup", timkiemtheoLoai);
getELE("btnThem").addEventListener("click",resetForm);
getELE("btnThem").addEventListener("click",resetInput);