<?php
    $fname = strip_tags($_POST['fname']);
    $lname = strip_tags($_POST['lname']);
    $pssword = strip_tags($_POST['password']);
    $email = strip_tags($_POST['email']);

    $host = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'bugme';

    date_default_timezone_set('Jamaica');
    $tday = date("Y-m-d h:i:sa");

    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $stmt = $conn->query("INSERT INTO users(firstname,lastname,password,email,date_joined) VALUES ('$fname','$lname',MD5('$pssword'),'$email','$tday')");

    if ($stmt):
        ?> User added <?php
        return "";
    else:
        ?> User not added. Try Again <?php
        return "";
    endif;

?>