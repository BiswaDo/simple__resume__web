const btn = document.getElementsByClassName("btn")[0];
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const h3 = document.querySelectorAll("h3");

btn.addEventListener("click", function () {
  if (body.style.background !== "#121212" && body.style.background == "white") {
    body.style.background = "#121212";
    body.style.color = "#FFFFFF";
    h1.style.color = "#BB85FC";
    h3.forEach((app) => {
      app.style.color = "#03DAC6";
    });
  } else {
    body.style.background = "white";
    body.style.color = "black";
    h1.style.color = "#0D5AB2";
    h3.forEach((app) => {
      app.style.color = "#0D5AB2";
    });
  }
});
