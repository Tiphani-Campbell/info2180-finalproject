<?php
    $name = $_GET['name'];

    if (!preg_match("/^[a-zA-Z-']*$/",$name)):
        ?> invalid name <?php
        return "";
    endif;
    ?> <?php
    return "";
?>
