<?php
    $host = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'bugme';


    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->query("SELECT id, firstname, lastname FROM users;");
    $stmt->execute();
    $ids = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($ids) {
        // show the publishers
        foreach ($ids as $id) {
            echo '<option value="'.$id['id'].'"> '.$id['firstname'].' '. $id['lastname']. '</option>';
        }
    }
    

    ?>
    