import { addItem, updateItemName } from "./app.js";

// Create Form Element
export function createForm(editId, itemToEdit) {
  const form = document.createElement("form");

  // added value and dynamic button name
  form.innerHTML = `
    <h2>SINGLE DAY TO-DO LIST</h2>
    <div class="form-control">
      <input
        type="text"
        class="form-input"
        placeholder="e.g. eggs"
        value="${itemToEdit ? itemToEdit.name : ""}"
      />
      <input
        type="time"
        class="form-input time-input"
        value="${itemToEdit && itemToEdit.time ? itemToEdit.time : ""}"
      />
      <button type="submit" class="btn">
        ${editId ? "edit item" : "add item"}
      </button>
    </div>
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector(".form-input");
    const timeInput = form.querySelector('input[type="time"]');
    const value = input.value.trim();
    const timeValue = timeInput.value;
    
    if (!value) {
      alert("please provide value", "error");
      return;
    }

    // added conditions
    if (editId) {
      updateItemName(value, timeValue);
    } else {
      addItem(value, timeValue);
    }

    input.value = "";
    timeInput.value = "";
  });

  return form;
}
