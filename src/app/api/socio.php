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

    function nuevoSocio($nombre, $apellidos, $correo, $lugar){
        /*
        $query = $this->connect()->prepare('INSERT INTO socio (nombre, apellidos, correo, lugar) VALUES (:nombre, :apellidos, :correo, :lugar');
        $query->execute(['nombre' => $nombre, 'apellidos' => $apellidos, 'correo' => $correo, 'lugar' => $lugar]);
        */

        $query = $this->connect()->prepare('INSERT INTO socio (nombre, apellidos, correo, lugar) VALUES ("pepe", "gomez", "correo", "lugar"');
        $query->execute();

        return true;
    }
    
}

?>