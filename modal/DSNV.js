function DanhSachNV() {
    this.arrayNV = [];
    this.addNV = function (nv) {
        this.arrayNV.push(nv);
    };
    this.timViTri = function (taiKhoanNV) { 
        index = -1;
        for (var i = 0; i < this.arrayNV.length; i++) {
            var nv = this.arrayNV[i];
            if ( nv.taiKhoanNV == taiKhoanNV ) {
                index = i;
                return index;
            };
        };
        return null;
    };
    this.deleteNV = function (taiKhoanNV) {
        var index = this.timViTri(taiKhoanNV);
        for (var i = 0; i < this.arrayNV.length; i++) {
            if ( index == i ) {
                this.arrayNV.splice(index,1);
            };
        };
    };
};