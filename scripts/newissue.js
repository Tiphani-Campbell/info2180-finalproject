"use strict";

window.onload=function(){
    /*gettting button and input fields and storing them in a variable*/
    var submitbtn=document.getElementsByClassName("submitbtn")[0];
    var title= document.getElementById("title");
    var descript=document.getElementById("description");
    var assign= document.getElementById("assign");
    var typ= document.getElementById("type");
    var priority= document.getElementById("priority");

    var titerror= document.getElementById("title_error");
    var deserror= document.getElementById("descrip_error");
    

    

    var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            assign.innerHTML = this.responseText; //display results in the result section
        }
    };

    //var url = "php/viewissue.php?" + "issue_id=" + sessionStorage.getItem('this_issue');
    var url = "php/getuser.php?";
    xhttp.open("GET", url); //specify the request type and where file is located in this case the file is in the same folder
    xhttp.send(); //send php the character to find

    title.oninput = function(e){
        var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
        xhttp.onreadystatechange = function(){
             if (this.readyState == 4 && this.status == 200) {
               titerror.innerHTML = this.responseText; //display results in the result section
             }
        };

        var url = "php/validate_title.php?" + "title=" + String(this.value);

        xhttp.open("GET", url); //specify the request type and where file is located in this case the file is in the same folder
        xhttp.send(); //send php the character to find

   };

   descript.oninput = function(e){
    var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
    xhttp.onreadystatechange = function(){
         if (this.readyState == 4 && this.status == 200) {
           deserror.innerHTML = this.responseText; //display results in the result section
         }
    };

    var url = "php/validate_descript.php?" + "description=" + String(this.value);

    xhttp.open("GET", url); //specify the request type and where file is located in this case the file is in the same folder
    xhttp.send(); //send php the character to find
  

    };

    
    submitbtn.addEventListener("click", function(e){
        e.preventDefault();
        var titv=titerror.value;
        var desv=deserror.value;
        if (titerror.innerHTML=="Please enter a title" || titerror.innerHTML=="Title is invalid, it should be under 100 charactors and not have non-numerical and non-aphabatical values." || deserror.innerHTML=="Description needs to be longer" || deserror.innerHTML=="Description is invalid"){
            alert("edit invalids/weak");
        }else{
            var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
            xhttp.onreadystatechange = function(){
                 if (this.readyState == 4 && this.status == 200) {
                   var re = this.responseText;
                   if (re == " Issue added "){
                      title.value="";
                      descript.value="";
                      alert(re); //display results in the result section
                   }else{
                      alert(re);
                   }
                 }
            };
            var url = "php/newissue.php?" + "title=" + String(title.value) + "&description=" + String(descript.value) + "&assignment=" + String(assign.value) + "&type=" + String(typ.value)+ "&priority=" + String(priority.value);

            xhttp.open("GET", url); //specify the request type and where file is located in this case the file is in the same folder
            xhttp.send(); //send php the character to find
        }

    });


};