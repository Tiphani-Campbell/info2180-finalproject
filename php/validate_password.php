<?php
    $password = $_GET['password'];

    if ($password !== strip_tags($password)):
        ?> invalid password <?php
        return "";
    endif;

    if (!preg_match('/[0-9]/', $password)):
        ?> password weak, add a number <?php
        return "";
    endif;

     if (!preg_match('/[A-Z]/', $password)):
        ?> password weak, add a capital letter <?php
        return "";
     endif;

     if (strlen($password) < 8):
        ?> password weak, too short <?php
        return "";
     endif;
     ?><?php
     return "";
?>
