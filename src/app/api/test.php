<?php
header('Access-Control-Allow-Origin: *');



    include_once 'apisocios.php';

    $api = new ApiSocios();

        $api->listarTodos();


//echo "Hola";
    
?>