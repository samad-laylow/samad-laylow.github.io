
// Countdown Timer
const countdownTimer = () => {
  const deadline = new Date("2024-12-31T23:59:59").getTime();
  const timerElements = document.querySelectorAll(".timer");

  const updateTimer = () => {
    const now = new Date().getTime();
    const timeLeft = deadline - now;

    if (timeLeft <= 0) {
      timerElements.forEach((el) => (el.textContent = "Auction Ended"));
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    timerElements.forEach((el) => {
      el.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    });
  };

  const timerInterval = setInterval(updateTimer, 1000);
  updateTimer();
};

document.addEventListener("DOMContentLoaded", countdownTimer);

