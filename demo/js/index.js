var hoTen1 = "Nam";
var hoTen2 = "Thanh";

var array = ["Nam", "Thanh", "Duy", "Tung", "Tien"];
// 0       1       2       3
// var array2 = new Array()

// CRUD: create - read - update - delete

// chỉ số(index) trong js bắt từ 0;'
// C: create - tạo mảng
var arrayNumber = [3, 3, 4, 5, 6, 7];

// R: read - đọc mảng

console.log(array[1]);

// U : update
array[1] = "ABC";
console.log(array);

// arrayName.length : lấy được độ dài của mảng
var doDaiMang = array.length;
console.log("doDaiMang: ", doDaiMang);

// độ dài của mảng luôn lớn hơn index cuối cùng cuả mảng 1 số do index của mảng bắt đầu từ 0
// for (var i = 0; i <= array.length - 1; i++) {
//     console.log(array[i]);
//   }

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// push: thêm phần tử vào cuối mảng, có thể thêm 1 lúc nhiều phần tử
// unshift : thêm phần tử vào đầu mảng, có thể thêm 1 lúc nhiều phần tử
array.push("test");
console.log("array sau khi thêm phần tử mới vào: ", array);
var arrUnshift = array.unshift("a", "b");
console.log("arrUnshift: ", arrUnshift);
console.log("array sau khi thêm phần tử mới vào đầu mảng : ", array);

// D - delete
// pop: lấy ra phần tử cuối cùng của mảng
// shift : llấy ra phần tử đầu tiên của mảng
var newArray = array.pop();
console.log("newArray: ", newArray);
console.log("array sau khi pop: ", array);

var arrShift = array.shift();
console.log("arrShift: ", arrShift);
console.log("array sau khi shift: ", array);

// indexOf: trả về vị trí đầu tiên tìm thấy phần tử. nếu không tìm được sẽ trả về -1
var indexOfName = array.indexOf("Duy");
console.log("indexOfName: ", indexOfName);

var array2 = ["red", "green", "yellow", "green"];
console.log("array2: ", array2);
console.log("array2: indexOf green ", array2.indexOf("green"));
console.log("array2: indexOf green from 2 ", array2.indexOf("green", 2));

// slice vs splice
// slice: cắt 1 đoạn trong mảng và trả về 1 mảng mới
var arrSlice = array2.slice(2);
console.log("arrSlice: ", arrSlice);
console.log("array2 sau khi slice: ", array2);

// splice: thay đổi nội dung của mảng, thêm hoặc xóa các phần tử trong mảng và trả về các tử đã bị xóa
var arrSplice = array2.splice(1, 1);
console.log("arrSplice: ", arrSplice);
console.log("array2 sau khi splice: ", array2);

//------------------------------------------------------
// arrayNumber2: là biến global sử dụng cho nhiều bài tập
var arrayNumber2 = [10, 21, 44, 52, 32, 11];

document.querySelector(".array").innerHTML = arrayNumber2;

function handleAdd() {
  var number = +document.querySelector("#number").value;
  arrayNumber2.push(number);

  //   var tempArr = arrayNumber2;

  document.querySelector(".array").innerHTML = arrayNumber2;

  //   document.querySelector("#newArr").innerHTML = tempArr;
}

// Nhập vào 1 số cần xóa trong mảng. nếu số đó không có trong mảng thì in ra số không tìm thấy
// cách 1
// function handleDelete() {
//   // input : số người dùng nhập
//   var number = +document.querySelector("#numberDel").value;

//   // output: index của số cần xóa
//   var index = -1;

//   //   tìm, xóa, lấy ra thay đổi,...phải duyệt mảng(chạy qua từng phần tử của mảng để kiểm tra )
//   for (var i = 0; i < arrayNumber2.length; i++) {
//     if (arrayNumber2[i] === number) {
//       index = i;
//       break;
//     }
//   }

//   if (index !== -1) {
//     // xóa dữ liệu của mảng tại vị trí tìm thấy
//     arrayNumber2.splice(index, 1);

//     // cập nhật lại giao diện
//     document.querySelector(".array").innerHTML = arrayNumber2;
//   } else {
//     alert("Không tìm thấy cần xóa trong mảng !");
//   }
// }

// cách 2:
// function handleDelete() {
//   // input : số người dùng nhập
//   var number = +document.querySelector("#numberDel").value;

//   var flag = false;
//   //   tìm, xóa, lấy ra thay đổi,...phải duyệt mảng(chạy qua từng phần tử của mảng để kiểm tra )
//   for (var i = 0; i < arrayNumber2.length; i++) {
//     if (arrayNumber2[i] === number) {
//       flag = true;
//       arrayNumber2.splice(i, 1);
//       document.querySelector(".array").innerHTML = arrayNumber2;
//     }
//   }

//   if (!flag) {
//     alert("không tìm thấy số cần xóa");
//   }
// }

// cách 3
function handleDelete() {
  // input : số người dùng nhập
  var number = +document.querySelector("#numberDel").value;

  var index = arrayNumber2.indexOf(number);
  console.log("index: ", index);

  if (index !== -1) {
    // xóa dữ liệu của mảng tại vị trí tìm thấy
    arrayNumber2.splice(index, 1);

    // cập nhật lại giao diện
    document.querySelector(".array").innerHTML = arrayNumber2;
  } else {
    alert("Không tìm thấy phần tử cần xóa trong mảng !");
  }
}

function findMinMax() {
  var max = arrayNumber2[0];
  var min = arrayNumber2[0];

  for (var i = 1; i < arrayNumber2.length; i++) {
    if (arrayNumber2[i] > max) {
      max = arrayNumber2[i];
    }

    if (arrayNumber2[i] < min) {
      min = arrayNumber2[i];
    }
  }

  document.querySelector("#result").innerHTML = `
    Số lớn nhất : ${max}  <br> Số nhỏ nhất: ${min}`;
}

function findToTalEven() {
  var total = 0;

  for (var i = 0; i < arrayNumber2.length; i++) {
    if (arrayNumber2[i] % 2 === 0) {
      total += arrayNumber2[i];
    }
  }

  document.querySelector(
    "#result2"
  ).innerHTML = `Tổng các số chẵn trong mảng là : ${total}`;
}
