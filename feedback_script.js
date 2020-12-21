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
alert("Feedback allowed only to bmsce ids!");
document.form1.email.focus();
return false;
}
}