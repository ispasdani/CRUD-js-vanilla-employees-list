const formSubmited = document.getElementById("form-button");
const tBody = document.getElementById("t-body-content");
let ifUpdate = null;

formSubmited.addEventListener("click", function (e) {
  e.preventDefault();

  if (ifUpdate == null) {
    insertNewData();
  } else {
    updateData();
  }

  resetForm();
});

function readFormData() {
  let formData = {};
  formData["fullName"] = document.getElementById("full-name").value;
  formData["empCode"] = document.getElementById("emp-code").value;
  formData["salary"] = document.getElementById("salary").value;
  formData["city"] = document.getElementById("city").value;
  return formData;
}

function insertNewData() {
  const formData = readFormData();
  const fullName = formData.fullName;
  const empCode = formData.empCode;
  const salary = formData.salary;
  const city = formData.city;

  tBody.insertAdjacentHTML(
    "afterbegin",
    `
  
    <tr>
        <td>${fullName}</td>
        <td>${empCode}</td>
        <td>${salary}</td>
        <td>${city}</td>
        <td onClick="editData(this)"><a>Edit</a></td>
        <td onClick="deleteData(this)"><a>Delete</a></td>
    </tr>
  `
  );
}

function deleteData(td) {
  const row = td.parentElement;
  row.remove();
}

function resetForm() {
  document.getElementById("full-name").value = "";
  document.getElementById("emp-code").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("city").value = "";
  ifUpdate = null;
}

function editData(td) {
  ifUpdate = td;
  const parent = ifUpdate.parentElement;
  document.getElementById("full-name").value = parent.children[0].innerHTML;
  document.getElementById("emp-code").value = parent.children[1].innerHTML;
  document.getElementById("salary").value = parent.children[2].innerHTML;
  document.getElementById("city").value = parent.children[3].innerHTML;
}

function updateData(formData) {
  formData = readFormData();
  const parent = ifUpdate.parentElement;
  parent.children[0].innerHTML = formData.fullName;
  parent.children[1].innerHTML = formData.empCode;
  parent.children[2].innerHTML = formData.salary;
  parent.children[3].innerHTML = formData.city;
}
