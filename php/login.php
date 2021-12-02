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


    if ($stmt):
        $_SESSION['logged_in']= true;
        ?> Found <?php
        return "";
    else:
        ?> Not Found <?php
        return "";
    endif;

?>