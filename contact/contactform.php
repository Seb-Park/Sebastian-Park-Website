<?php
if(isset($_POST['submit'])){

    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $message = $_POST['message'];

    $emailTo = "sparksoftgame@gmail.com";
    $headers = "FROM: " . $emailFrom;
    $txt = "You have received an email from " . $name .".\n\n". $message;

    mail($emailTo, "New Message", $txt, $headers);

    header("Location: index.html");
}

?>