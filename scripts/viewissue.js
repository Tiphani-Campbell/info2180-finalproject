"use strict";

window.onload = function(){
    var area = document.getElementsByTagName('main')[0];

    var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            area.innerHTML = this.responseText; //display results in the result section
            var stat = document.getElementById("status-info");
            var barea = document.getElementById("button-area");
            if (stat.innerHTML == " Open "){
                barea.insertAdjacentHTML('afterbegin','<button type="button" class="closedbtn">Mark as Closed</button><button type="button" class="progressbtn">Mark In Progress</button>');
                var close_button = document.getElementsByClassName("closedbtn")[0];
                var progress_button = document.getElementsByClassName("progressbtn")[0];

                close_button.addEventListener("click", function(e){
                    var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
                    xhttp.onreadystatechange = function(){
                        if (this.readyState == 4 && this.status == 200) {
                            location.assign("viewissue.html");
                        }
                    };

                    //var que =  "issue_id=" + sessionStorage.getItem('this_issue');
                    var que =  "issue_id=100";

                    xhttp.open("POST", "php/closebtn.php"); //specify the request type and where file is located in this case the file is in the same folder
                    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    xhttp.send(que); //send php the character to find
                });

                progress_button.addEventListener("click", function(e){
                    var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
                    xhttp.onreadystatechange = function(){
                        if (this.readyState == 4 && this.status == 200) {
                            location.assign("viewissue.html");
                        }
                    };

                    //var que = "issue_id=" + sessionStorage.getItem('this_issue');
                    var que =  "issue_id=100";

                    xhttp.open("POST", "php/progressbtn.php"); //specify the request type and where file is located in this case the file is in the same folder
                    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    xhttp.send(que); //send php the character to find
                });
            } else if (stat.innerHTML == " In Progress "){
                barea.insertAdjacentHTML('afterbegin','<button type="button" class="closedbtn">Mark as Closed</button>');
                var close_button = document.getElementsByClassName("closedbtn")[0];
                close_button.addEventListener("click", function(e){
                var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
                xhttp.onreadystatechange = function(){
                    if (this.readyState == 4 && this.status == 200) {
                        location.assign("viewissue.html");
                    }
                };

                //var que =  "issue_id=" + sessionStorage.getItem('this_issue');
                var que =  "issue_id=100";

                xhttp.open("POST", "php/closebtn.php"); //specify the request type and where file is located in this case the file is in the same folder
                xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhttp.send(que); //send php the character to find
            });
            }
        }
    };

    //var url = "php/viewissue.php?" + "issue_id=" + sessionStorage.getItem('this_issue');
    var url = "php/viewissue.php?" + "issue_id=100";

    xhttp.open("GET", url); //specify the request type and where file is located in this case the file is in the same folder
    xhttp.send(); //send php the character to find


}