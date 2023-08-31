   let width =window.innerWidth



 window.addEventListener("resize" , ()=>{

 
if (window.innerWidth<= 800) {
    document.querySelector("#clips").classList.remove('clips'); 
    document.querySelector("#clips").classList.add('clips1'); 

} 
else{
    
    document.querySelector("#clips").classList.add('clips');
    document.querySelector("#clips").classList.remove('clips1');
}


}) 


if (width <=800) {
    document.querySelector("#clips").classList.add('clips1');
    document.querySelector("#clips").classList.remove('clips');
   }






