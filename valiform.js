const form=document.querySelector('#form')
const username=document.querySelector('#username')

const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();

})
function validateInputs()
{
const usernameVal=username.value.trim()
const emailVal=email.value.trim()
const passwordVal=password.value.trim()

const cpasswordVal=cpassword.value.trim()
if(usernameVal==='')
{
    setError(username,'username is required')

}
else{
    alert("signup successful")
    

}
if(passwordVal==='')
{
    setError(password,'password is required')

}
else{
    setSuccess(password)
}
}
function setError(element,message)
{
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')
    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('error')
}
function setSuccess(element)
{
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')
    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('error')
}
