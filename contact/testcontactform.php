<?php
$to = "sebpark03@yahoo.com";
$subject = "My subject";
$txt = "Hello world!";
$headers = "From: sebpark03@gmail.com";

if(mail($to, $subject, $txt)){
    echo "The email($subject) was successfully sent.";
} else {
    echo "The email($subject) was NOT sent.";
}
?>