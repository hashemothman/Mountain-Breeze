//select arow in contact page animation
const selectArow =document.querySelector('.ho-form-name img');
const select =document.querySelector('.ho-form-name select');
const body =document.querySelector('body');

select.addEventListener("click",()=>{
    selectArow.classList.toggle('ho-arow');
})

//text area animation in contact page
const textArea = document.querySelector('ho-text-area textarea');
const textAreaMessage =document.querySelector('.ho-text-area .ho-form-textarea');


function hideMessage(){
    textAreaMessage.style.display = "none"  
}
//select arow in learn more page

const dateArow=document.querySelector('#right');
const catogeryArow=document.querySelector('#left');
console.log(dateArow)

dateArow.addEventListener("click",()=>{
    document.querySelector('.ho-date-arow').classList.toggle('ho-arow');
})
catogeryArow.addEventListener("click",()=>{
    document.querySelector('.ho-catogery-arow').classList.toggle('ho-arow');
})