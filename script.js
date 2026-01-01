const btn = document.getElementById("calculateBtn");
const result = document.getElementById("result");
const birthdayText = document.getElementById("birthday");
const themeBtn = document.getElementById("themeBtn");
const body = document.body;

btn.addEventListener("click", calculateAge);
themeBtn.addEventListener("click", toggleTheme);

// 🎯 Age Calculation + Birthday Countdown
function calculateAge() {
    const inputDate = document.getElementById("date").value;
    if (!inputDate) {
        result.innerHTML = "⚠️ Please select your birth date";
        birthdayText.innerHTML = "";
        return;
    }

    const birthDate = new Date(inputDate);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `🎉 You are <b>${years}</b> years, <b>${months}</b> months, and <b>${days}</b> days old`;

    // 🎂 Birthday Countdown
    let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const diffTime = nextBirthday - today;
    const remainingDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    birthdayText.innerHTML = `🎂 Your birthday is in <b>${remainingDays}</b> days`;
}

// 🌙 Dark / Light Mode
function toggleTheme() {
    if (body.classList.contains("light")) {
        body.classList.replace("light", "dark");
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        body.classList.replace("dark", "light");
        themeBtn.textContent = "🌙 Dark Mode";
    }
}
