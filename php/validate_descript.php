<?php
    $description = $_GET['description'];
    $descriptionlen=strlen($description);
    if ($descriptionlen<10):
        ?>Description needs to be longer<?php
        return "";
    endif;
    if (!preg_match("/^[a-zA-Z 0-9.,-\.'\"]*$/",$description)):
        ?>Description is invalid<?php
        return "";
    endif;
    ?> <?php
    return "";
?>
