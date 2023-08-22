console.log("test");
// innerHTML(set-get)
// + khi gán giá trị cho nó: là in giá trị đó vào thẻ html được dom tới
// document.querySelector('id').innerHTML = "test";
// + khi không gán giá trị cho nó: là lấy nội dung từ thẻ html được dom tới
// document.querySelector('id').innerHTML;

//tìm sinh viên có điểm cao nhất.
document.querySelector("#btnSVCaoDiemNhat").onclick = function () {
  // input: arrTen, arrDiem
  //   lấy ra mảng tên
  var arrTagTen = document.querySelectorAll("#tableSinhVien td:nth-child(3)");
  console.log("arrTagTen: ", arrTagTen);
  var arrTen = [];
  //(7) ['Nguyễn Văn A', 'Đỗ Văn Nhơn', 'Vin Thị Liên', 'Đen Thị Giàu', 'Ngô Văn Mạnh', 'Văn Sỹ Lâm', 'Bùi Đình Sen']
  //   arrTen[1]
  for (var index = 0; index < arrTagTen.length; index++) {
    // lấy ra tên tại vị trí index
    var ten = arrTagTen[index].innerHTML;
    // thêm tên vừa lấy tại vị trí index phía trên vào mảng arrTen
    arrTen.push(ten);
  }

  console.log("arrTen", arrTen);

  //   lấy ra mảng điểm
  var arrTagDiem = document.querySelectorAll("#tableSinhVien td:nth-child(4)");
  var arrDiem = [];
  for (var index = 0; index < arrTagDiem.length; index++) {
    // lấy ra điểm tại vị trí index
    var diem = arrTagDiem[index].innerHTML;

    // thêm điểm vừa lấy tại vị trí index phía trên vào mảng arrDiem
    arrDiem.push(diem);
  }
  console.log("arrDiem", arrDiem);

  //   tìm ra điểm cao nhất
  //   var max = arrDiem[0];
  //   var indexMax = 0; // lấy vị trí lớn nhất trong mảng điểm để lấy được tên tại vị trí điểm lớn nhất
  //   for (var index = 0; index < arrDiem.length; index++) {
  //     if (arrDiem[index] > max) {
  //       max = arrDiem[index];
  //       indexMax = index;
  //     }
  //   }
  //   console.log("max", max);
  //   console.log("indexMax", indexMax);

  var indexMax = findIndexMax(arrDiem);
  console.log("indexMax: ", indexMax);

  // output: Đen Thị Giàu -  9.8
  var output = `Sinh viên có điểm cao nhất : ${arrTen[indexMax]} - ${arrDiem[indexMax]}`;
  document.querySelector("#svGioiNhat").innerHTML = output;
};

//tìm sinh viên có điểm thấp nhất.
document.querySelector("#btnSVThapDiemNhat").onclick = function () {
  // input: arrTen, arrDiem

  //   lấy ra mảng tên
  var arrTagTen = document.querySelectorAll("#tableSinhVien td:nth-child(3)");
  console.log("arrTagTen: ", arrTagTen);
  var arrTen = [];
  //(7) ['Nguyễn Văn A', 'Đỗ Văn Nhơn', 'Vin Thị Liên', 'Đen Thị Giàu', 'Ngô Văn Mạnh', 'Văn Sỹ Lâm', 'Bùi Đình Sen']
  //   arrTen[1]
  for (var index = 0; index < arrTagTen.length; index++) {
    // lấy ra tên tại vị trí index
    var ten = arrTagTen[index].innerHTML;

    // thêm tên vừa lấy tại vị trí index phía trên vào mảng arrTen
    arrTen.push(ten);
  }

  console.log("arrTen", arrTen);

  //   lấy ra mảng điểm
  var arrTagDiem = document.querySelectorAll("#tableSinhVien td:nth-child(4)");
  var arrDiem = [];
  for (var index = 0; index < arrTagDiem.length; index++) {
    // lấy ra điểm tại vị trí index
    var diem = arrTagDiem[index].innerHTML;

    // thêm điểm vừa lấy tại vị trí index phía trên vào mảng arrDiem
    arrDiem.push(diem);
  }
  console.log("arrDiem", arrDiem);

  //   tìm ra điểm cao nhất
  //   var max = arrDiem[0];
  //   var indexMax = 0; // lấy vị trí lớn nhất trong mảng điểm để lấy được tên tại vị trí điểm lớn nhất
  //   for (var index = 0; index < arrDiem.length; index++) {
  //     if (arrDiem[index] > max) {
  //       max = arrDiem[index];
  //       indexMax = index;
  //     }
  //   }
  //   console.log("max", max);
  //   console.log("indexMax", indexMax);

  var indexMin = findIndexMin(arrDiem);
  console.log("indexMin: ", indexMin);

  // output: Đen Thị Giàu -  9.8
  var output = `Sinh viên có điểm cao nhất : ${arrTen[indexMin]} - ${arrDiem[indexMin]}`;
  document.querySelector("#svYeuNhat").innerHTML = output;
};

//đếm số sinh viên giỏi
document.querySelector("#btnSoSVGioi").onclick = function () {
  //   lấy ra mảng điểm
  var arrTagDiem = document.querySelectorAll("#tableSinhVien td:nth-child(4)");
  var arrDiem = [];
  for (var index = 0; index < arrTagDiem.length; index++) {
    // lấy ra điểm tại vị trí index
    var diem = arrTagDiem[index].innerHTML;

    // thêm điểm vừa lấy tại vị trí index phía trên vào mảng arrDiem
    arrDiem.push(diem);
  }
  console.log("arrDiem", arrDiem);

  var count = demSoSVGioi(arrDiem, 5);

  document.querySelector("#soSVGioi").innerHTML = count;
};

// in ra dssv có dtb lớn hơn 5
document.querySelector("#btnSVDiemHon5").onclick = function () {
  var arrTagTen = document.querySelectorAll("#tableSinhVien td:nth-child(3)");
  console.log("arrTagTen: ", arrTagTen);
  var arrTen = [];
  //(7) ['Nguyễn Văn A', 'Đỗ Văn Nhơn', 'Vin Thị Liên', 'Đen Thị Giàu', 'Ngô Văn Mạnh', 'Văn Sỹ Lâm', 'Bùi Đình Sen']
  //   arrTen[1]
  for (var index = 0; index < arrTagTen.length; index++) {
    // lấy ra tên tại vị trí index
    var ten = arrTagTen[index].innerHTML;
    // thêm tên vừa lấy tại vị trí index phía trên vào mảng arrTen
    arrTen.push(ten);
  }

  console.log("arrTen", arrTen);

  //   lấy ra mảng điểm
  var arrTagDiem = document.querySelectorAll("#tableSinhVien td:nth-child(4)");
  var arrDiem = [];
  for (var index = 0; index < arrTagDiem.length; index++) {
    // lấy ra điểm tại vị trí index
    var diem = arrTagDiem[index].innerHTML;

    // thêm điểm vừa lấy tại vị trí index phía trên vào mảng arrDiem
    arrDiem.push(diem);
  }
  console.log("arrDiem", arrDiem);

  var output = "";
  for (var index = 0; index < arrDiem.length; index++) {
    if (arrDiem[index] > 5) {
      // nếu điểm lớn hơn 5, lấy ra tên tại vị trí index đó
      output += arrTen[index] + " <br>";
    }
  }

  document.querySelector("#dsDiemHon5").innerHTML = output;
};

document.querySelector("#btnSapXepTang").onclick = function () {
  //   lấy ra mảng điểm
  var arrTagDiem = document.querySelectorAll("#tableSinhVien td:nth-child(4)");
  var arrDiem = [];
  for (var index = 0; index < arrTagDiem.length; index++) {
    // lấy ra điểm tại vị trí index
    var diem = arrTagDiem[index].innerHTML;

    // thêm điểm vừa lấy tại vị trí index phía trên vào mảng arrDiem
    arrDiem.push(diem);
  }
  console.log("arrDiem", arrDiem);

  //   (7) ['6.4', '8.2', '3.4', '9.8', '2.4', '1.4', '9.4']
  //   khi so sánh chuỗi phải convert tất cả về chữ thường
  var result = arrDiem.sort(function (pt2, pt1) {
    // return về số dương thì giữ nguyên, return về số âm thì nó hoán vị
    // if (pt2 < pt1) {
    //   return -1;
    // }
    // return 1;

    return pt2 - pt1;
  });

  console.log("result", result);
};
