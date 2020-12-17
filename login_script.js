function validateform()
{  
    var username=document.form.username.value;  
    var password=document.form.password.value;  
    if(username=="username" && password=="Password1") //dummy username and password
    {  
        alert("Logged in as username");
        return true;
    }
    else if(username!="username")    
    {  
      alert("no account found");  
      return false;  
    }
    else(password!="Password1")    
    {  
      alert("wrong password");  
      return false;  
    }   
    
} 