<?php
    session_start();
    $pssword = strip_tags($_GET['pword']);
    $email = strip_tags($_GET['email']);

    $host = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'bugme';

    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $stmt = $conn->query("SELECT * FROM users WHERE email='$email' AND password=MD5('$pssword')");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (sizeof($results) === 1):
        $_SESSION['logged_in']= true;
        $_SESSION['user_id']= $results[0]['id'];
        ?> Found <?php
        return "";
    else:
        ?> Not Found <?php
        return "";
    endif;

?>