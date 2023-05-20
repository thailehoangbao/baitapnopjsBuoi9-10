function Validation() {
    this.kiemTraRong = function (value, errorId, mess) {
        if (value === '') {
            domID(errorId).style.display = 'block';
            domID(errorId).innerHTML = mess;
            return false;
        };

        domID(errorId).style.display = 'none';
        domID(errorId).innerHTML = '';
        return true;
    };

    this.kiemTraPattern = function (value, pattern, errorId, mess) {
        if (value.match(pattern)) {
            //true
            domID(errorId).style.display = 'none';
            domID(errorId).innerHTML = '';
            return true;
        };

        // false
        domID(errorId).style.display = 'block';
        domID(errorId).innerHTML = mess;
        return false;
    };

    this.kiemTraDoDaiKiTu = function (value, errorId, mess, min, max) {
        if ((min <= value.length) && (value.length <= max)) {
            // true
            domID(errorId).style.display = 'none';
            domID(errorId).innerHTML = '';
            return true;
        };

        //false
        domID(errorId).style.display = 'block';
        domID(errorId).innerHTML = mess;
        return false;
    };

    this.kiemTraChuoiKiTu = function (value, errorId, mess) {
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (value.match(letter)) {
            //true
            domID(errorId).style.display = 'none';
            domID(errorId).innerHTML = '';
            return true;
        };

        // false
        domID(errorId).style.display = 'block';
        domID(errorId).innerHTML = mess;
        return false;
    };

    this.kiemTraDinhDangmmddyyyy = function (value, errorId, mess) {
        var regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/\d{4}$/;
        if (regex.test(value)) {
            //true
            domID(errorId).style.display = 'none';
            domID(errorId).innerHTML = '';
            return true;
        };

        // false
        domID(errorId).style.display = 'block';
        domID(errorId).innerHTML = mess;
        return false;
    };

    this.giaTri = function (value, errorId, mess, min, max) {
        if ((min <= value) && (value <= max)) {
            //true
            domID(errorId).style.display = 'none';
            domID(errorId).innerHTML = '';
            return true;
        };

        // false
        domID(errorId).style.display = 'block';
        domID(errorId).innerHTML = mess;
        return false;
    };

    this.kiemTraChucVu = function (idSelect, errorId, mess) {
        
        if (domID(idSelect).selectedIndex !== 0) {
            //true
            domID(errorId).style.display = 'none';
            domID(errorId).innerHTML = '';
            return true;
        };

        // false
        domID(errorId).style.display = 'block';
        domID(errorId).innerHTML = mess;
        return false;
    };
};