<?php

if(!empty($_POST['name']) or !empty($_POST['vin'])) {
$service = $_POST['service'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$eq = $_POST['equipping'];
$vin = $_POST['vin'];




if(empty($_POST['vin']))
{
    

    if(mb_strlen($name) > 30)
    {
        return False;
    }


    $text = "<b>Новая заявка</b>

Имя: ".$name."
Телефон: ".$phone."
Услуга: ".$service;
}
else
{

    if(mb_strlen($vin) > 60)
    {
        return False;
    }


    $text = "<b>Новая заявка</b>

VIN: ".$vin."
Телефон: ".$phone."

". implode(", ",$eq);

}

 

file_get_contents('https://api.telegram.org/bot5701776764:AAFoMQbT5wTHbNSASLrCUALNYIvtaNf4rTg/sendMessage?parse_mode=HTML&text='.urlencode($text).'&chat_id=-1001949094438');

echo 'Заявка отправлена';
}
?>