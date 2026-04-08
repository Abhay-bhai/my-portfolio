const aboutTabs = document.querySelectorAll(".tab");
const aboutContents = document.querySelectorAll(".tab-content");
document.addEventListener('DOMContentLoaded', () => {
    if (aboutTabs) {
        aboutTabs[0].click();
    }
});
aboutTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();
        aboutTabs.forEach((a) => {
            a.classList.remove("active");
        });
        tab.classList.add("active");
        aboutContents.forEach((c) => {
            c.classList.remove("active");
        });
        const activeTab = tab.dataset.section;
        document.getElementById(activeTab).classList.add("active");
        if (activeTab === "experience") {
            const experiences = document.querySelector(".experience-list");
            // you can insert your experience 
            const experienceList = [{
                id: 1,
                date: " 2023 - Present",
                Position: "Freelance web Developer",
                company: "self-Employed",
                details: " Built responsive websites using HTML, CSS, and JavaScript, focusing on modern UI/UX design."
            }, {
                id: 2,
                date:"2024 - Present",
                Position: "Software Development Enthusiast",
                company: "BCA Student (CSJMU)",
                details: " Developing core logic in C++ and Python while mastering Backend structures with PHP and SQL."
            }, {
                id: 3,
                date: "2025 - Present",
                Position:"Tech Content Creator",
                company: "Social Media",
                details: " Creating educational coding content and '100 Days of Code' series to simplify programming for beginners."
            },
            {
                id: 4,
                date: "2023 - Present",
                Position: "Graphic Designer",
                company: "Freelance / Content Creation",
                details: "Expertise in CorelDRAW to create professional logos, social media assets, and UI components for the '100 Days of Code' series."
            }
        ];
            const experienceContent = experienceList.map((ele) => {
                return `
                <div class="experience-box" key=${ele?.id}>
                    <h4>${ele?.date}</h4>
                    <h3>${ele?.Position}</h3>
                    <div class="company-name">
                        <span></span>
                        <p>${ele?.company}</p>
                    </div>
                    <p>${ele?.details}</p>
                </div>
                `
            }).join("");
            if (experiences) {
                experiences.innerHTML = experienceContent;
            }
        } else if (activeTab === "education") {
            const education = document.querySelector(".education-list");
            // you can insert your education details
            const educationList = [{
                id: 1,
                date: " 2023 - 2026",
                degree: "BCA (Bachelor of Computer Applications)",
                institution: "CHHATRAPATI SHAHU JI MAHARAJ UNIVERSITY",
                details: "Currently pursuing BCA with a focus on software development, data structures, and web technologies. Actively building projects using C, C++, Java and Python."
            }, {
                id: 2,
                date: " 2021 - 2023",
                degree: "Higher Secondary (Class XII)",
                institution: "SDIC Tilasra Kanpur Nagar ",
                details: "Successfully completed High Secondary education in Science stream (Physics, Chemistry, Mathematics). Developed a strong analytical foundation for technical studies."
            }, {
                id: 3,
                date: "2019 - 2021",
                degree: "High School (Class X)",
                institution: "SDIC Tilasra Kanpur Nagar",
                details: "Completed High School, focusing on building strong basic concepts in core subjects including Mathematics, Science, and Social Sciences. Developed fundamental analytical skills."
            }, {
                id: 4,
                date: "2025",
                degree: "Diploma in Web Development",
                institution: "STP COMPUTER EDUCATION",
                details: "Successfully completed a comprehensive 12-month Web Development course. The program is ISO 9001:2015 certified and registered under the Ministry of MSME, Govt. of India."
            },{
                id: 5,
                date: " 2026",
                degree: " Python for Beginners",
                institution: "Simplilearn (SkillUp)",
                details: "Successfully completed the 'Python for Beginners' course, demonstrating a commitment to deepening programming logic and core Python skills."
            },{
                id: 6,
                date: " 2025 - 2026",
                degree: " Career Edge - Young Professional",
                institution: "TCS iON",
                details: "A comprehensive course by Tata Consultancy Services covering Communication Skills, Presentation Skills, Soft Skills, Business Etiquette, and Foundational IT skills."
            },{
                id: 7,
                date: "2026",
                degree: " Java Programming for Beginners",
                institution: "Simplilearn (SkillUp)",
                details: "Completed the 'Java Programming for Beginners' course, demonstrating a strong interest in learning core Object-Oriented Programming principles."
            },{
                id: 8,
                date: "2024",
                degree: " Python Bootcamp",
                institution: "IES's Management College and Research Centre",
                details: "Successfully completed the Python Bootcamp organized by AVENIR, Analytics Club, IESMCRC on March 29, 2024."
            }

            ];
            const educationContent = educationList.map((ele) => {
                return `
                <div class="experience-box" key=${ele?.id}>
                    <h4>${ele?.date}</h4>
                    <h3>${ele?.degree}</h3>
                    <div class="company-name">
                        <span></span>
                        <p>${ele?.institution}</p>
                    </div>
                    <p>${ele?.details}</p>
                </div>
                `
            }).join(" ");
            if (education) {
                education.innerHTML = educationContent;
            }
        } else if (activeTab === "skills") {
            const skills = document.querySelector('.skill-list');
            const skillList = [{
                id: 1,
                name: "Html Hyper text markup language",
                icon: "assets/html.png"
            }, {
                id: 2,
                name: "CSS",
                icon: "assets/css.png"
            }, {
                id: 3,
                name: "javaScript",
                icon: "assets/js.png"
            }, {
                id: 4,
                name: "SQL, PhP",
                icon: "assets/mongodb.png"
            }, {
                id: 5,
                name: "C Programming ",
                icon: "assets/c.png"
            }, {
                id: 6,
                name: "c++ Programming",
                icon: "assets/c++.png"
            },{
                id: 6,
                name: "Java Programming",
                icon: "assets/java.png"
            },{
                id: 6,
                name: "Python Programming",
                icon: "assets/python.png"
            },{
                id: 6,
                name: "PHP",
                icon: "assets/php.png"
            },{
                id: 6,
                name: "Graphic Designer",
                icon: "assets/graphic.png"
            }
            
            ];
            const skillContant = skillList.map((ele) => {
                return `
                <div class="skill-box" key=${ele?.id}>
            <img src=${ele?.icon}
            alt="${ele?.name}" 
            title="${ele?.name} " 
            loading="lazy"/>
            </div>
            `;
            }).join("");
            if (skills) {
                skills.innerHTML = skillContant;
            }
        } else if (activeTab === "about-me") {
            const myInfo = document.querySelector(".my-info");
            const infoList = [
                {
                    id: 1,
                    key: "Name : ",
                    value: "Abhay "
                },
                  {
                    id: 1,
                    key: "Country : ",
                    value: "India"
                },
                  {
                    id: 2,
                    key: "Industry : ",
                    value: "Software & IT"
                },
                {
                    id: 3,
                    key: "State  ",
                    value: "Uttar Pradesh"
                },
                {
                    id: 4,
                    key: "Address : ",
                    value: "Patara Kanpur Nagar"
                },
                {
                    id: 5,
                    key: "Pin code :  ",
                    value: "209308"
                },
                {
                    id: 6,
                    key: "Mo. Number :  ",
                    value: "+91 6393675143"
                }
            ];
            const infoContent = infoList.map((ele) => {
                return `
                <div class="info-box" key=${ele?.id}>
                    <span>${ele?.key}</span>
                    <span>${ele?.value}</span>
                </div>
            `;
            }).join("");
            if (myInfo) {
                myInfo.innerHTML = infoContent;
            }
        }
    });
});