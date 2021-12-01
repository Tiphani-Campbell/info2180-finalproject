"use strict";

window.onload = function(){
    var submit_button = document.getElementById("submit_button");
    var firstname_input = document.getElementById("firstname");
    var lastname_input = document.getElementById("lastname");
    var password_input = document.getElementById("password");
    var email_input = document.getElementById("email");

    var ferror = document.getElementById("fname_error");
    var lerror = document.getElementById("lname_error");
    var perror = document.getElementById("password_error");

    var rt = "";

    function val_email(){
        var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
        xhttp.onreadystatechange = function(){
             if (this.readyState == 4 && this.status == 200) {
               rt = this.responseText; //display results in the result section
             }
        };

        var url = "php/validate_email.php?" + "email=" + String(email_input.value);

        xhttp.open("GET", url); //specify the request type and where file is located in this case the file is in the same folder
        xhttp.send(); //send php the character to find
    }

    firstname_input.oninput = function(e){
         var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
         xhttp.onreadystatechange = function(){
              if (this.readyState == 4 && this.status == 200) {
                ferror.innerHTML = this.responseText; //display results in the result section
              }
         };

         var url = "php/validate_names.php?" + "name=" + String(this.value);

         xhttp.open("GET", url); //specify the request type and where file is located in this case the file is in the same folder
         xhttp.send(); //send php the character to find

    };

    lastname_input.oninput = function(e){
         var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
         xhttp.onreadystatechange = function(){
              if (this.readyState == 4 && this.status == 200) {
                lerror.innerHTML = this.responseText; //display results in the result section
              }
         };

         var url = "php/validate_names.php?" + "name=" + String(this.value);

         xhttp.open("GET", url); //specify the request type and where file is located in this case the file is in the same folder
         xhttp.send(); //send php the character to find

    };

    password_input.oninput = function(e){
         var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
         xhttp.onreadystatechange = function(){
              if (this.readyState == 4 && this.status == 200) {
                perror.innerHTML = this.responseText; //display results in the result section
              }
         };

         var url = "php/validate_password.php?" + "password=" + String(this.value);

         xhttp.open("GET", url); //specify the request type and where file is located in this case the file is in the same folder
         xhttp.send(); //send php the character to find

    };

    submit_button.addEventListener("click", function(e){
        val_email();
        if (ferror.innerHTML == "invalid name" || lerror.innerHTML == "invalid name" || perror.innerHTML == "invalid password" || perror.innerHTML == "weak password"){
            alert("edit invalids/weak");
        } else if (rt == "invalid email") {
            alert("invalid email");
        }else{
            var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
            xhttp.onreadystatechange = function(){
                 if (this.readyState == 4 && this.status == 200) {
                   alert(this.responseText); //display results in the result section
                 }else{
                    console.log(this.readyState + "status: " + this.status);
                 }
            };

            var url = "php/newuser.php?" + "fname=" + String(firstname_input.value) + "&lname=" + String(lastname_input.value) + "&password=" + String(password_input.value) + "&email=" + String(email_input.value);

            xhttp.open("GET", url); //specify the request type and where file is located in this case the file is in the same folder
            xhttp.send(); //send php the character to find
        }
    });
}