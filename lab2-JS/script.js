"use strict";

const newItem = document.getElementById("newItem");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const restoreBtn = document.getElementById("restoreBtn");
let lastDeleted = null;
let current;

addBtn.onclick = () => {
    if(newItem.value.trim() !== "") {
        const listItem = document.createElement("li");
        const checkbox = document.createElement("input");
        const xBtn = document.createElement("button");
        checkbox.type = "checkbox";
        xBtn.innerText = "X";
        listItem.appendChild(xBtn);
        listItem.appendChild(checkbox);
        listItem.append(newItem.value);
        list.appendChild(listItem);
        newItem.value = "";

        checkbox.addEventListener("click", (event) => {
            const listItem = event.target.parentElement;
            const checkbox = event.target;

            if (checkbox.checked) {
                listItem.classList.add("checked");
                const today = new Date();
                const dateString = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
                const dateItem = document.createElement("li");
                dateItem.append(dateString);
                dateItem.classList.add("date");
                listItem.appendChild(dateItem);
            } else {
                const dateItem = listItem.querySelector("li:not(.checked)");
                if (dateItem) {
                    listItem.removeChild(dateItem);
                }
                listItem.classList.remove("checked");
            }
        });

        listItem.addEventListener("click", (event) => {
            const listItem = event.target;
            const checkbox = event.target.querySelector("input[type='checkbox']");
            checkbox.checked = !checkbox.checked;

            if(checkbox.checked) {
                listItem.classList.add("checked");
                const today = new Date();
                const dateString = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
                const dateItem = document.createElement("li");
                dateItem.append(dateString);
                dateItem.classList.add("date");
                listItem.appendChild(dateItem);
            }
            else {
                const dateItem = listItem.querySelector("li:not(.checked)");
                if (dateItem) {
                    listItem.removeChild(dateItem);
                }
                listItem.classList.remove("checked");
            }
        });

        xBtn.addEventListener("click", (event) => {
            const listItem = event.target.parentElement;
            current = listItem;
            const modal = document.getElementsByTagName("dialog")[0];
            const modalText = document.getElementById("modal-text");
            modalText.append(listItem.innerText);
            modal.showModal();
        })
    }
}

restoreBtn.onclick = () => {
    if (lastDeleted !== null) {
        list.appendChild(lastDeleted);
        lastDeleted = null;
    }
}

window.onload = () => {
    const cancelBtn = document.getElementById("cancelBtn");
    const confirmBtn = document.getElementById("confirmBtn");
  
    cancelBtn.addEventListener("click", () => {
      const modal = document.getElementsByTagName("dialog")[0];
      modal.close();
    });

    confirmBtn.addEventListener("click", () => {
        lastDeleted = current;
        current.remove();
        const modal = document.getElementsByTagName("dialog")[0];
        modal.close();
    })

}


    