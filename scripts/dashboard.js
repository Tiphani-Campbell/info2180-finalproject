"use strict";
window.onload=function(){
    $('main').load("homepage.html");
    $('a').on('click', function(event){
        
        let page = $(this).attr("href");
        if(page != "php/logout.php"){
            event.preventDefault();
            let nextState = {page : URLformat(page)};
            if(page == "homepage.html"){
                history.pushState(nextState, null, URLformat(page));
                requestContent(page);
            }else if(page == "newuser.html"){
                history.pushState(nextState, null, URLformat(page));
                requestContent(page);
            }else if(page == "newissue.html"){
                history.pushState(nextState, null, URLformat(page));
                requestContent(page);
            }else if(page == "viewissue.html"){
                history.pushState(nextState, null, URLformat(page));
                requestContent(page);
            }
        }
        
        
    });
    $(window).on('popstate',function(e){
        let page = history.state.page;
        let filename = page + '.html';
    
        requestContent(filename);
    });
    
    function URLformat(page){
        var pageName = page.split('.');
        return pageName[0];
    }
    
    function requestContent(filename){
        $('main').load(filename);
    }
    
    
};
