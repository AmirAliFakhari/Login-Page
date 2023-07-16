

const input = document.getElementById("input");
const spans = document.getElementById("spans");
const nextBtn = document.getElementById("next-btn");
console.log(input)
input.addEventListener("input", function () {
    if (input.checkValidity()) {
        spans.style.display = "block"; // show the spans
    } else {
        spans.style.display = "none"; // hide the spans
    }
});

nextBtn.addEventListener('click', function () {
    if (input.checkValidity()) {
        spans.style.display = "none"; // show the spans
    }  else {
        spans.style.display = "none"; // hide the spans
    }
})

