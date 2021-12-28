const π=(el)=>{
   return document.querySelector(el);
}

let header=π(".header");
let body=π('#pagebody')
let header_h1=π(".header_h1")
let header_menu=π("#menu")
let gotop=π('#gotop')

const menu_lines=document.querySelectorAll('.toggler-line')

const desk_links=document.querySelectorAll('.desklink')

const allheys=document.querySelectorAll("a");

allheys.forEach(el => {
   el.href="javascript:void(0)"
})

/* it prevents the gotop from performing 
  javascript:void(0) 
 Quick reminder Daniel:
 make sure the last "a* tag is beneath the last tag in the html file */
 
allheys[allheys.length-1].href="#top";



const showgotop=()=>{
   if (780< (document.body.scrollTop || document.documentElement.scrollTop)) {
      /* it shows gotop */
      gotop.classList.add("showgotop")
   }

   else {
      /* hides gotop*/
      gotop.classList.remove("showgotop")
   }
}


function reverse_transparency(){
   if(100<(document.body.scrollTop || document.documentElement.scrollTop)){
      header.style.backgroundColor="whitesmoke";
      header_h1.style.color="#ee3e80";
      
      desk_links.forEach(el=>{
         el.style.color="var(--east-bay)";
      })
   }
   
   else{
     header.style.backgroundColor="rgba(255,255,255,0)";
     header_h1.style.color="#fff"
     
     desk_links.forEach(el => {
        el.style.color = "#fff";
     })
     
   }
   showgotop();
}


window.addEventListener('scroll',reverse_transparency);


/*.  The onscroll animations for flex box*/

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView =(el,dividend)=>{
   const elementTop = el.getBoundingClientRect().top;
   
   return ((window.innerHeight || document.documentElement.clientHeight) / dividend >= elementTop
   );
};



const elementOutofView = (el) => {
   const elementTop = el.getBoundingClientRect().top;

   return (
      (window.innerHeight || document.documentElement.clientHeight) < elementTop
   );
};


const displayScrollElement = (element) => {
   element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
   element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
   scrollElements.forEach((el) => {
      if (elementInView(el, 1.3)) {
         displayScrollElement(el);
      } else if (elementOutofView(el)) {
         hideScrollElement(el)
      }
   })
}

window.addEventListener("scroll", () => {
   handleScrollAnimation();
});
