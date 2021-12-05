    var createissue=document.getElementsByClassName("homebutton")[0];
    var tickets=document.getElementById("tickets");
    var opentick=document.getElementById("open");
    var mytickets=document.getElementById("mytickets");
    var all=document.getElementById("all");
    var us=document.getElementById("newuser");
    var usb=document.getElementById("newuserbr");

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

    var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object

    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            tickets.innerHTML = this.responseText; //display results in the result section
            var t=document.getElementsByClassName("ititle");
            for (var i =0; i< t.length; i++){
                t[i].addEventListener("click", function(e){
                    e.preventDefault();
                    sessionStorage.setItem('this_issue', this.id);
                    let page = "viewissue.html";
                    let nextState = {page : URLformat(page)};
                    history.pushState(nextState, null, URLformat(page));
                    requestContent(page);
                });
            }
            function URLformat(page){
                var pageName = page.split('.');
                return pageName[0];
            }

            function requestContent(filename){
                $('main').load(filename);
            }
        }
    };

    var url = "php/getissues.php?";
    xhttp.open("GET", url); //specify the request type and where file is located in this case the file is in the same folder
    xhttp.send(); //send php the character to find

    createissue.addEventListener("click",function(e){
        e.preventDefault();
        requestContent("newissue.html");
    });

    opentick.addEventListener("click",function(e){
        e.preventDefault();
        var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
        xhttp.onreadystatechange = function(){
             if (this.readyState == 4 && this.status == 200) {
               tickets.innerHTML = this.responseText; //display results in the result section

             }
        };

        var url = "php/openfilter.php?";
        xhttp.open("GET", url); //specify the request type and where file is located in this case the file is in the same folder
        xhttp.send(); //send php the character to find


    });

    mytickets.addEventListener("click",function(e){
        e.preventDefault();
        var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                tickets.innerHTML = this.responseText; //display results in the result section

            }
        };

        var url = "php/mytickets.php?";
        xhttp.open("GET", url); //specify the request type and where file is located in this case the file is in the same folder
        xhttp.send(); //send php the character to find


        });

    all.addEventListener("click",function(e){
        e.preventDefault();
        var xhttp = new XMLHttpRequest(); //create XMLHttpRequest object
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                tickets.innerHTML = this.responseText; //display results in the result section

            }
        };

        var url = "php/getissues.php?";
        xhttp.open("GET", url); //specify the request type and where file is located in this case the file is in the same folder
        xhttp.send(); //send php the character to find


        });

function requestContent(page){
    $("main").load(page);
}
