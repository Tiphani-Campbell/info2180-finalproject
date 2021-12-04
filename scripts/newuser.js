
    /* getting button, input fields and error display items from doc */
    var submit_button = document.getElementsByClassName("subbutton")[0];
    var firstname_input = document.getElementById("firstname");
    var lastname_input = document.getElementById("lastname");
    var password_input = document.getElementById("password");
    var email_input = document.getElementById("email");

    var ferror = document.getElementById("fname_error");
    var lerror = document.getElementById("lname_error");
    var perror = document.getElementById("password_error");

    var us=document.getElementById("newuser");
    var usb=document.getElementById("newuserbr");

    //variable to store email validity
    var rt = "";

    var xhttp1 = new XMLHttpRequest(); //create XMLHttpRequest object

    xhttp1.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText != "True"){
                    us.remove();
                    usb.remove();
                }
            }
        };

    var url = "php/isadmin.php?";
    xhttp1.open("GET", url); //specify the request type and where file is located in this case the file is in the same folder
    xhttp1.send(); //send php the character to find

    /**
    * function that checks if email provided is valid
    * it changes the value of rt to be invalid email if invalid or empty string if valid
    **/
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

    /**
    * function that checks if first name provided is valid
    * it displays invalid name in ferror if the name is invalid or empty string elsewise
    **/
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

    /**
    * function that checks if last name provided is valid
    * it displays invalid name in lerror if the name is invalid or empty string elsewise
    **/
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

    /**
    * function that checks if password provided is valid
    * it displays invalid password in perror if the name is invalid,
    * weak password and a description of what is needed
    * or empty string elsewise
    **/
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

    /**
    * function used to add user to database
    */
    submit_button.addEventListener("click", function(e){
        e.preventDefault();
        val_email();
        if (ferror.innerHTML == "invalid name" || lerror.innerHTML == "invalid name" || perror.innerHTML == "invalid password" || perror.innerHTML == "weak password"){
            alert("edit invalids/weak");
        } else if (rt == "invalid email") {
            alert("invalid email");
        }else{
            var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
            xhttp.onreadystatechange = function(){
                 if (this.readyState == 4 && this.status == 200) {
                   var re = String(this.responseText);
                   if (re == " User added "){
                      firstname_input.value = "";
                      lastname_input.value = "";
                      password_input.value = "";
                      email_input.value = "";
                      alert(re); //display results in the result section
                   }else{
                      alert(re);
                   }
                 }
            };

            var que = "fname=" + String(firstname_input.value) + "&lname=" + String(lastname_input.value) + "&password=" + String(password_input.value) + "&email=" + String(email_input.value);

            xhttp.open("POST", "php/newuser.php"); //specify the request type and where file is located in this case the file is in the same folder
            xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhttp.send(que); //send php the character to find
        }
    });
