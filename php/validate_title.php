<?php
    $title = $_GET['title'];
    $titlen=strlen($title);

    if ($titlen<3):
        ?>Please enter a title<?php
        return "";
    endif;
    if (!preg_match("/^[a-zA-Z0-9-# ]*$/",$title)|| $titlen>100):
        ?>Title is invalid, it should be under 100 charactors and not have non-numerical and non-aphabatical values.<?php
        return "";
    endif;
    ?> <?php
    return "";
?>
