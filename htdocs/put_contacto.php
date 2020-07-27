<?php
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type');
   header('Access-Control-Allow-Methods: PUT, GET');

   include_once("bd.php");
   $datos = file_get_contents("php://input");
   $datos = json_decode($datos);
   actualizar("insert into contacto (nombre, email, subject, mensaje) values ('$datos->nombre', '$datos->email', '$datos->subject', '$datos->mensaje')");
   consultar("select * from contacto");

?>