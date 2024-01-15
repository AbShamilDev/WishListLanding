<?
$hostname = "127.0.0.1:3306";
$username = "cj31032_wishes";
$password = "123";
$dbName = "cj31032_wishes";

$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
    die("Ошибка подключения к базе данных: " . $conn->connect_error);
}

// Выполнение запроса к базе данных
$sql = "SELECT * FROM wishstate";
$result = $conn->query($sql);

// Получение данных и отправка их в формате JSON
if ($result->num_rows > 0) {
    $data = array();
    while($row = $result->fetch_assoc()) {
        $data[] = $row["Бронь"];
    }
    echo json_encode($data);
} else {
    echo "Нет данных для отображения";
}

// Закрытие соединения с базой данных
$conn->close();
?>