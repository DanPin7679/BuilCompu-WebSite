import { setSettings } from "./logic/settings.js";
import { applyTextLang } from "./pages/text.js";
import { about } from "./pages/about.js";
import { home } from "./pages/home.js";

// const sections = [document.getElementById("about")]

// const sections = document.querySelectorAll(".section");
// const sectBtns = document.querySelectorAll(".controls");
// const sectBtn = document.querySelectorAll(".control");
// const allSections = document.querySelector(".main-content");

if (!localStorage.lang) {
  localStorage.setItem("lang", "English");
}
console.log("in app", localStorage.lang, localStorage.theme);
if (!localStorage.theme) {
  localStorage.setItem("theme", "Dark");
} else {
  localStorage.theme == "Dark"
    ? document.body.classList.remove("light-mode")
    : document.body.classList.add("light-mode");
}

applyTextLang(localStorage.lang);

// let homeDiv = document.getElementById("homeContent");
// homeDiv.innerHTML = home;

// let aboutDiv = document.getElementById("about");
// aboutDiv.innerHTML = about;
// aboutDiv.style.display = "none";

applyTextLang(localStorage.lang);
// function ClickControl(e) {
//   let aboutDiv = document.getElementById("about");
//   aboutDiv.innerHTML = about;
//   let currentBtn = document.querySelectorAll(".active-btn");
//   currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
//   const currentSectionId = currentBtn[0].dataset.id;
//   const currentSection = document.getElementById(currentSectionId);
//   currentSection.className = currentSection.className.replace("active", "");

//   e.target.className += " active-btn";
//   const targetSectionId = e.target.dataset.id;
//   const targetSection = document.getElementById(targetSectionId);

//   if (targetSection.innerHTML == "" && targetSectionId == "portfolio") {
//     targetSection.innerHTML = portfolio;
//     applyTextLang(localStorage.lang);
//   }
//   if (targetSection.innerHTML == "" && targetSectionId == "myCV") {
//     targetSection.innerHTML = myCV;
//     applyTextLang(localStorage.lang);
//   }
// if (targetSection.innerHTML == "" && targetSectionId == "about") {
//   console.log(targetSection);
//   targetSection.innerHTML = about;
//   applyTextLang(localStorage.lang);
//   }
//   if (targetSection.innerHTML == "" && targetSectionId == "contact") {
//     targetSection.innerHTML = myContact;
//     applyTextLang(localStorage.lang);
//   }
//   if (targetSection.innerHTML == "" && targetSectionId == "retproj") {
//     targetSection.innerHTML = retProj;
//     applyTextLang(localStorage.lang);
//     let requestBody = {
//       arg1: 50000,
//       arg2: 5000,
//       arg3: 0.07,
//     };
//     const submitBtn = document
//       .getElementById("submit-btn")
//       .addEventListener("click", (e) => {
//         postData("http://localhost:3000/api/calculator", requestBody).then(
//           (data) => {
//             console.log(data); // JSON data parsed by `data.json()` call
//           }
//         );
//       });
//     async function postData(url = "", data = {}) {
//       const response = await fetch(url, {
//         method: "POST",
//         mode: "cors",
//         cache: "no-cache",
//         credentials: "same-origin",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         redirect: "follow",
//         referrerPolicy: "no-referrer",
//         body: JSON.stringify(data),
//       });
//       return response.json(); // parses JSON response into native JavaScript objects
//     }
//   }
//   targetSection.className += " active";
// }

// for (let i = 0; i < sectBtn.length; i++) {
//   sectBtn[i].addEventListener("click", ClickControl);
// }
