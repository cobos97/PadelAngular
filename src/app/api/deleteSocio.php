<?php
header('Access-Control-Allow-Origin: *');

/*
    include_once 'apisocios.php';

    $api = new ApiSocios();

    $api->anadir($_GET['nombre'], $_GET['apellidos'], $_GET['correo'], $_GET['lugar']);
*/

$servername = "localhost";
$username = "dwes";
$password = "abc123.";
$dbname = "padel_angular";

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "DELETE FROM socio WHERE id=$_GET[id]";

if ($conn->query($sql) === TRUE) {
    echo "New record deleted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

    
?>