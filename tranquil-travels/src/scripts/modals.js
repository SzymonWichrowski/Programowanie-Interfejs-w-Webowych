"use strict";

export const openModal = (modal_id) => {

    const modal = document.getElementById(modal_id);
    modal.showModal();
}

export const closeModal = (modal_id) => {

    const modal = document.getElementById(modal_id);
    modal.close();
}

