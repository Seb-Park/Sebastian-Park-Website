<?php

    $name = "Johnny Appleseed";
    $emailFrom = "John.Apples.heed.sorry.seed@gmail.com";
    $message = "Hi I'm Johnny!!!";

    $emailTo = "sparksoftgame@gmail.com";
    $headers = "FROM: " . $emailFrom;
    $txt = "You have received an email from " . $name .".\n\n". $message;

    mail($emailTo, "New Message", $txt, $headers);

    header("Location: index.html");
    echo("<h1>Form sent!</h1> \n Thanks for your feedback!");
echo("\n php WORKS!");
header("Location: thank-you"); 
exit;

?>