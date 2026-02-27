const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");

toggle.addEventListener("click",()=>{nav.classList.toggle("active");});

window.addEventListener("scroll",()=>{
const header=document.querySelector(".header");
header.style.background=window.scrollY>50?"rgba(0,0,0,0.95)":"transparent";
});

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("visible");
}
});
},{threshold:0.2});

sections.forEach(section=>observer.observe(section));