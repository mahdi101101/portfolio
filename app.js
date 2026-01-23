const experienceBox = document.querySelector(".experience-box");
// const experienceSkill=document.querySelector("experience__badge")
const circle = document.querySelector(".hover-circle");
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
   link: "https://brittanychiang.com/#content" ,
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

function displayExperince() {
  let result = "";
  experience.forEach((exper) => {
    result += `
<a  href="${exper.link}" class="experience--link" id="experience-link" >
<div class="experience margin-top">
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
