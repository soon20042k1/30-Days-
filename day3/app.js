const modal = document.querySelector(".modal");
const open = document.querySelector(".open");
const imge = document.querySelector(".header_modal i");
const close = document.querySelector(".close");
function toggleModal(){
    modal.classList.toggle("hide")
}
open.addEventListener("click",toggleModal);
imge.addEventListener("click",toggleModal);
close.addEventListener("click",toggleModal);
modal.addEventListener("click",function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})