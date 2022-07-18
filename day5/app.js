const search = document.querySelector(".search_btn");
search.addEventListener("click",function(){
    this.parentElement.classList.toggle("open");
    this.previousElementSibling.focus();
})