<?php
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$street = $_POST['street'];
	$home = $_POST['home'];
	$part = $_POST['part'];
	$flat = $_POST['flat'];
	$floor = $_POST['floor'];
	$comment = $_POST['comment'];
	$payment = $_POST['money'];

	$callback = $_POST['callback'];
	$callback = isset($disturb) ? 'НЕТ' : 'ДА';
	
	$mail_message = '
		<html>
			<head>
				<title>Заявка</title>
			</head>
			<body>
				<h2>Заказ</h2>
				<ul>
					<li>Имя: ' . $name . '</li>
					<li>Телефон: ' . $phone . '</li>
					<li>Улица: ' . $street . '</li>
					<li>Дом: ' . $home . '</li>
					<li>Корпус: ' . $part . '</li>
					<li>Квартира: ' . $flat . '</li>
					<li>Этаж: ' . $floor . '</li>
					<li>Способ оплаты: ' . $money . '</li>
					<li>Комментарии к заказу: ' . $comment . '</li>
					<li>Нужно ли перезванивать клиенту: ' . $callback . '</li>
				</ul>
			</body>
		</html>
	';
	
	$headers = "From: Администратор сайта <order@burgers.ru>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('oleg-t@live.ru', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }
?>