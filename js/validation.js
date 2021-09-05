function Validation() {
    //Phương thức
    //kiểm tra ô nhập liệu có bỏ trống hay ko
    this.checkEmpty = function (inputval, spanID, message) {
        //trim() xoá khoảng trắng trước và sau chuỗi
        if (inputval.trim() == "") {
            //khong hop le
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "inline-block";
            return false;
        } else {
            //hop le
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
    }

    //kiểm tra mã trùng
    this.checkID = function (inputval, spanID, message, mang) {
        //kiểm tra mã đã tồn tại trong mảng ?
        var isExist = false;
        //some -> return gái trị true/false dựa vào biểu thức so sánh
        isExist = mang.some(function (item) {
            return item.taiKhoan === inputval.trim()
        });
        if (isExist) {
            //mã bị trùng
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "inline-block";
            return false;
        } else {
            //hop le
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
    }

    //Kiểm tra tên
    this.checkName = function (inputval, spanID, message, mang) {
        var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$");

        if (pattern.test(inputval)) {
            //hop le
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            //KO hop le
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "inline-block";
            return false;
        }
    }
    
    //Kiểm tra Email
    this.checkEmail = function (inputval, spanID, message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputval.match(pattern)) {
            //hop le
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            //KO hop le
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "inline-block";
            return false;
        }
    }

    //Kiểm tra chức vụ
    this.checkDropdown = function (selID, spanID, message) {
        var optIndex = document.getElementById(selID).selectedIndex;
        console.log(optIndex);
        if (optIndex != 0) {
            //hop le
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            //KO hop le
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "inline-block";
            return false;
        }
    }

    //Kiểm tra mk
    this.checkpass = function (inputval, spanID, message) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,10}$/;
        if (inputval.match(pattern)) {
            //hop le
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            //KO hop le
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "inline-block";
            return false;
        }
    }

    this.checkDay = function (inputval, spanID, message) {
        var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        if (inputval.match(pattern)) {
            //hop le
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            //KO hop le
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "inline-block";
            return false;
        }
    }

    this.checkNum = function (numBegin, numEnd, inputval, spanID, message) {
        var pattern = /^[0-9]+$/;
        if (inputval.match(pattern) && inputval >= numBegin && inputval <= numEnd) {
            //hop le
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            //KO hop le
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "inline-block";
            return false;
        }
    }

}