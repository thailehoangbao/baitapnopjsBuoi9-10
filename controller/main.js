
var dsnv = new DanhSachNV();
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
    var nhanVien = new NhanVien(taiKhoanNV,tenNV,email,password,day,luong,level,timeWork);
    nhanVien.tinhSalary();
    nhanVien.xepLoai();
    return nhanVien;
};

domID('btnThemNV').onclick = function (e) {
    var nv = layThongTinNV();
    dsnv.addNV(nv); 
    render(dsnv.arrayNV);
    setLocalStorageData();
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