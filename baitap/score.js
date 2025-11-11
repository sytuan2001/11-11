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
// Nhiệt độ
function chuyenDoi() {
    let doC = +document.getElementById("c").value;
    let doF = (9*doC / 5) + 32;
    document.getElementById("result").innerHTML = "Result: " + doF;
}
// Diện tích hình tròn
function tinhDienTich() {
    var r = parseFloat(document.getElementById('bankinh1').value);

    // Công thức: Diện tích = π × r²
    var dienTich = Math.PI * r * r;

    document.getElementById('ketqua1').innerHTML =
        "Bán kính: " + r + "<br>" +
        "Diện tích hình tròn: " + dienTich.toFixed(2);
}
// Chu vi hình tròn
function tinhChuVi() {
    var r = parseFloat(document.getElementById('bankinh2').value);

    // Công thức: Chu vi = 2 × π × r
    var chuVi = 2 * Math.PI * r;

    document.getElementById('ketqua2').innerHTML =
        "Bán kính: " + r + "<br>" +
        "Chu vi hình tròn: " + chuVi.toFixed(2);
}