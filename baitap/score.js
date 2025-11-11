function tinhDiem() {
    var diemVatLy = parseFloat(document.getElementById('vatly').value);
    var diemHoaHoc = parseFloat(document.getElementById('hoahoc').value);
    var diemSinhHoc = parseFloat(document.getElementById('sinhhoc').value);

    var tong = diemVatLy + diemHoaHoc + diemSinhHoc;

    var trungBinh = tong / 3;

    document.getElementById('ketqua').innerHTML =
        "Tổng điểm: " + tong + "<br>" +
        "Điểm trung bình: " + trungBinh.toFixed(2);
}