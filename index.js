const update = () => {
  let time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const day = time.getDay();
  const date = time.getDate();
  const month = time.getMonth();
  const year = time.getYear();

  document.querySelector("#hours").textContent = hours;
  document.querySelector("#minutes").textContent = minutes;
  document.querySelector("#seconds").textContent = seconds;
  if (hours > 12) {
    document.querySelector("#amorpm").textContent = "PM";
    document.querySelector("#hours").textContent = hours - 12;
  } else {
    document.querySelector("#amorpm").textContent = "AM";
  }
  let newHours = document.querySelector("#hours").textContent;
  let newMinutes = document.querySelector("#minutes").textContent;
  let newSeconds = document.querySelector("#seconds").textContent;

  if (newHours < 10) {
    document.querySelector("#hours").textContent = "0" + newHours;
  }
  if (newMinutes < 10) {
    document.querySelector("#minutes").textContent = "0" + newMinutes;
  }
  if (newSeconds < 10) {
    document.querySelector("#seconds").textContent = "0" + newSeconds;
  }
  //   day date month year

  let eDay = document.querySelector("#day");
  let eDate = document.querySelector("#date");
  let eMonth = document.querySelector("#month");
  let eYear = document.querySelector("#year");

  switch (day) {
    case 0:
      eDay.textContent = "Sunday";
      break;
    case 1:
      eDay.textContent = "Monday";
      break;
    case 2:
      eDay.textContent = "Tuesday";
      break;
    case 3:
      eDay.textContent = "Wednesday";
      break;
    case 4:
      eDay.textContent = "Thursday";
      break;
    case 5:
      eDay.textContent = "Friday";
      break;
    case 6:
      eDay.textContent = "Saturday";
      break;
  }
  if (date < 10) {
    eDate.textContent = "0" + date;
  } else {
    eDate.textContent = date;
  }
  if (month < 10) {
    eMonth.textContent = "0" + month;
  } else {
    eMonth.textContent = month;
  }

  eYear.textContent = 2000 + (year - 100);
};
setInterval(update, 1000);
