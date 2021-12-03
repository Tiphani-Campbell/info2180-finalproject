<?php
    $title = strip_tags($_GET['title']);
    $descript = strip_tags($_GET['description']);
    $assign = strip_tags($_GET['assignment']);
    $type= strip_tags($_GET['type']);
    $priority = strip_tags($_GET['priority']);
    $status = "OPEN";
    $id=1;
    

    $host = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'bugme';

    $tday = date("Y-m-d h:i:sa");

    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $stmt = $conn->query("INSERT INTO issues(title, description, type, priority, status, assigned_to, created_by, created) VALUES ('$title','$descript','$type','$priority','$status','$assign','$id','$tday')");

    if ($stmt):
        ?> Issue added <?php
        return "";
    else:
        ?> Issue not added. Try Again <?php
        return "";
    endif;

?>