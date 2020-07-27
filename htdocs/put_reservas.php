<?php
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type');
   header('Access-Control-Allow-Methods: PUT, GET');

   include_once("bd.php");
   $datos = file_get_contents("php://input");
   $datos = json_decode($datos);
   actualizar("insert into reserva (nombre, telefono, email, fecha, hora, personas, mensaje) values ('$datos->nombre', '$datos->telefono', '$datos->email', '$datos->fecha', '$datos->hora', '$datos->personas', '$datos->mensaje')");
   consultar("select * from reserva");

?>