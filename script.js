let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;

function validationform() {
    if(username.value == "")  {
        document.getElementById("usererror").innerHTML = "user name is empty";
        flag = 0;
        // console.log("ok");

    }

   else if(password.value == ""){
        document.getElementById("passerror").innerHTML = "password is empty";
        flag = 0;
        // console.log("ok");

    }
    else if (username.value.length < 3) {
        document.getElementById("usererror").innerHTML = "user name requre min 3";
       
        flag = 0;
    }
    else {
        document.getElementById("usererror").innerHTML = "";
        document.getElementById("passerror").innerHTML = "";
        flag = 1;
    }
 

    
   

    if (flag) {
        return true;
    }
    else {
        return false
    }
}
