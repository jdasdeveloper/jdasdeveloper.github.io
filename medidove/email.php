<?php


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    # echo'entro al if';
    $message = "
     <span style='margin: 10px; display: block;'><b>Name:</b> ".$_POST['name']."</span>
     <span style='margin: 10px; display: block;'><b>Email:</b> ".$_POST['email']."</span>
     <span style='margin: 10px; display: block;'><b>Phone:</b> ".$_POST['phone']."</span>
     <span style='margin: 10px; display: block;'><b>Address:</b> <i>".$_POST['subject']."<i></span>
     <span style='margin: 10px; display: block;'><b>Message:</b> <i>".$_POST['message']."<i></span>
     ";

    $to = "josedandradeb@gmail.com";
    $subject = $_POST['subject'];

    $header = 'From: info@hsamedical.com' . "\r\n" .
    'Reply-To: info@hsamedical.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    $retval = mail($to, $subject, $message, $header);

    if ($retval == true) {
        echo "Message sent successfully...";
    } else {
        echo "Message could not be sent...";
    }
}
