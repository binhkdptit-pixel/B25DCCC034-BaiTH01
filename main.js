const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
});


const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkBtn.textContent = "☀️";
    } else {
        darkBtn.textContent = "🌙";
    }

});


const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    if (name === "" || email === "" || message === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Email không hợp lệ!");
        return;
    }

    if (name.length < 2) {
        alert("Họ tên phải có ít nhất 2 ký tự!");
        return;
    }

    if (message.length < 10) {
        alert("Nội dung phải có ít nhất 10 ký tự!");
        return;
    }

    alert("Gửi liên hệ thành công!");

    form.reset();

});


const skillSearch = document.getElementById("skillSearch");
const skills = document.querySelectorAll(".skill");

skillSearch.addEventListener("input", function () {

    const keyword = skillSearch.value.toLowerCase();

    skills.forEach(function (skill) {

        const skillName = skill.textContent.toLowerCase();

        if (skillName.includes(keyword)) {
            skill.style.display = "flex";
        } else {
            skill.style.display = "none";
        }

    });

});


const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


const revealElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function () {

    revealElements.forEach(function (element) {

        const position = element.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            element.classList.add("show");
        }

    });

});