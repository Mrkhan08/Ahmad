const febHolidays = [
  "You make my heart skip a beat.",
  "Your smile brightens my day.",
  "I love spending time with you.",
  "You are amazing.",
  "You make me happy.",
  "I adore your kindness.",
  "You have a beautiful soul.",
  "I can't stop thinking about you.",
  "You make me feel special.",
  "I cherish our moments together.",
  "You inspire me.",
  "Your laugh is contagious.",
  "You are so thoughtful.",
  "You make my life better.",
  "I love your sense of humor.",
  "You are my favorite person.",
  "I admire your confidence.",
  "You make everything more fun.",
  "I appreciate you.",
  "Your presence is comforting.",
  "I feel lucky to know you.",
  "You are always on my mind.",
  "You are my sunshine.",
  "I am grateful for you.",
  "You have a heart of gold.",
  "You are incredible.",
  "I love your passion.",
  "You are my happy place.",
  "I love your creativity.",
  "You are perfect to me.",
  "I am falling for you."
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  