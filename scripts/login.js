"use strict";

window.onload = function(){
    var login_button = document.getElementsByClassName("button")[0];
    var email = document.getElementById("email");
    var pword = document.getElementById("password");

    login_button.addEventListener("click", function(e){
        e.preventDefault();
        var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText == " Found "){
                    location.assign("homepage.html");
                }else{
                   //alert("Try Again");
                    alert(this.responseText);
                }
            }
        };

        var url = "php/login.php?" + "email=" + email.value + "&pword=" + pword.value;

        xhttp.open("GET", url); //specify the request type and where file is located in this case the file is in the same folder
        xhttp.send(); //send php the character to find
    });
}