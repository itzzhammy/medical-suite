<?
$name = $_POST{'name'};
$email = $_POST{'email'};
$phone = $_POST{'phone'};
$subject = $_POST{'subject'};
$message = $_POST['message'];

$email_message = "

Name: ".$name."
Email: ".$email."
Phone: ".$phone."
Subject: ".$subject."
Message: ".$message."

";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

mail ("humza.murtaza@gmail.com" , "New Message", $email_message, $headers );
header("location: ../mail-success.html");
?>


