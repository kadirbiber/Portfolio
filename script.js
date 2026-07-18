const menuButton=document.getElementById("menuButton");
const navLinks=document.getElementById("navLinks");
menuButton.addEventListener("click",()=>navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const form=document.getElementById("contactForm");
form.addEventListener("submit",e=>{
e.preventDefault();
const name=document.getElementById("name").value.trim()||"visitor";
document.getElementById("formMessage").textContent=`Thank you, ${name}! Your message has been received.`;
form.reset();
});

document.getElementById("year").textContent=new Date().getFullYear();

const topButton=document.getElementById("topButton");
window.addEventListener("scroll",()=>topButton.style.display=window.scrollY>500?"block":"none");
topButton.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));