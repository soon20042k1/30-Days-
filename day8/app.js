const btnRegister = document.querySelector('.btn_login');

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cfpassword = document.getElementById('cfpassword');

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = checkValidate();
    if(isValid){
        alert('Gửi đăng ký thành công')
    }
})
//Đầu tiên chúng ta sẽ truy cập vào nút " Đăng ký" và tiến hành lắng nghe sự kiện khi người dùng click vào nút này

//tiến hành khai báo function checkValidate()
function checkValidate(){
    let usernameValue = username.value.trim() ;
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let cfpasswordValue = cfpassword.value.trim();
   

    let isCheck =true;

    if(usernameValue ==''){
       
        setError(username,'Username is required');
        isCheck = false;
    }
    else if (!isUsername(usernameValue)){
       
        setError(username,'Your name is not in the correct format ');
        isCheck = false;
    }
    else setSuccess(username);

    if(emailValue ==''){
        setError(email,'Email is required');
        isCheck = false;
    }
    else if (!isEmail(emailValue)){
        setError(email,'Your email is not in the correct format ');
        isCheck = false;
    }
    else setSuccess(email);

    if(passwordValue ==''){
        console.log(passwordValue)
        setError(password,'Password is required');
        isCheck = false;
    }
    else if (!isPassword(passwordValue)){
        setError(password,'Your password is not in the correct format ');
        isCheck = false;
    }
     else setSuccess(password);
     console.log(cfpasswordValue);
    if(cfpasswordValue ==''){
        setError(cfpassword,'Confirm password is required');
        isCheck = false;
    }
    
    else if (!isCfpassword(password,cfpassword)){
        
        setError(cfpassword,'Your confirm password is not same password');
        isCheck = false;
    }
    
    else setSuccess(cfpassword);
    
    return isCheck;
}
function setError(ele,message){
    let parentEle = ele.parentElement;
    //console.log(parentEle);
    parentEle.classList.add('error');
    const small = parentEle.querySelector('small');
   
    small.innerHTML= message;   
  
}

function setSuccess(e){
    
    let parentNode=e.parentNode;
    parentNode.classList.add('success');
    parentNode.classList.remove('error');
    let small = parentNode.querySelector('small');
    small.innerText='';
   
    //console.log(parentNode);
}
function isEmail(email) {
    
    return /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(email);
}
function isUsername(username){
    return /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(username);
}
function isPassword(password){
   
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password); //Tối thiểu tám ký tự, ít nhất một chữ cái và một số:
}
function isCfpassword(password,cfpassword){
    
    let passwordValue = password.value;
    console.log(passwordValue)
    let cfpasswordValue = cfpassword.value;
    console.log(cfpasswordValue)
    let correct = true;
    if (passwordValue!==cfpasswordValue){
        correct=false;
      
    }
    console.log(correct);
   return correct;
}