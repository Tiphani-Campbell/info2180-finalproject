<?php
    session_start();
    $issueid = $_GET['issueid'];
    $webpage= $_GET['page'];
    
    
    $_SESSION['logged_in']= true;
    $_SESSION['this_issue'] = $issueid;
    header( "Location: http://localhost/info2180-finalproject/viewissue.html" );
?>


