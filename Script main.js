document.addEventListener("DOMContentLoaded", function () {
    const leftImage = document.getElementById("Doctor");

    // Додаємо обробник події для першого зображення
    leftImage.addEventListener("click", function() {
        // Переходимо на підсторінку на сайті
        window.location.href = "Doctor.html"; // Вказуємо лінк на вашу підсторінку
    });

    const rightImage = document.getElementById("rightImage");

    // Додаємо обробник події для другого зображення
    rightImage.addEventListener("click", function() {
        // Переходимо на іншу підсторінку
        window.location.href = "page3.html"; // Вказуємо лінк на іншу підсторінку
    });
});
