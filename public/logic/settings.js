import { applyTextLang } from "../pages/text.js";

export function setSettings(lang) {
  localStorage.lang = localStorage.lang == "English" ? "Français" : "English";

  applyTextLang(localStorage.lang);
}

const langBtn = document.getElementById("lang-btn");
langBtn.addEventListener("click", setSettings);

document.getElementById("theme-btn").addEventListener("click", () => {
  localStorage.theme = localStorage.theme == "Dark" ? "Light" : "Dark";

  localStorage.theme == "Dark"
    ? document.body.classList.remove("light-mode")
    : document.body.classList.add("light-mode");
});
