// LOADING

window.addEventListener("load", function () {

    setTimeout(() => {
        document.getElementById("loader").classList.add("hide");
    }, 1000);

});


// MENU MOBILE

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


// TUTUP MENU SETELAH KLIK

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });

});


// DARK MODE

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀";
    } else {
        themeBtn.textContent = "☾";
    }

});


// ANIMASI SAAT SCROLL

function revealAnimation() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealAnimation);

revealAnimation();


// INFO MODAL

function showInfo(type) {

    const modal = document.getElementById("modal");
    const title = document.getElementById("modalTitle");
    const text = document.getElementById("modalText");
    const icon = document.getElementById("modalIcon");

    modal.classList.add("show");

    if (type === "Jantung") {

        icon.textContent = "❤️";
        title.textContent = "Kesehatan Jantung";

        text.textContent =
            "Jantung merupakan organ penting yang memompa darah ke seluruh tubuh. Menjaga pola makan seimbang, aktif bergerak, tidur cukup, dan menghindari kebiasaan yang berisiko dapat membantu menjaga kesehatan jantung.";

    }

    if (type === "Mental") {

        icon.textContent = "🧠";
        title.textContent = "Kesehatan Mental";

        text.textContent =
            "Kesehatan mental berhubungan dengan cara seseorang berpikir, merasakan emosi, dan menjalani aktivitas sehari-hari. Beristirahat, berbicara dengan orang yang dipercaya, dan mencari bantuan ketika diperlukan merupakan hal yang penting.";

    }

    if (type === "Tidur") {

        icon.textContent = "😴";
        title.textContent = "Pentingnya Tidur";

        text.textContent =
            "Tidur membantu tubuh beristirahat dan memulihkan energi. Jadwal tidur yang teratur dan suasana kamar yang nyaman dapat membantu mendapatkan istirahat yang lebih baik.";

    }

}


function closeModal() {

    document.getElementById("modal").classList.remove("show");

}


// MENTAL HEALTH

function mentalMessage() {

    showInfo("Mental");

}


// RELAKSASI

function breathingExercise() {

    const modal = document.getElementById("modal");

    document.getElementById("modalIcon").textContent = "🌿";
    document.getElementById("modalTitle").textContent = "Tarik Napas";

    document.getElementById("modalText").textContent =
        "Coba tarik napas perlahan, tahan sebentar, lalu hembuskan secara perlahan. Ulangi beberapa kali sambil duduk dengan nyaman.";

    modal.classList.add("show");

}


// CEK KESEHATAN

function checkHealth() {

    const condition = document.getElementById("condition").value;
    const water = document.getElementById("water").value;
    const result = document.getElementById("result");

    if (condition === "" || water === "") {

        result.textContent =
            "⚠️ Silakan isi semua pilihan terlebih dahulu.";

        return;
    }

    if (condition === "baik" && water === "yes") {

        result.textContent =
            "💗 Bagus! Pertahankan kebiasaan sehatmu.";

    } else if (condition === "lelah") {

        result.textContent =
            "🌷 Kamu mungkin membutuhkan waktu untuk beristirahat. Dengarkan kondisi tubuhmu.";

    } else {

        result.textContent =
            "💧 Jangan lupa istirahat dan mencukupi kebutuhan cairan. Jika keluhan terasa berat atau menetap, pertimbangkan untuk berkonsultasi dengan tenaga kesehatan.";

    }

}


// FORM KONTAK

function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "💌 Terima kasih, " + name +
        "! Pesan kamu berhasil dikirim."
    );

    event.target.reset();

}


// CLOSE MODAL KETIKA KLIK LUAR

document.getElementById("modal").addEventListener("click", function(event) {

    if (event.target === this) {
        closeModal();
    }

});


// NAVBAR ACTIVE

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});