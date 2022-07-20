const tag_input = document.querySelector('.tag_input');
const input = document.querySelector('.tag_input input')
const removeall = document.querySelector('.remove_all')

let tags=['nodejs','node js'];
function render(){
    tag_input.innerHTML = '';
    const newTags=[...new Set(tags)]     //new Set( array ): dùng để lọc phần tử trùng nhau
    newTags.forEach((tag) => {
       
        tag_input.innerHTML += `<li>
                                    ${tag}
                                    <i class="fa-solid fa-xmark" onclick="removeTag()"></i>
                                </li>
                               `
    })
    tag_input.appendChild(input)
    input.focus();
    
}
render(tags)
input.addEventListener("keydown",(e)=>
{
    if (e.key== 'Enter')
    {
        console.log("có chạy xuống")
        tags.push(input.value.trim())
        input.value=''
        render()
    }
    }
)
function removeTag(index){
    tags.splice(index,1)
    render()
}
removeall.addEventListener("click",()=>
{
    if(tags.length!=0){
        tags=[];
        render(tags);
    }

})