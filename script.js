const passwordOne = document.getElementById("passwordOne");
const passwordTwo = document.getElementById("passwordTwo");
const errorMsg = document.getElementById("errorMsg");

passwordOne.addEventListener('input', checkPasswords);

passwordTwo.addEventListener('input', checkPasswords);

function checkPasswords()
{
    if (passwordOne.value != passwordTwo.value)
    {
        errorMsg.innerHTML="*Passwords Don\'t Match";
        passwordOne.style.border = "2px solid red";
        passwordTwo.style.border = "2px solid red";
    }
    else
    {
        errorMsg.innerHTML="";
    }
}