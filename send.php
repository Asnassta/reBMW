<?php

if(!empty($_POST['name'])){
$service = $_POST['service'];
$name = $_POST['name'];
$phone = $_POST['phone'];
if(mb_strlen($name) > 30)
{
    return False;
}


$text = "<b>Новая заявка</b>

Имя: ".$name."
Телефон: ".$phone."
Услуга: ".$service;
file_get_contents('https://api.telegram.org/bot5701776764:AAFoMQbT5wTHbNSASLrCUALNYIvtaNf4rTg/sendMessage?parse_mode=HTML&text='.urlencode($text).'&chat_id=-1001949094438');

echo 'Заявка отправлена';
}
?>