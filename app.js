const experienceBox = document.querySelector(".experience-box");
const circle = document.querySelector(".hover-circle");
const projectsElement = document.querySelector(".projects");
const sections = document.querySelectorAll(".spy-section");
const links = document.querySelectorAll("li a");
const lines = document.querySelectorAll(".line");

document.addEventListener("mousemove", (e) => {
  circle.style.left = e.clientX + "px";
  circle.style.top = e.clientY + "px";
});

const experience = [
  {
    year: 2024,
    title: "jonior front end developer",
    explanation:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat quia numquam blanditiis autem libero, dolorem deseruntquasi nostrum molestias dignissimos aperiam odit, saepe fuga  eaque explicabo quod veniam sunt rerum.",
    link: "https://brittanychiang.com/#content",
    skills: ["html", "css", "javaScript", "angular"],
  },
  {
    year: 2024,
    title: "jonior front end developer",
    explanation:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat quia numquam blanditiis autem libero, dolorem deseruntquasi nostrum molestias dignissimos aperiam odit, saepe fuga  eaque explicabo quod veniam sunt rerum.",
    skills: ["html", "css", "javaScript", "angular"],
  },
  {
    year: 2024,
    title: "jonior front end developer",
    explanation:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat quia numquam blanditiis autem libero, dolorem deseruntquasi nostrum molestias dignissimos aperiam odit, saepe fuga  eaque explicabo quod veniam sunt rerum.",
    skills: ["html", "css", "javaScript", "angular"],
  },
];

const projects = [
  {
    img: "./assets/images/project-image/image.jpeg",
    title: "bulld a spotity connected Appa",
    explanation:
      "Viden course that teaches how to build a web and with the Snotif  Web API. Topics covered include the princi",
    skills: ["html", "css", "javascript", "react"],
    link: "aparat.com",
  },
  {
    img: "./assets/images/project-image/image.jpeg",
    title: "bulld a spotity connected Appa",
    explanation:
      "Viden course that teaches how to build a web and with the Snotif  Web API. Topics covered include the princi",
    skills: ["html", "css", "javascript", "react"],
    link: "aparat.com",
  },
  {
    img: "./assets/images/project-image/image.jpeg",
    title: "bulld a spotity connected Appa",
    explanation:
      "Viden course that teaches how to build a web and with the Snotif  Web API. Topics covered include the princi",
    skills: ["Html", "css", "javascript", "react"],
    link: "aparat.com",
  },
];

function displayExperince() {
  let result = "";
  experience.forEach((exper) => {
    result += `
<a  href="${exper.link}" class="experience--link hover " >
<div class="experience margin-top box">
<p class="experience__year">${exper.year}</p>
<div class="experience__title">
<h3>${exper.title}</h3>
<p>${exper.explanation} </p>
<div class="experience__badge">
${exper.skills
  .map((skile) => {
    return `<span>${skile}</span>`;
  })
  .join("")}    
</div>
</div>
</div>
</a>
`;
    experienceBox.innerHTML = result;
  });
}

displayExperince();

function displayproject() {
  let result = "";
  projects.forEach((project) => {
    result += `
     <a href="">
            <div class="project margin-top box  hover">
              <div class="product__img">
                <img
                  class="project__img--img"
                  src="${project.img}"
                  alt=""
                />
              </div>
              <div class="project__detail">
                <h3>${project.title}</h3>
                <p>
                  ${project.explanation}
                </p>
                <div class="experience__badge">
                ${project.skills
                  .map((skill) => {
                    return ` <span>${skill}</span>`;
                  })
                  .join(" ")}
                   
  
                  </div>
              </div>
            </div>

          </a>
`;
    projectsElement.innerHTML = result;
  });
}
displayproject();

let scrollTimeout = null;
window.addEventListener("scroll", () => {
  // هر بار اسکرول شد، تایمر قبلی کنسل
  clearTimeout(scrollTimeout);

  // وقتی اسکرول تموم شد (مثلاً بعد 120ms)
  scrollTimeout = setTimeout(() => {
    const middleOfScreen = window.innerHeight / 2;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= middleOfScreen && rect.bottom >= middleOfScreen) {
        const id = section.id;

        links.forEach((link) => {
          link.classList.toggle("active", link.dataset.id === id);
        });
      }
    });
  }, 20); // هرچی بیشتر → حساسیت کمتر
});
