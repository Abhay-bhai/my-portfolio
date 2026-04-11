
const projectList = [
    {
        id: 1,
        number: "01",
        title: "Web Development ",
        description: "A modern, fully responsive food ordering landing page designed to provide a seamless user experience. This project showcases my ability to translate a creative design into a functional website using front-end technologies. It features a clean UI, interactive elements, and a structured layout for menu items and services.",
        techStack: ["Html, Css, and JavaScript "],
        image: "assets/foodie-website.png",
        liveLink: "https://abhay-bhai.github.io/foodie-website/",
        githubLink: "https://github.com/Abhay-bhai/foodie-website"
    },
    {
        id: 2,
        number: "02",
        title: "Web  Development ",
        description: "A modern, fully responsive Cakery ordering landing page designed to provide a seamless user experience. This project showcases my ability to translate a creative design into a functional website using front-end",
        techStack: ["Html ,Css, and JavaScript"],
        image: "assets/cakery-website.png",
        liveLink: "https://abhay-bhai.github.io/cakery-website/",
        githubLink: "https://abhay-bhai.github.io/bakery-site/"
    },
    // {
    //     id: 3,
    //     number: "03",
    //     title: "FullStack Development ",
    //     description: "welcome to the my website this website is developed by hacker and content is very interestion and very helpful to student all student like this websie more welcome to my website .",
    //     techStack: ["Html, Css, Java script , nodejs "],
    //     image: "image/computer.jpg",
    //     liveLink: "#",
    //     githubLink: "#"
    // }
];
const projects = document.querySelector(".projects");
let currentIndex = 0;
const renderProject = (index) => {
    const projectContent = projectList[index];
    const previousDisabled = currentIndex === 0;
    const nextDisabled = currentIndex === projectList.length - 1;
    projects.innerHTML = `
        <div class="project-info">
          <h3>${projectContent?.number}</h3>
          <h4>${projectContent?.title} </h4>
          <p>${projectContent?.description}</p>
          <div class="tech-stack">
          ${projectContent?.techStack?.map((tech, i) => {
        return ` <span key=${i}>${tech}</span> `;
    }).join(",")}
          </div>
          <hr>
          <div class="links">
          <a href="${projectContent?.liveLink}"><i class="ph ph-arrow-right"></i></a>
            <a href="${projectContent?.githubLink}"><i class="ph ph-github-logo"></i></a>
          </div>
        </div>
        <div class="carousel">
            <img src="${projectContent?.image}" alt="${projectContent?.title}" />
          <div class="arrows">
  <a href="#" id="previous" class="${previousDisabled ? "disabled-btn" : ""}">
    <i class="ph ph-caret-left"></i>
  </a>
    <a href="#" id="next" class="${nextDisabled ? "disabled-btn" : ""}">
    <i class="ph ph-caret-right"></i>
          </div>
         </div>
        </div>
    `;
    document.getElementById('previous').addEventListener("click", (e) => {
        e.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            renderProject(currentIndex);
        }
    });
    document.getElementById('next').addEventListener("click", (e) => {
        e.preventDefault();
        if (currentIndex < projectList.length - 1) {
            currentIndex++;
            renderProject(currentIndex);
        }
    });
};
renderProject(currentIndex);
