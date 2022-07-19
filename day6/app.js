const box = document.querySelector(".box");
const result = document.querySelector('.result');
const ekey = document.querySelector('.key p:last-child');
const elocation = document.querySelector('.location p:last-child');
const ewhich = document.querySelector('.which p:last-child');
const ecode = document.querySelector('.code p:last-child');
const alert = document.querySelector('.alert');
document.addEventListener("keydown",(e)=>
{
    let keyName = e.code === "Space"? 'Space' : e.key
    ekey.innerText = keyName;
    elocation.innerText= e.location;
    ewhich.innerText= e.code;
    ecode.innerText= e.code;
    result.innerText= keyName;

    alert.classList.add('hide');
    box.classList.remove('hide')
}
)
