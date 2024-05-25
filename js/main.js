var bookmarkNameInpuT = document.getElementById("bookmarkName");
var bookmarkURLInpuT = document.getElementById("bookmarkURL");

var bookMarkList = [];

if (localStorage.getItem("bookMarks") !== null) {
  bookMarkList = JSON.parse(localStorage.getItem("bookMarks"));
  displayData();
}

// Add Book Marks
function addBookMark() {
  if (validation(bookmarkNameInpuT , "msgName") && validation(bookmarkURLInpuT , "msgUrl")) {
    var bookMark = {
      name: bookmarkNameInpuT.value,
      url: bookmarkURLInpuT.value
    };
    bookMarkList.push(bookMark);

    localStorage.setItem("bookMarks", JSON.stringify(bookMarkList));

    displayData();

    clearForm();
  }
}

// Clear Form
function clearForm() {
  bookmarkNameInpuT.value = null;
  bookmarkURLInpuT.value = null;
}

// Display Data
function displayData() {
  var container = "";

  for (var i = 0; i < bookMarkList.length; i++) {
    container += `
        <tr>
              <td>${i + 1}</td>
              <td class="text-capitalize">${bookMarkList[i].name}</td>
              <td>
                <button class="btn btn-visit"  onclick = "visitItem(${i})" >
                  <i class="fa-solid fa-eye pe-2"></i>Visit
                </button>
              </td>
              <td>
                <button class="btn btn-delete pe-2" onclick = "deleteItem(${i})"  >
                  <i class="fa-solid fa-trash-can"></i>
                  Delete
                </button> 
              </td>
          </tr>
        `;
  }

  document.getElementById("tableContent").innerHTML = container;
}
// Delete Data
function deleteItem(indexItem) {
  bookMarkList.splice(indexItem, 1);
  localStorage.setItem("bookMarks", JSON.stringify(bookMarkList));

  displayData();
}

// Visit Sit
function visitItem(index) {
  window.open(bookMarkList[index].url);
}

// validation check
function validation(element , msgId) {
  var tessting = element.value;
  var Regex = {
    bookmarkName :  /^[a-z]{3,9}$/gim,
    bookmarkURL  :  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gim
  };
  var msg = document.getElementById(msgId);
  if (Regex[element.id].test(tessting) == true) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    msg.classList.add("d-none");
    return true;

  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    msg.classList.remove("d-none");
    return false;
  }
}








//  validation check Name
// function validName() {
//   var tessting = bookmarkNameInpuT.value;
//   var nameRegex = /^[a-z]{3,9}$/gim;
//   var msgName = document.getElementById("msgName");
//   if (nameRegex.test(tessting) == true) {
//     bookmarkNameInpuT.classList.add("is-valid");
//     bookmarkNameInpuT.classList.remove("is-invalid");
//     msgName.classList.add("d-none");
//     return true;
//   } else {
//     bookmarkNameInpuT.classList.add("is-invalid");
//     bookmarkNameInpuT.classList.remove("is-valid");
//     msgName.classList.remove("d-none");
//     return false;
//   }
// }

//  validation check Url
// function validUrl() {
//   var tessting = bookmarkURLInpuT.value;
//   var urlRegex =
//     /^((ftp|http|https):\/\/)(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gim;
//   var msgUrl = document.getElementById("msgUrl");
//   if (urlRegex.test(tessting) == true) {
//     bookmarkURLInpuT.classList.add("is-valid");
//     bookmarkURLInpuT.classList.remove("is-invalid");
//     msgUrl.classList.add("d-none");
//     return true;
//   } else {
//     bookmarkURLInpuT.classList.add("is-invalid");
//     bookmarkURLInpuT.classList.remove("is-valid");
//     msgUrl.classList.remove("d-none");
//     return false;
//   }
// }

