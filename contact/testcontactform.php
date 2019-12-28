<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Instantiation and passing `true` enables exceptions
// if($_POST['submit']){

    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $message = $_POST['message'];

    echo $message;

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
        $mail->isSMTP();                                            // Send using SMTP
        $mail -> Host = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'contactsparksoft@gmail.com';                     // SMTP username
        $mail->Password   = "asdfghjkl;'";                               // SMTP password
        // $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
        $mail->SMTPSecure = 'ssl';
        // $mail->Port       = 587;                                    // TCP port to connect to
        $mail->Port = '465';

        //Recipients
        $mail->setFrom($emailFrom, $name);
        $mail->addAddress('sparksoftgame@gmail.com');     // Add a recipient
        // $mail->addAddress('ellen@example.com','Ellen Example');               // Name is optional
        $mail->addReplyTo($emailFrom, $name);
        // $mail->addCC('cc@example.com');
        // $mail->addBCC('bcc@example.com');

        // Attachments

        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'You were contacted by ' . $name;
        // $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
        $mail->Body    = "<b>" . $emailFrom . " says: </b> <br> " . $message;
        $mail->AltBody = $message;

        $mail->send();
        echo 'Message has been sent';
        header("Location: thank-you"); 
        echo 'redirected';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo} <br> Redirecting in 5 seconds...";
        sleep(5);
        header("Location: ../"); 
    }
// }
// else{
    // echo('Message not sent...');
// }
?>