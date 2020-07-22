<?php
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type');
   header('Access-Control-Allow-Methods: PUT, GET');

   include_once("bd.php");
    $restaurante=$_GET ["restaurante"];
   consultar("select * from imagenes where restaurante=$restaurante");

?>