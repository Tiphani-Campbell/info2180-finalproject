<?php
    session_start();
    $title = strip_tags($_GET['title']);
    $descript = strip_tags($_GET['description']);
    $assign = strip_tags($_GET['assignment']);
    $type= strip_tags($_GET['type']);
    $priority = strip_tags($_GET['priority']);
    $status = "OPEN";
    $id=$_SESSION['user_id'];


    $host = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'bugme';

    $message = addslashes($descript);
    date_default_timezone_set('Jamaica');
    $tday = date("Y-m-d h:i:sa");

    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $stmt = $conn->query("INSERT INTO issues(title, description, type, priority, status, assigned_to, created_by, created, updated) VALUES ('$title','$message','$type','$priority','$status','$assign','$id','$tday','$tday')");

    if ($stmt):
        ?> Issue added <?php
        return "";
    else:
        ?> Issue not added. Try Again <?php
        return "";
    endif;

?>