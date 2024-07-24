const febHolidays = [
    "Dear Brother🥰,",
    "You are my hero.❤️",
    "Thank you for your support.",
    "You inspire me.",
    "You are my best friend.",
    "Your kindness means the world.",
    "You are my role model.",
    "I cherish our memories.🥰",
    "You always have my back",
    "Your laughter is contagious.",
    "You give the best advice.😍",
    "I appreciate your honesty.🥰",
    "You are incredibly smart.❤️",
    "You have a big heart.",
    "You are always there for me.🥰",
    "I love your sense of humor.",
    "You make everything better.",
    "You are so generous.❤️",
    "I’m proud to be your sibling.",
    "You are a great listener.",
    "You teach me so much.",
    "You have a wonderful spirit",
    "I love our talks.",
    "You’re an amazing person.❤️",
    "You bring joy to my life,",
    "You are so talented.",
    "I look up to you.",
    "You are my rock.❤️",
    "You mean the world to me",
    "You always make me smile.",
    "I love you endlessly❤️"
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
  