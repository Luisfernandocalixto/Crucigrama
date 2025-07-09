// elements of DOM =>   id="modal"
let modal = document.getElementById('modal');
let flex = document.getElementById('flex');
let closeModal = document.getElementById('close');



closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (e) {
    if (e.target === flex) {
        modal.style.display = 'none';

    }
});


