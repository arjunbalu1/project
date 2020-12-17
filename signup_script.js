function ValidateEmail(inputText)
{
var mailformat = /@bmsce.ac.in\s*$/;
if(inputText.value.match(mailformat))
{
document.form1.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.email.focus();
return false;
}
}
function CheckPassword(inputtxt) 
{ 
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(inputtxt.value.match(passw)) 
{ 
return true;
}
else
{ 
alert('Password must be 6 to 20 characters, at least one numeric digit, one uppercase and one lowercase letter')
return false;
}
}
var check = function() 
{
    if (document.getElementById('password').value == document.getElementById('confirmpassword').value) 
    {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';
    } 
    else 
    {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'not matching';
    }
}
function checkPassword(form) { 
    password = form.password.value; 
    confirmpassword = form.confirmpassword.value;  
    if (password != confirmpassword) { 
        alert ("\nPassword did not match: Please try again...") 
        return false; 
    } 
    else{ 
        alert("Account created") 
        return true; 
    } 
} 