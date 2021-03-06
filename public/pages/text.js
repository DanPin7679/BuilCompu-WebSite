export function applyTextLang(lang) {
  let elementsWithText = document.querySelectorAll(`[data-text]`);

  elementsWithText.forEach((element) => {
    let key = element.dataset.text;
    let elementText = text[lang][key];
    element.innerHTML = elementText;
  });

  let langBtn = document.getElementById("lang-btn");
  langBtn.innerHTML = lang;
}

const text = {
  English: {
    introTitle1: "Build a computer from scratch",
    introMyName: "From electronic components to high level language",
    intro:
      "I love to create beautiful and functional websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis sed aut!",
    pageTitleAbout: "ABOUT ME",
    aboutTitle: "Information about me",
    aboutText: `
    English Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
    labore nihil obcaecati consequatur. Debitis error doloremque, vero
    eos vel nemo eius voluptatem dicta tenetur modi. <br />
    <br />
    La musica delectus dolore fugiat exercitationem a, ipsum quidem
    quo enim natus accusamus labore dolores nam. Unde. Lorem ipsum
    dolor sit amet consectetur, adipisicing elit. Harum non
    necessitatibus deleniti eum soluta.
    `,
    pageTitleCV: "My CV",
    cvTitle: "My Experience",
    cvText: `
    English Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
    labore nihil obcaecati consequatur. Debitis error doloremque, vero
    eos vel nemo eius voluptatem dicta tenetur modi. <br />
    <br />
    La musica delectus dolore fugiat exercitationem a, ipsum quidem
    quo enim natus accusamus labore dolores nam. Unde. Lorem ipsum
    dolor sit amet consectetur, adipisicing elit. Harum non
    necessitatibus deleniti eum soluta.
    `,
    pageTitlePortfolio: "Portfolio",
    introPortfolio:
      "Here is some of my work that I've done in various programming languages.",
    pageTitleContact: "Contacts",
    pageTitleRetproj: "Retirement Projector",
    introRetproj:
      "Here is some of my work that I've done in various programming languages.",
  },
  Fran??ais: {
    introTitle1: "Bonjour, je suis",
    introTitle2: "et je suis un passionn?? des technologies de l'information.",
    introMyName: "Dany Pineault",
    intro: "Je suis un passionn?? des technologies de l'information.",
    pageTitleAbout: "?? PROPOS DE MOI",
    aboutTitle: "Information ?? propos de moi",
    aboutText: `
    Je suis un actuaire de profession avec plus de 20 ann??es d'exp??rience dans les domaine de
    l'??pargne retraite collective.
    <br /><br />
    La musica delectus dolore fugiat exercitationem a, ipsum quidem
    quo enim natus accusamus labore dolores nam. Unde. Lorem ipsum
    dolor sit amet consectetur, adipisicing elit. Harum non
    necessitatibus deleniti eum soluta.
    `,
    pageTitleCV: "Mon CV",
    cvTitle: "Mon exp??rience",
    cvText: `
    English Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
    labore nihil obcaecati consequatur. Debitis error doloremque, vero
    eos vel nemo eius voluptatem dicta tenetur modi. <br />
    <br />
    La musica delectus dolore fugiat exercitationem a, ipsum quidem
    quo enim natus accusamus labore dolores nam. Unde. Lorem ipsum
    dolor sit amet consectetur, adipisicing elit. Harum non
    necessitatibus deleniti eum soluta.
    `,
    pageTitlePortfolio: "Mes projets",
    introPortfolio:
      "Voici quelques projets personnels sur lesquels j'ai travaill?? derni??rement",
    pageTitleContact: "Contacts",
    pageTitleRetproj: "Retirement Projector",
    introRetproj:
      "Here is some of my work that I've done in various programming languages.",
  },
};
