<?php

include_once 'db.php';

class Socio extends DB{
    
    function obtenerSocios(){
        $query = $this->connect()->query('SELECT * FROM socio');
        return $query;
    }

    function obtenerSocio($id){
        $query = $this->connect()->prepare('SELECT * FROM socio WHERE id = :id');
        $query->execute(['id' => $id]);
        return $query;
    }
    
}

?>