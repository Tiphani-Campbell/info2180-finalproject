<?php
    session_start();
    $issue_id = $_SESSION['this_issue'];

    $host = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'bugme';

    date_default_timezone_set('Jamaica');
    $tday = date("Y-m-d h:i:sa");

    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $stmt = $conn->query("UPDATE issues SET status = 'CLOSED', updated = '$tday' WHERE id = '$issue_id'");

?>