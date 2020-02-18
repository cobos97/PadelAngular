<?php
//creación de la API, que será una clase que nos permita manejar todas las funciones y comportamientos de la api


//incluimos el archivo que contiene todas las funcionalidades de la clase Socio
include_once 'Socio.php';

// aquí no incluiremos las funcionalidades de la clase Socio sino las propias de la API
class ApiSocios{

    //variable para introducir en ella el mensaje de error de cualquiera de los errores al intentar subir el archivo
    private $error;
    //variable para contener el nombre de la foto para poder accederla posteriormente
    private $foto;

/* función de la API para obtener todos los registros mediante la devolución de un objeto Socio
    que después tendremos que parsear para convertir en un json*/
    function listarTodos(){
        // creación de instancia del objeto Socio
        $socio = new Socio();
        // creación del array que tendrá a todos los Socios
        $socios = array();
        /*array de objetos llamado Socios y lo iniciamos con un array para que luego el
          objeto al parsearlo devuelva el listado de Socios, es decir, tendremos un array con 
          un elemento listaSocios cuyo contenido será otro array*/
        $socios["listaSocios"] = array();
        /*creamos una variable rest de tipo objeto (Socio) para meter la respuesta de la consulta
         a la BD y poder obtener la funcionalidad del método obtenerSocios*/
        $res = $socio->obtenerSocios();
        //comprobación si la respuesta contiene alguna fila y si es así parseamos el resultado

       
        if($res->rowCount()){

            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
                $cadaSocio=array(
                    "id" => $row['id'],
                    "nombre" => $row['nombre'],
                    "apellidos" => $row['apellidos'],
                    "correo" => $row['correo'],
                    "lugar" => $row['lugar'],
                );
                
                array_push($socios["listaSocios"], $cadaSocio);
            }
            $this->printJSON($socios);
        }else{
            $this->error('No hay Socios');
        }

        
    }


    //función que obtiene el Socio cuyo número de Socio coincide con el pasado como parámetro
    function obtenerPorNumSocio($numSocio){

        // creación de instancia del objeto Socio
        $socio = new Socio();
         // creación del array que tendrá a todos los Socios
        $socios = array();
        /*array de objetos llamado Socios y lo iniciamos con un array para que luego el
           objeto al parsearlo devuelva el listado de Socios, es decir, tendremos un array con 
           un elemento listaSocios cuyo contenido será otro array*/
        $socios["listaSocios"] = array();
        /*creamos una variable rest de tipo objeto (Socio) para meter la respuesta de la consulta
         a la BD y poder obtener la funcionalidad del método obtenerSocios*/
        $res = $socio->obtenerSocio($numSocio);
         //comprobación si la respuesta contiene alguna fila y si es así parseamos el resultado
        if($res->rowCount() == 1){
            //obtenemos solo 1 fila correspondiente al Socio seleccionado
            $row = $res->fetch();
            //creamos el objeto json correspondiente al Socio
            $cadaSocio=array(
                "numSocio" => $row['numSocio'],
                "nombre" => $row['nombre'],
                "foto" => $row['foto'],
            );
             /*insertar el Socio cuyo número de Socio coincide con el pasado como parámetro
             en el array $socios con el elemento listaSocio (que era un array)*/
            array_push($socios["listaSocios"], $cadaSocio);
            //llamar a la función para parsear e imprimir el array Socios pasado como parámetro
            $this->printJSON($socios);
        }else{
            // llamada a la función error con el mensaje correspondiente
            $this->error('No existe ese Número de Socio');
        }
    }

//función para añadir un nuevo Socio
    function anadir($cadaSocio){ 
        // creación de instancia del objeto Socio
        $socio = new Socio();
        // creamos el la variable res de tipo objeto Socio para añadirlo a la BD mediante el método nuevoSocio
        $res = $socio->nuevoSocio($cadaSocio);
        //llamada a la función exito con el mensaje correspondiente
        $this->exito('Nuevo Socio dado de alta');
    }

//función para parsear mensaje de error
    function error($mensaje){
        //parseamos e imprimimos el mensaje pasado como parámetro
        echo '<code>' . json_encode(array('mensaje' => $mensaje)) . '</code>'; 
    }
//función para parsear un mensaje de éxito
    function exito($mensaje){
        //parseamos e imprimimos el mensaje pasado como parámetro
        echo '<code>' . json_encode(array('mensaje' => $mensaje)) . '</code>'; 
    }
//función para parsear e imprimir  el array pasado como parámetro
    function printJSON($array){
        //parseamos e imprimimos el array pasado como parámetro
        echo json_encode($array);
    }


//función para recuperar un mensaje de error
    function obtenerError(){
        return $this->error;
    }
}

?>