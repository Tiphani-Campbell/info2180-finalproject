<?php
    $fname = strip_tags($_GET['fname']);
    $lname = strip_tags($_GET['lname']);
    $pssword = strip_tags($_GET['password']);
    $email = strip_tags($_GET['email']);

    $host = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'bugme';

    $tday = date("Y-m-d h:i:sa");

    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $stmt = $conn->query("INSERT INTO users(firstname,lastname,password,email,date_joined) VALUES ('$fname','$lname',MD5('$pssword'),'$email','$tday')");

    if ($stmt):
        ?> "User added" <?php
        return "";
    else:
        ?> "User not added. Try Again" <?php
        return "";
    endif;

?>