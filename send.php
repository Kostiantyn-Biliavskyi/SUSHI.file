<?php
$fio = $_POST['fio'];
$text = $_POST['text'];
$fio = htmlspecialchars($fio);
$text = htmlspecialchars($text);
$fio = urldecode($fio);
$text = urldecode($text);
$fio = trim($fio);
$text = trim($text);
// echo $fio;
// echo "<br>";
// echo $email;
if (mail("gattikostya@gmail.com", "Отзыв о сайте", "ФИО:".$fio.". Отзыв: ".$text ,"From: ponhcikred@gmail.com \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>