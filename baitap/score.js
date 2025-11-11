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
// chuyển đổi tiền tệ
function chuyenDoiTien() {
    var soTien = parseFloat(document.getElementById('amount').value);
    var tuDonVi = document.getElementById('fromCurrency').value;
    var sangDonVi = document.getElementById('toCurrency').value;

    var tyGia = {
        VND: 26000,
        USD: 1,
        EUR: 0.92,
        JPY: 149
    };

    var soTienUSD = soTien / tyGia[tuDonVi];
    var ketQua = soTienUSD * tyGia[sangDonVi];

    // Trả về giá trị sau khi chuyển đổi
    document.getElementById('result').innerHTML =
        "Result: " + ketQua + " " + sangDonVi;
}
// máy tính
function congMayTinh() {
    var number1 = document.getElementById('num1').value;
    var number2 = document.getElementById('num2').value;
    var result = Number(number1)+Number(number2);
    document.getElementById('result').innerHTML = result;
}
function truMayTinh() {
    var number1 = document.getElementById('num1').value;
    var number2 = document.getElementById('num2').value;
    var result = Number(number1)-Number(number2);
    document.getElementById('result').innerHTML = result;
}
function nhanMayTinh() {
    var number1 = document.getElementById('num1').value;
    var number2 = document.getElementById('num2').value;
    var result = Number(number1)*Number(number2);
    document.getElementById('result').innerHTML = result;
}
function chiaMayTinh() {
    var number1 = document.getElementById('num1').value;
    var number2 = document.getElementById('num2').value;
    var result = Number(number1)/Number(number2);
    document.getElementById('result').innerHTML = result;
}

