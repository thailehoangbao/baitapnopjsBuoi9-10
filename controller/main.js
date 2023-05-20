
var dsnv = new DanhSachNV();
var validation = new Validation();
getLocalStorageData();
function domID(id) {
    return document.getElementById(id);
};

function layThongTinNV () {
    var taiKhoanNV = domID('tknv').value;
    var tenNV = domID('name').value;
    var email = domID('email').value;
    var password = domID('password').value;
    var day = domID('datepicker').value;
    var luong = domID('luongCB').value;
    var level = domID('chucvu').value;
    var timeWork = domID('gioLam').value;

    var isValid = true;
    //Test Tài Khoản
    isValid &= validation.kiemTraRong(taiKhoanNV,"tbTKNV","(*)Vui lòng nhập trường này!")
    && validation.kiemTraPattern(taiKhoanNV,/^[0-9]+$/,"tbTKNV","(*)Trường này phải là kí số")
    && validation.kiemTraDoDaiKiTu(taiKhoanNV,"tbTKNV","(*)Vui lòng nhập từ 4-6 kí số!",4,6);
    //Test Họ và Tên
    isValid &= validation.kiemTraRong(tenNV,"tbTen","(*)Vui lòng nhập trường này!")
    && validation.kiemTraChuoiKiTu(tenNV,"tbTen","(*)Trường này phải là kí tự chữ!")
    //Test Email 
    isValid &= validation.kiemTraRong(email,"tbEmail","(*)Vui lòng nhập trường này!")
    && validation.kiemTraPattern(email,/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"tbEmail","(*)Trường này phải là Email");
    //Test Mật Khẩu
    isValid &= validation.kiemTraRong(password,"tbMatKhau","(*)Vui lòng nhập trường này!")
    && validation.kiemTraDoDaiKiTu(password,"tbMatKhau","(*)Vui lòng nhập từ 6-10 kí tự!",6,10)
    && validation.kiemTraPattern(password,/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,"tbMatKhau","(*)Vui lòng nhập đúng định dạng password");
    //Test Day
    isValid &= validation.kiemTraRong(day,"tbNgay","(*)Vui lòng nhập trường này!")
    && validation.kiemTraDinhDangmmddyyyy(day,"tbNgay","(*)Bạn nhập sai định dạng mm/dd/yyyy!")
    //Test Salary
    isValid &= validation.kiemTraRong(luong,"tbLuongCB","(*)Vui lòng nhập trường này!")
    && validation.giaTri(luong,"tbLuongCB","(*)Vui lòng nhập đúng giá trị lương cơ bản!",1000000,20000000);
    //Test Giờ làm
    isValid &= validation.kiemTraRong(timeWork,"tbGiolam","(*)Vui lòng nhập trường này!")
    && validation.giaTri(timeWork,"tbGiolam","(*)Vui lòng nhập đúng giá trị giờ làm (80-200h)!",80,200);;
    //Test Chức vụ
    isValid &= validation.kiemTraChucVu("chucvu","tbChucVu","(*)Vui lòng chọn chức vụ");

    if (!isValid) {
        return null;
    };

    var nhanVien = new NhanVien(taiKhoanNV,tenNV,email,password,day,luong,level,timeWork);
    nhanVien.tinhSalary();
    nhanVien.xepLoai();
    return nhanVien;
};

domID('btnThemNV').onclick = function (e) {
    e.preventDefault();

    var nv = layThongTinNV();
    if (nv) {
        dsnv.addNV(nv); 
        render(dsnv.arrayNV);
        setLocalStorageData();
    };
};


function render(data) {
    if ( data.length !== 0 ) {
        content = '';
        for (var i = 0; i < data.length; i++) {
            var nhanvien = data[i];
            content += `
            <tr>
                <td>${nhanvien.taiKhoanNV}</td>
                <td>${nhanvien.tenNV}</td>
                <td>${nhanvien.email}</td>
                <td>${nhanvien.day}</td>
                <td>${nhanvien.level}</td>
                <td>${nhanvien.sumSalary}</td>
                <td>${nhanvien.xepLoai}</td>
                <td><button class="btn btn-outline-danger" onclick="deleteNhanVien('${nhanvien.taiKhoanNV}')">Delete</button></td>
            </tr>
            `;
            domID('tableDanhSach').innerHTML = content;
        };
    } else {
        domID('tableDanhSach').innerHTML = '';
    };
};

function setLocalStorageData() {
    localStorage.setItem('DSNV',JSON.stringify(dsnv.arrayNV));
};

function getLocalStorageData() {
    if (localStorage.getItem('DSNV')) {
        var string = localStorage.getItem('DSNV');
        dsnv.arrayNV = JSON.parse(string);
        render(dsnv.arrayNV);
    };
};

function deleteNhanVien(taiKhoanNV) { 
    dsnv.deleteNV(taiKhoanNV);
    render(dsnv.arrayNV);
    setLocalStorageData();
};