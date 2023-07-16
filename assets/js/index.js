var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        "0": {
            slidesPerView: 1,
        },
        "768": {
            slidesPerView: 2.5,
        },
        "992": {
            slidesPerView: 3,
        },
        "1200": {
            slidesPerView: 3,
        },
        "1400": {
            slidesPerView: 3,
        }
    },
});


//for eye icon 
const togglePassword = document.getElementById('toggle-pass')
let iTag = document.getElementById("iTag")

iTag.addEventListener('click', function () {

    const type = togglePassword.getAttribute('type') == 'password' ? 'text' : 'password';

    togglePassword.setAttribute('type', type);

    if (iTag.classList.contains('bi-eye')) {
        iTag.classList.replace('bi-eye', 'bi-eye-slash');
    }
    else {
        iTag.classList.replace('bi-eye-slash', 'bi-eye');
    }
});
// for validations

(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated') // add this line
        }, false)
    })
})()

//numeric-inputs

function onlyNumberKey(evt) {
             
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

//changing the text under the input if it is empty

