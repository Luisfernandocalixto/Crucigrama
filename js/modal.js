let modal = document.getElementById('modal');
let flex = document.getElementById('flex');
// let openModal = document.getElementById('open');
let closeModal = document.getElementById('close');


// openModal.addEventListener('click', function () {
//     modal.style.display = 'block';
// });

closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (e) {
    if (e.target === flex) {
        modal.style.display = 'none';

    }
});


