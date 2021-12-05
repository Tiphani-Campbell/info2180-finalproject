   var area = document.getElementsByTagName('main')[0];

    var xhttp1 = new XMLHttpRequest(); //create XMLHttpRequest object

    var us=document.getElementById("newuser");
    var usb=document.getElementById("newuserbr");

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

    var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            area.innerHTML = this.responseText; //display results in the result section
            var stat = document.getElementById("status-info");
            var barea = document.getElementById("button-area");
            if (stat.innerHTML == " OPEN "){
                barea.insertAdjacentHTML('afterbegin','<button type="button" class="closedbtn">Mark as Closed</button><button type="button" class="progressbtn">Mark In Progress</button>');
                var close_button = document.getElementsByClassName("closedbtn")[0];
                var progress_button = document.getElementsByClassName("progressbtn")[0];

                close_button.addEventListener("click", function(e){
                    var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
                    xhttp.onreadystatechange = function(){
                        if (this.readyState == 4 && this.status == 200) {
                            requestPage("viewissue.html");
                        }
                    };

                    var que =  "";

                    xhttp.open("POST", "php/closebtn.php"); //specify the request type and where file is located in this case the file is in the same folder
                    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    xhttp.send(); //send php the character to find
                });

                progress_button.addEventListener("click", function(e){
                    var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
                    xhttp.onreadystatechange = function(){
                        if (this.readyState == 4 && this.status == 200) {
                            requestPage("viewissue.html");
                        }
                    };

                    var que = "";

                    xhttp.open("POST", "php/progressbtn.php"); //specify the request type and where file is located in this case the file is in the same folder
                    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    xhttp.send(); //send php the character to find
                });
            } else if (stat.innerHTML == " IN PROGRESS "){
                barea.insertAdjacentHTML('afterbegin','<button type="button" class="closedbtn">Mark as Closed</button>');
                var close_button = document.getElementsByClassName("closedbtn")[0];
                close_button.addEventListener("click", function(e){
                var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
                xhttp.onreadystatechange = function(){
                    if (this.readyState == 4 && this.status == 200) {
                        requestPage("viewissue.html");
                    }
                };

                var que =  "";

                xhttp.open("POST", "php/closebtn.php"); //specify the request type and where file is located in this case the file is in the same folder
                xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhttp.send(); //send php the character to find
            });
            }
        }
    };


    var url = "php/viewissue.php?issueid="+ sessionStorage.getItem('this_issue');

    xhttp.open("GET", url); //specify the request type and where file is located in this case the file is in the same folder
    xhttp.send(); //send php the character to find

function requestPage(page){
    $("main").load(page);
}