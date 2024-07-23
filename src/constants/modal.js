// MODAL ADD
export function showAddModal() {
    console.log('Modal');
    document.querySelector(".add-modal").classList.add("active-modal");
}

// MODAL UPDATE
export function showUpdateModal() {
    document.querySelector(".update-modal").classList.add("active-modal");
}

export function hiddenAddModal() {
    document.querySelector(".add-modal").classList.remove("active-modal");
}

export function hiddenUpdateModal() {
    document.querySelector(".update-modal").classList.remove("active-modal");
}

export function showDeleteModal() {
    document.querySelector(".delete-modal").classList.add("active-modal");
}

export function hiddenDeleteModal() {
    document.querySelector(".delete-modal").classList.remove("active-modal");
}