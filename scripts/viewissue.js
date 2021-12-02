"use strict";

window.onload = function(){
    var area = document.getElementsByTagName('main')[0];

    var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            area.innerHTML = this.responseText; //display results in the result section
        }
    };

    //var url = "php/viewissue.php?" + "issue_id=" + sessionStorage.getItem('this_issue');
    var url = "php/viewissue.php?" + "issue_id=100";

    xhttp.open("GET", url); //specify the request type and where file is located in this case the file is in the same folder
    xhttp.send(); //send php the character to find

    var close_button = document.getElementsByClassName("closebtn")[0];
    var progress_button = document.getElementsByClassName("progressbtn")[0];

    close_button.addEventListener("click", function(e){
        var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                location.assign("viewissue.html");
            }
        };

        //var url = "php/viewissue.php?" + "issue_id=" + sessionStorage.getItem('this_issue');
        var url = "php/closebtn.php?" + "issue_id=100";

        xhttp.open("GET", url); //specify the request type and where file is located in this case the file is in the same folder
        xhttp.send(); //send php the character to find
    }

    progress_button.addEventListener("click", function(e){
        var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                location.assign("viewissue.html");
            }
        };

        //var url = "php/progresbtn.php?" + "issue_id=" + sessionStorage.getItem('this_issue');
        var url = "php/progresbtn.php?" + "issue_id=100";

        xhttp.open("GET", url); //specify the request type and where file is located in this case the file is in the same folder
        xhttp.send(); //send php the character to find
    }

}