const btn = {
    openAccount: document.querySelector('.nav-button-icon1')
}

const modals = {
    modal1: document.querySelector('.modals'),
    modalOverlay: document.querySelector('.modal-overlay'),
    modal: document.querySelector('.modal')
}

btn.openAccount.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path')

    modals.modal1.style.display = 'block'
    modals.modalOverlay.style.opacity = '1'
    modals.modalOverlay.style.visibility = 'visible'
    modals.modal.style.opacity = '1'
    modals.modal.style.visibility = 'visible'
    document.querySelector(`[data-target="${path}"]`)
    console.log(path)
});
    
modals.modalOverlay.addEventListener('click', (e) => {
    modals.modalOverlay.style.opacity = '0'
    modals.modalOverlay.style.visibility = 'hidden'
    });