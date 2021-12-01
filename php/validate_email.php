<?php
    $email = $_GET['email'];

    if ($email !== strip_tags($email)):
        ?> invalid email <?php
        return "";
    endif;
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)):
        ?> invalid email <?php
        return "";
    endif;
    ?><?php
    return "";
?>
