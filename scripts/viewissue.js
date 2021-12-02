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
}