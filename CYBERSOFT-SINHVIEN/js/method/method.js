// /** enter: cú pháp tạo cmt code
/**
 * hàm này nhận vào 1 mảng và trả về vị trí index của số lớn nhất
 * @param {*} arr mảng được truyền vào để tìm vị trí của số lớn nhất
 * @returns trả về vị trí index của số lớn nhất
 */
function findIndexMax(arr) {
  var max = arr[0];
  var indexMax = 0; // lấy vị trí lớn nhất trong mảng điểm để lấy được tên tại vị trí điểm lớn nhất
  for (var index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
      indexMax = index;
    }
  }
  console.log("max", max);
  console.log("indexMax", indexMax);

  return indexMax;
}

/**
 * hàm này nhận vào 1 mảng và trả về vị trí index của số nhỏ nhất
 * @param {*} arr mảng được truyền vào để tìm vị trí của số nhỏ nhất
 * @returns trả về vị trí index của số nhỏ nhất
 */
function findIndexMin(arr) {
  var min = arr[0];
  var indexMin = 0; // lấy vị trí lớn nhất trong mảng điểm để lấy được tên tại vị trí điểm lớn nhất
  for (var index = 0; index < arr.length; index++) {
    if (arr[index] < min) {
      min = arr[index];
      indexMin = index;
    }
  }
  return indexMin;
}

/**
 * Hàm nhận vào 1 mảng số và 1 số điểm để xét.
 * @param {*} arrNumber mảng number được truyền vào
 * @param {*} target số điểm để đạt được sinh viên giỏi
 * @return số sinh viên giỏi
 */
function demSoSVGioi(arrNumber, target) {
  var count = 0;
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] > target) {
      count++;
    }
  }

  return count;
}
