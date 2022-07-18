const imgs = document.querySelectorAll(".wrap_img img");
const close = document.querySelector(".close");
const pre = document.querySelector(".pre");
const next = document.querySelector(".next");
const gallery = document.querySelector(".gallery");
const gallery_img = document.querySelector(".ga_img img");

let currentIndex = 0;
imgs.forEach((img,index)=>{
   
    img.addEventListener("click",()=>{
        console.log("hehe");
        currentIndex=index;
        showGallery();
    })
})
function showGallery(){
    if(currentIndex== imgs.length-1){
        next.classList.add("hide");
    }
    else 
     {next.classList.remove("hide");
      };
    if(currentIndex== 0){
        pre.classList.add("hide");
    }
    else 
     {pre.classList.remove("hide");
      };
    gallery.classList.add("show");
    gallery_img.src = imgs[currentIndex].src;
}
next.addEventListener("click",()=>{
    if (currentIndex!= imgs.length-1)
        currentIndex++;
    undefined
    showGallery();
}
)
pre.addEventListener("click",()=>{
    if (currentIndex!= 0)
        currentIndex--;
    undefined
    showGallery();
}
)
close.addEventListener("click",()=>{
    gallery.classList.remove("show");
})
