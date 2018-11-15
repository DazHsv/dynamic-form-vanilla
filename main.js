(window => {
  const $ = selector => document.querySelector(selector);

  const table = $(".js-data-table");
  const saveBtn = $(".js-data-form-save");
  const nameInput = $(".js-data-form-name");
  const lastnameInput = $(".js-data-form-lastname");
  const ageInput = $(".js-data-form-age");

  const headers = ["name", "lastname", "age"];
  const dynamicTable = new window.DynamicTable(table, headers);

  const getNewRecord = () => ({
    name: nameInput.value,
    lastname: lastnameInput.value,
    age: ageInput.value,
  });

  const isNotEmpty = inputs => inputs.every(i => i.value != "");

  saveBtn.addEventListener("click", e => {
    e.preventDefault();
    if (isNotEmpty([nameInput, lastnameInput, ageInput])) {
      console.log("Adding");

      dynamicTable.addRow(getNewRecord());
      nameInput.value = "";
      lastnameInput.value = "";
      ageInput.value = "";
    }
  });
})(this);
