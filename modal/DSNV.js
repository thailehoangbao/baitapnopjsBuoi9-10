function DanhSachNV() {
    this.arrayNV = [];
    this.addNV = function (nv) {
        this.arrayNV.push(nv);
    };
    this.timViTri = function (taiKhoanNV) {
        index = -1;
        for (var i = 0; i < this.arrayNV.length; i++) {
            var nv = this.arrayNV[i];
            if (nv.taiKhoanNV == taiKhoanNV) {
                index = i;
                return index;
            };
        };
        return null;
    };

    this.deleteNV = function (taiKhoanNV) {
        var index = this.timViTri(taiKhoanNV);
        if (index !== -1) {
            this.arrayNV.splice(index, 1);
        };
    };

    this.searchLoaiNV = function (keyword) {
        var newArray = [];
        for (var i = 0; i < this.arrayNV.length; i++) {
            var nv = this.arrayNV[i];
            keyword = keyword.toLowerCase();
            var xepLoai = nv.xepLoai.toLowerCase();
            if ( xepLoai === keyword )
                newArray.push(nv);
        };
        return newArray;
    };

    this.layThongTinNV = function (maNV) { 
        var index = this.timViTri(maNV);
        if (index!== -1) {
            return this.arrayNV[index];
        };

        return null;
    };

    this.updateNV = function (nv) {
        var index = this.timViTri(nv.taiKhoanNV);
        console.log(nv)
        if (index!== -1) {
            this.arrayNV[index] = nv;
        };
    };
};