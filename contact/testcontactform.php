<!-- <?PHP
$sender = 'sebpark03@gmail.com';
$recipient = 'd9808952@urhen.com';

$subject = "php mail test";
$message = "php test message";
$headers = 'From:' . $sender;

if (mail($recipient, $subject, $message, $headers))
{
    echo "Message accepted\n and sent to ".$recipient." from " .$sender;
}
else
{
    echo "Error: Message not accepted";
}
?> -->

<?php
$to      = 'd9808952@urhen.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers))
    {
        echo "Message accepted\n and sent to ".$recipient." from " .$sender;
    }
    else
    {
        echo "Error: Message not accepted";
    }?>