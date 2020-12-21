function ValidateEmail(inputText)
{
var mailformat = /@bmsce.ac.in\s*$/;
if(inputText.value.match(mailformat))
{
alert("Feedback Submitted!");
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