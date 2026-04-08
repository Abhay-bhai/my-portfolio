const toggle = document.getElementById("menu-toggle");
    if(toggle && toggle.checked){
    document.body.classList.add("no-scroll");
} else{
    document.body.classList.remove("no-scroll");
}

const words = [ "BCA Student ", "Web Developer" ,"Graphic Designer","Python & Java Enthusiast",
      "Problem Solver", "Tech Content Creator","Software Engineer"," C & C++ Specialist"
      ];
const typingText = document.getElementById("typing-span");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;
const type = () => {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if(charIndex === currentWord.length){
        isDeleting = true;
        setTimeout(type, nextWordDelay);
        } else{
            setTimeout(type, typingDelay);
        }
    } else{
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if(charIndex === 0){
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else{
            setTimeout(type, erasingDelay);
        }
    }
};
document.addEventListener("DOMContentLoaded", ()=>{
    if(words?.length)
        type();
});


const navLinks = document.querySelectorAll(".navlink"); 
const tabs = document.querySelectorAll(".content");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        navLinks.forEach((l) => {
            if(l === link){
                l.classList.add("active");
            } else{
                l.classList.remove("active");
            }
        });
        const tabName = (link.dataset.tab);
        tabs.forEach((tab) => {
            if(tab.id === tabName){
                tab.classList.add("active");
            } else{
                tab.classList.remove("active");
            }
        });
        if(tabName==="services"){
            const serviceList = [{
                id:1,
                icon: "fa-solid fa-laptop-code" ,
                text: "Website Development",
                para: "Building dynamic and responsive websites using HTML5, CSS3, JavaScript, and Bootstrap. Specialized in creating user-centric frontend designs."
            },
            {
                id:2,
                icon: "fa-solid fa-terminal",
                text: "Software Development ",
                para: " Strong foundation in C, C++, Java, and Python. Capable of developing efficient backend logic and problem-solving through clean code."
            },
              {
                id:3,
                icon: "fa-solid fa-bezier-curve",
                text: "Graphic Design ",
                para: "Professional design services using CorelDRAW and Adobe Photoshop. Creating impactful visual content, logos, and UI assets."
            },
              {
                id:4,
                icon: "fa-solid fa-database",
                text: "Backend & Database",
                para: "Experience in working with PHP and SQL to manage databases and create functional server-side applications."
            },
              {
                id:5,
                icon: "fa-solid fa-chart-line",
                text: " Data Science Enthusiast",
                para: " Certified in Python from Simplilearn and IES MCRC, focusing on data analysis and technical problem-solving."
            },
             {
                id:6,
                icon: "fa-solid fa-video",
                text: "Tech Content Creation ",
                para: "Sharing my learning journey through engaging social media content. Helping fellow BCA students understand complex coding concepts."
            }];
           const services = document.getElementsByClassName("service-list");
           const innerContent = serviceList.map((l) => {
            return `
            <div class="box" key=${l?.id}>
              <div class="head-icons">
                <i class=" ${l?.icon}"></i>
                <span><i class="ph ph-arrow-down-right"></i></span>
              </div>
              <h3>${l?.text}</h3>
              <span class="spacer""></span>
              <p>${l?.para}</p>
            </div>

            `;
           }).join(" ");
           Array.from(services).forEach((ele) => {
            ele.innerHTML = innerContent;
           });
        }
        toggle.checked = false;
        // document.body.classList.remove("no-scroll");
    });
});