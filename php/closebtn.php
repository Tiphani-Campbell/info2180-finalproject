<?php
    session_start();
    $issue_id = $_SESSION['this_issue'];

    $host = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'bugme';


    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $stmt = $conn->query("UPDATE issues SET status = 'CLOSED' WHERE id = '$issue_id'");

?>