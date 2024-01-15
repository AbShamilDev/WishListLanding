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

$sql = "SELECT  FROM wishstate";
$result = $conn->query($sql);

if (!$result) {
    die("Ошибка выполнения запроса: " . $mysqli->error);
}

$data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

$json_data = json_encode($data);

echo $json_data;

$conn->close();


?>