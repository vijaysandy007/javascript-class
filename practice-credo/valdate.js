function validation(){

var user = document.getElementById("username").value;
var password = document.getElementById("password").value;
var confoirmpassword = document.getElementById("confirmpass").value;
var mobileno = document.getElementById("mobilenumber").value;
var email = document.getElementById("email").value;

if(user ==""){

document.getElementById("user1").innerHTML ="username is blank";
return false;


}
if((user.length <3) || (user.length >20)){

document.getElementById("user1").innerHTML =" Username should be min 3 max 20";

return false;
}


if (!isNaN(user)){

document.getElementById("user1").innerHTML =" Only in character";
return false;

}



if(password ==""){

    document.getElementById("pass1").innerHTML ="password is blank";
    return false;
    
    }

    if((password.length <5) || (password.length > 20)){

document.getElementById ("pass1").innerHTML = "password should min 5 max 20";
return false;



    }

    if(confoirmpassword ==""){

        document.getElementById("pass2").innerHTML ="confirm password is blank";
        return false;
        

        
        }

       if(password!==confoirmpassword){

document.getElementById("pass2").innerHTML = "Confirm password not matching";


       }

        if(mobileno ==""){

            document.getElementById("mobiles").innerHTML ="mobile number is blank";
            return false;
            
            }

if(mobileno.length!=10){

    document.getElementById("mobiles").innerHTML ="mobile number shoul be 10";
    return false;
    

}

if(isNaN(mobileno)){

    document.getElementById("mobiles").innerHTML ="mobile number should number only";
    return false;

}
            
                if(email ==""){

                    document.getElementById("email").innerHTML ="email id is blank";
                    return false;
                    
                    }
    

if(email.indexOf('@') <= 0) {

    document.getElementById("email").innerHTML ="email id @ is wrong";
    return false;
    


}      

if((email.charAt(email.length-4) !='.') && (email.charAt(email.length -3) !='.' )){

    document.getElementById("email").innerHTML ="email id . com or .in is wrong";
    return false;
    


}

}
