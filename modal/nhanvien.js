function NhanVien(taiKhoanNV,tenNV,email,matKhau,day,luong,level,timeWork) {
    this.taiKhoanNV = taiKhoanNV;
    this.tenNV = tenNV;
    this.email = email;
    this.matKhau = matKhau;
    this.day = day;
    this.luong = luong;
    this.level = level ;
    this.timeWork = timeWork;
    this.sumSalary = 0;
    this.xepLoai  = '';

    this.tinhSalary = function () {
        if (this.level == 'Sếp') {
            return this.sumSalary = Number(this.luong) * 3;
        } else if (this.level == 'Trưởng phòng') {
            return this.sumSalary = Number(this.luong) * 2;
        } else if (this.level == 'Nhân viên') {
            return this.sumSalary = Number(this.luong) * 1;
        };
    };
    this.xepLoai = function () {
        if ( Number(this.timeWork) >= 192 ) {
            return this.xepLoai = 'Nhân Viên Xuất Sắc';
        } else if ( (Number(this.timeWork) >= 176) & (Number(this.timeWork) < 192) ) {
            return this.xepLoai = 'Nhân Viên Giỏi';
        } else if ( (Number(this.timeWork) >= 160) & (Number(this.timeWork) < 176) ) {
            return this.xepLoai = 'Nhân Viên Khá';
        } else {
            return this.xepLoai = 'Nhân Viên Trung Bình';
        };
    };
};