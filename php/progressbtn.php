<?php
    $issue_id = strip_tags($_GET['issue_id']);

    $host = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'bugme';


    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $stmt = $conn->query("UPDATE issues SET status = 'In Progress' WHERE id = '$issue_id'");

?>