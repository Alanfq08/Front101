//References
const header=document.querySelector('header');
const menuToggle=document.querySelector('.toggle');
const menu=document.querySelector('.menu');
const contactForm=document.querySelector('#contactForm');
const mailTo=document.querySelector('#mailTo')

window.addEventListener('scroll', () =>{
    header.classList.toggle('sticky', window.scrollY>0);
    /*menuToggle.classList.toggle('blackIcon', window.scrollY>0);*/
    
})

const toggleMenu=()=>{
    menuToggle.classList.toggle('activate');
    menu.classList.toggle('activate');

}

contactForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const form=new FormData(contactForm);
    mailTo.setAttribute("href", `mailTo:alanfq8@hotmail.com?Subject=Hola, yo soy ${form.get("name")}, Te quiero contactar&body=email:${form.get("email")}, message:${form.get("message")}`);
    mailTo.click();
})