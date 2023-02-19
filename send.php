<?php
$name = $_POST['name'];
$text = $_POST['text'];
$name = htmlspecialchars($name);
$text = htmlspecialchars($text);
$name = urldecode($name);
$text = urldecode($text);
$name = trim($name);
$text = trim($text);
// echo $fio;
// echo "<br>";
// echo $email;
if (mail("gattikostya@gmail.com", "Отзыв о сайте", "Имя:".$name.". Отзыв: ".$text ,"From: 78@bomset.zzz.com.ua \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
