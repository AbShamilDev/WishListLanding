<?php
$hostname = "localhost:3306";
$username = "cj31032_wishes";
$password = "123";
$dbname = "cj31032_wishes";

$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
    die("Ошибка подключения к базе данных: " . $conn->connect_error);
} 

$id = $_POST['id'];
$value = $_POST['newVal'];

// SQL-запрос для обновления данных в базе
$sql = "UPDATE `wishstate` SET `Бронь`= $value WHERE id = $id";

// Подготовка запроса
$stmt = $conn->prepare($sql);

if (!$stmt) {
    die("Ошибка подготовки запроса: " . $conn->error);
}

// Привязка параметров
$stmt->bind_param("ii", $value, $id);

// Выполнение запроса
if ($stmt->execute()) {
    echo "Данные успешно обновлены";
} else {
    echo "Ошибка при обновлении данных: " . $stmt->error;
}

// Закрытие соединения и освобождение ресурсов
$stmt->close();
$conn->close();
?>