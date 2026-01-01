const btn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

btn.addEventListener("click", calculateAge);

function calculateAge() {
    const birthDate = new Date(document.getElementById("date").value);
    const today = new Date();

    if (!document.getElementById("date").value) {
        result.innerHTML = "⚠️ Please select your birth date";
        return;
    }

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
}
