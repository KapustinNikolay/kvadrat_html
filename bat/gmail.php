<?php
require 'class.phpmailer.php'; // path to the PHPMailer class
require 'class.smtp.php';

$mail = new PHPMailer(); // create a new object
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for GMail
$mail->Host = "smtp.gmail.com";
$mail->Port = 587; // or 587
$mail->IsHTML(true);
$mail->Username = "asdasd@gmail.com";
$mail->Password = "asdasdasd";
$mail->SetFrom("sdfsdfn@gmail.com");
$mail->Subject = "Test";
$mail->Body = "hello";
$mail->AddAddress("sdfsdf@gmail.com");
 if(!$mail->Send())
    {
    echo "Mailer Error: " . $mail->ErrorInfo;
    }
    else
    {
    echo "Message has been sent";
    }