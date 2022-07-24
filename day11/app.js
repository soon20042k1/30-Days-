const button = document.querySelectorAll('.control button');
button.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        createToast(e.target.getAttribute('class'))
   })
})
const toasts={
    success:{
        icon: '<i class="fa-solid fa-circle-check"></i>',
        msg:'This is a success message !',
    },
    error:{
        icon:' <i class="fa-solid fa-circle-exclamation"></i>',
        msg:'This is a error message !',
    },
    warning:{
        icon:' <i class="fa-solid fa-circle-exclamation"></i>',
        msg:'This is a warning message !',
    },
}
function createToast (status){
    let toast = document.createElement('div');
    toast.className=`toast ${status}`
    toast.innerHTML=`${toasts[status].icon}
                    <span class="message">${toasts[status].msg}</span>
                    <span class = "countdown"></span>
                    `
    document.querySelector('.toasts').appendChild(toast)
    setTimeout(() => {
		toast.style.animation = 'hide_slide 1s ease forwards'
	}, 2000)
	setTimeout(() => {
		toast.remove()
	}, 4000)

}