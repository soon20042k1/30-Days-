const newtodoform = document.querySelector('.creatTodo');
const list = document.querySelector('.list');
const delete_com =  document.querySelector('.delete_com');
const delete_all =  document.querySelector('.delete_all');
const delete_detail= document.querySelector('.delete_detail')
todos= JSON.parse(localStorage.getItem('todos')) || []


window.addEventListener('load',()=>{
   
    todos= JSON.parse(localStorage.getItem('todos')) || []
    DisplayTodos()
})
newtodoform.addEventListener('submit',e => {
        e.preventDefault();
        console.log(e.target.input_create.value)
        if(e.target.input_create.value!='')
        {
        const todo = {
            content: e.target.input_create.value,
            category: e.target.category.value,
            done:false,
            createAt: new Date().getTime()
        }
        todos.push(todo);
        localStorage.setItem('todos',JSON.stringify(todos));

        e.target.reset();
        DisplayTodos()
    }
    else{
        alert("Please enter the content !")
    }
})
function DisplayTodos(){
    list.innerHTML ="";
    todos.forEach(todo=>{
        const todo_item = document.createElement('div');
        todo_item.classList.add('todo_item');
            const label = document.createElement('label');
                 const input = document.createElement('input'); 
                 const span = document.createElement('span');
            const content = document.createElement('div');
            content.classList.add('todo_content');
            const action = document.createElement('div');
            action.classList.add('action');
                 const edit = document.createElement('button');
                 edit.classList.add('edit');
                 const deleteButton = document.createElement('button');
                 deleteButton.classList.add('delete');
            input.type = 'checkbox';
            input.checked= todo.done;
            span.classList.add('bubble');
            if(todo.category == 'priority'){
                span.classList.add('priority');

            }
            else{
                span.classList.add('normal');
            }
            content.innerHTML = `<input type = "text" value ="${todo.content}" readonly>`;
            edit.innerHTML='Edit';
            deleteButton.innerHTML='Delete';
            
            label.appendChild(input);
            label.appendChild(span);
            action.appendChild(edit);
            action.appendChild(deleteButton);
            todo_item.appendChild(label);
            todo_item.appendChild(content);
            todo_item.appendChild(action);
            list.appendChild(todo_item);

            if(todo.done){
                todo_item.classList.add('done')
            }
            input.addEventListener('change',(e)=> {
                todo.done = e.target.checked;
                if(todo.done){
                    todo_item.classList.add('done');
                }
                else{
                    todo_item.classList.remove('done');
                }
                localStorage.setItem('todos',JSON.stringify(todos));
               }
            )
            
            edit.addEventListener('click',(e)=>{
                const input = content.querySelector('input');
                input.removeAttribute('readonly');
                input.focus();
                edit.innerHTML = 'Save';
                edit.classList.add('chosen')
                input.addEventListener('blur',(e)=>{
                    edit.classList.remove('chosen');
                    edit.innerHTML = 'Edit';
                    input.setAttribute('readonly',true);
                    todo.content=e.target.value;
                    localStorage.setItem('todos',JSON.stringify(todos));
                    DisplayTodos();
                })
              

           })
           deleteButton.addEventListener('click',(e)=>{
                todos= todos.filter(t => t !=todo);
                localStorage.setItem('todos',JSON.stringify(todos));
                DisplayTodos()
           })
            
         })
         delete_detail.classList.remove('hide');
       if(todos.length ==0){
            delete_detail.classList.add('hide');
       }
}
delete_all.addEventListener('click',(e)=>{
    todos=[];
    localStorage.setItem('todos', JSON.stringify(todos))
    DisplayTodos()
})
delete_com.addEventListener('click',(e)=>{
   let count =0
    
    todos.forEach(todo =>{
        if(todo.done){
            count++
            todos= todos.filter(t => t !=todo);//nếu nó là true mảng không thay đổi nếu là false phần tử đó sẽ được lọc ra khỏi mảng ban đầu .
        }
    })
    if (count !=0){
    localStorage.setItem('todos',JSON.stringify(todos));
    DisplayTodos()
    }
    else{
       alert("No task has been completed")
    }

})

