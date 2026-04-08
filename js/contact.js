const media = document.querySelector('.contact-media');
const contactList = [
    {
    id:1,
    icon:"ph ph-phone-call",
    name:"Phone",
    value:"+91 6393675143",
    href:"Tel+ 6393675143"
    },
    {
         id:1,
    icon:"ph ph-envelope",
    name:"Email",
    value:"abhybhi359@gmail.com",
    href:"abhaybhi359@gmail.com"
    },
    {
         id:1,
    icon:"ph ph-map-pin-area",
    name:"Country",
    value:"India",
    href:"#"
    }  
];
const contactContent = contactList.map((ele) => {
    return`
           <div class="media" key=${ele?.id}>
            <span><i class="${ele?.icon}"></i></span>
            <div class="contact-value">
              <p>${ele?.name} </p>
              <a href=${ele?.href}>${ele?.value}</a>
            </div>
          </div>
    `;
}).join("");
if (media) media.innerHTML = contactContent; 
//send contact message 
const sentBtn = document.querySelector("#send-msg");
const originalText = sentBtn.innerHTML;
const originalStyle = {
  backgroundColor:sentBtn.style.backgroundColor,
  color:sentBtn.style.color,
  border:sentBtn.style.border,
  boxShadow:sentBtn.style.boxShadow
};

document.getElementById('contact-form').addEventListener('submit',(event) =>{
  event.preventDefault();
  sentBtn.innerHTML = "Sending...!";
  sentBtn.style.backgroundColor = "gray";
  sentBtn.style.color = "white";
  sentBtn.style.border = "none";
  sentBtn.style.boxShadow = "none";
  sentBtn.disabled = false;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone  = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  if (!name || !email || !phone || !message){
    sentBtn.innerHTML = originalText;
    Object.assign(sentBtn.style, originalStyle)
    return Toastify({
  text: "All Fields are Mandatory !",
  duration: 3000,
  gravity: "top", 
  close:true,
  position: "center", 
  stopOnFocus: true, 
  style: {
    background: "rgb(206, 16, 16)",
  },
}).showToast();
  }
  emailjs.send("service_j9fc3vp","template_c4323nv",{
    name, email, phone, message
  }).then(() => {
       Toastify({
  text: "Message sent  !",
  duration: 3000,
  gravity: "top", 
  close:true,
  position: "center", 
  stopOnFocus: true, 
  style: {
    background: "rgb(9, 222, 38)",
  },
}).showToast();
setTimeout(() => {
  sentBtn.innerHTML = originalText;
  Object.assign(sentBtn.style, originalStyle);
  sentBtn.disabled = false;
}, 2000)
      }, (error) => {
        Toastify({
  text: "Message Failed !",
  duration: 3000,
  gravity: "top", 
  close:true,
  position: "center", 
  stopOnFocus: true, 
  style: {
    background: "rgb(206, 16, 16)",
  },
}).showToast();
      console.log('FAILED...', error);
  });
});


