const onSwitch = document.querySelector(".onSwitch");
const offSwitch = document.querySelector(".offSwitch");
const dispText = document.querySelector(".dispText");
const dispScreen = document.querySelector("#dispScreen");
let stoIntId;
let loadingTimer;
let intId1;
const dateScrn = new Date();
let dayOW = dateScrn.getDay();
let errTo;


const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

onSwitch.addEventListener("click", () => {
  console.log("Turning on screen...");

  if (intId1 === undefined || intId1 == 0) {
    function int0() {
      // alert("screen turning off...");
      dispText.innerHTML = "Please wait! <br> <br>Turning on screen...";
      //dispText.innerHTML = "screen turning off...";

      return (intId1 = 1);
    }
     int0();

    intId1 = setInterval(() => {
      dispScreen.classList.add("gradient-background");
      dispText.innerHTML = " ";
    }, 1450);

    stoIntId = setTimeout(() => {
      clearInterval(intId1);
      dispScreen.classList.remove("gradient-background");
      console.log("program ended...");
      dispScreen.classList.add("gradient-backgroundDefault");
      dispText.innerHTML =
        "Today is " +
        daysOfWeek[dayOW] +
        "! <br>" +
        " <br>" +
        " Another day to try again!";
    }, 5000);
  } else if (intId1 > 0) {
    dispText.innerHTML = "Screen is turned on...";
    errTo = setTimeout(() => {
      dispText.innerHTML =
        "Today is " +
        daysOfWeek[dayOW] +
        "! <br>" +
        " <br>" +
        " Another day to try again!";
    }, 4000);
  } else {
  }
});

offSwitch.addEventListener("click", () => {
  console.log("screen turned off switch..." + offSwitch);
  clearInterval(intId1);
  clearTimeout(loadingTimer);
  clearTimeout(stoIntId);
  clearTimeout(errTo);
  dispScreen.classList.remove("gradient-backgroundDefault");
  dispScreen.classList.remove("gradient-background");
  dispScreen.classList.add("blackScreen");

  if (intId1 > 0) {
    function int() {
      // alert("screen turning off...");
      dispText.innerHTML = "screen turning off...";
      setTimeout(() => {
        dispText.innerHTML = " ";
      }, 2000);

      return (intId1 = 0);
    }
    int();
  } else if (intId1 == 0) {
    alert("Screen turned off...");
  } else if (intId1 === undefined) {
    alert("Screen turned off...");
  } else {
  }
  console.log(" checker" + intId1);
});
