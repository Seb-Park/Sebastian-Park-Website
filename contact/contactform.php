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
    echo("<h1>Form sent!</h1> \n Thanks for your feedback!");
}
else{
    echo("<h1>Order 66 Executed Error</h1>\n Form not sent...");
}
echo("\n php WORKS!");
header("Location: thank-you"); 
exit;

?>