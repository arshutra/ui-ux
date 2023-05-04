   // contact FormData

   function open_form() {
    document.getElementById("contact_form").style.visibility = "visible"
}
function close_form() {
    document.getElementById("contact_form").style.visibility = "hidden"
}



// testamonial

function scrollTestimonials() {
    const testimonialContainer = document.querySelector('.testimonial-container');
    const testimonialHeight = testimonialContainer.querySelector('.testimonial').offsetHeight;
    setInterval(() => {
        testimonialContainer.scrollBy(0, testimonialHeight);
        if (testimonialContainer.scrollTop + testimonialContainer.offsetHeight >= testimonialContainer.scrollHeight) {
            testimonialContainer.scrollTop = 0;
        }
    }, 3000);
}

scrollTestimonials();


// hamberger

let hamburger = document.getElementById("hamburger")
let hamContent=document.getElementById("ham_content")
let active= document.getElementById("active")


hamburger.addEventListener("click", ()=>{
hamContent.style.display="block"
active.style.display="block"

2
})

active.addEventListener("click", ()=>{
hamContent.style.display="none"
active.style.display="none"

})

document.getElementById("ham_link").addEventListener("click",()=>{
hamContent.style.display="none"
active.style.display="none"

})