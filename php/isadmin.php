<?php
    session_start();
    if ($_SESSION['user_id'] === "1"){
        ?>True<?php
    }else{
        ?>False<?php
    }
?>