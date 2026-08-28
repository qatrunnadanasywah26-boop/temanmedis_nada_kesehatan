/* =========================================
   TEMANMEDIS - SCRIPT.JS
========================================= */


/* =========================================
   LOADING
========================================= */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1000);
});


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // Tutup menu setelah memilih halaman
    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
        });

    });
}


/* =========================================
   DARK MODE
========================================= */

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    // Ambil tema yang tersimpan
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeBtn.textContent = "☀";
    } else {
        themeBtn.textContent = "☾";
    }


    // Tombol dark mode
    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");

        if (isDark) {
            themeBtn.textContent = "☀";
            localStorage.setItem("theme", "dark");
        } else {
            themeBtn.textContent = "☾";
            localStorage.setItem("theme", "light");
        }

    });
}


/* =========================================
   REVEAL ANIMATION
========================================= */

function revealAnimation() {

    const reveals = document.querySelectorAll(".reveal");

    if (!reveals.length) return;

    reveals.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });
}

window.addEventListener("scroll", revealAnimation);
window.addEventListener("load", revealAnimation);


/* =========================================
   INFO MODAL
========================================= */

function showInfo(type) {

    const modal = document.getElementById("modal");
    const title = document.getElementById("modalTitle");
    const text = document.getElementById("modalText");
    const icon = document.getElementById("modalIcon");

    if (!modal || !title || !text || !icon) return;


    const information = {

        Jantung: {
            icon: "❤️",
            title: "Kesehatan Jantung",
            text:
                "Jantung merupakan organ penting yang memompa darah ke seluruh tubuh. Menjaga pola makan seimbang, aktif bergerak, tidur cukup, dan menghindari kebiasaan yang berisiko dapat membantu menjaga kesehatan jantung."
        },

        Mental: {
            icon: "🧠",
            title: "Kesehatan Mental",
            text:
                "Kesehatan mental berhubungan dengan cara seseorang berpikir, merasakan emosi, dan menjalani aktivitas sehari-hari. Beristirahat, berbicara dengan orang yang dipercaya, dan mencari bantuan ketika diperlukan merupakan hal yang penting."
        },

        Tidur: {
            icon: "😴",
            title: "Pentingnya Tidur",
            text:
                "Tidur membantu tubuh beristirahat dan memulihkan energi. Jadwal tidur yang teratur dan suasana kamar yang nyaman dapat membantu mendapatkan istirahat yang lebih baik."
        }

    };


    const data = information[type];

    if (!data) return;


    icon.textContent = data.icon;
    title.textContent = data.title;
    text.textContent = data.text;

    modal.classList.add("show");
}


/* =========================================
   CLOSE MODAL
========================================= */

function closeModal() {

    const modal = document.getElementById("modal");

    if (!modal) return;

    modal.classList.remove("show");
}


/* =========================================
   MENTAL HEALTH
========================================= */

function mentalMessage() {

    showInfo("Mental");

}


/* =========================================
   BREATHING / RELAXATION
========================================= */

function breathingExercise() {

    const modal = document.getElementById("modal");
    const icon = document.getElementById("modalIcon");
    const title = document.getElementById("modalTitle");
    const text = document.getElementById("modalText");

    if (!modal || !icon || !title || !text) return;


    icon.textContent = "🌿";

    title.textContent = "Tarik Napas";

    text.textContent =
        "Coba tarik napas perlahan selama 4 detik, tahan selama 4 detik, lalu hembuskan secara perlahan selama 4 detik. Ulangi beberapa kali sambil duduk dengan nyaman.";

    modal.classList.add("show");
}


/* =========================================
   HEALTH CHECK
========================================= */

function checkHealth() {

    const condition = document.getElementById("condition");
    const water = document.getElementById("water");
    const result = document.getElementById("result");

    if (!condition || !water || !result) return;


    const conditionValue = condition.value;
    const waterValue = water.value;


    // Belum memilih semua
    if (conditionValue === "" || waterValue === "") {

        result.textContent =
            "⚠️ Silakan isi semua pilihan terlebih dahulu.";

        result.style.background = "#fff0f5";
        result.style.color = "#d94b8b";

        return;
    }


    // Kondisi baik
    if (
        conditionValue === "baik" &&
        waterValue === "yes"
    ) {

        result.textContent =
            "💗 Bagus! Pertahankan kebiasaan sehatmu.";

        result.style.background = "#e9fff3";
        result.style.color = "#26965c";

    }


    // Kondisi lelah
    else if (conditionValue === "lelah") {

        result.textContent =
            "🌷 Kamu mungkin membutuhkan waktu untuk beristirahat. Dengarkan kondisi tubuhmu dan jangan memaksakan diri.";

        result.style.background = "#fff8df";
        result.style.color = "#a87b00";

    }


    // Kondisi kurang sehat
    else {

        result.textContent =
            "💧 Jangan lupa istirahat dan mencukupi kebutuhan cairan. Jika keluhan terasa berat atau menetap, pertimbangkan untuk berkonsultasi dengan tenaga kesehatan.";

        result.style.background = "#fff0f0";
        result.style.color = "#c94b4b";

    }

}


/* =========================================
   CONTACT FORM
========================================= */

function sendMessage(event) {

    event.preventDefault();

    const nameInput = document.getElementById("name");

    if (!nameInput) return;


    const name = nameInput.value.trim();


    if (name === "") {

        alert("⚠️ Silakan masukkan nama terlebih dahulu.");

        return;
    }


    alert(
        "💌 Terima kasih, " +
        name +
        "! Pesan kamu berhasil dikirim."
    );


    event.target.reset();
}


/* =========================================
   CLOSE MODAL KETIKA KLIK DI LUAR
========================================= */

const modal = document.getElementById("modal");

if (modal) {

    modal.addEventListener("click", event => {

        if (event.target === modal) {
            closeModal();
        }

    });

}


/* =========================================
   CLOSE MODAL DENGAN TOMBOL ESC
========================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* =========================================
   EXPORT FUNCTION
   Agar onclick="" di HTML tetap bekerja
========================================= */

window.showInfo = showInfo;
window.closeModal = closeModal;
window.mentalMessage = mentalMessage;
window.breathingExercise = breathingExercise;
window.checkHealth = checkHealth;
window.sendMessage = sendMessage;
