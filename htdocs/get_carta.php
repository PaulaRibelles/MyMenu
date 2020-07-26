<?php
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type');
   header('Access-Control-Allow-Methods: PUT, GET');

   include_once("bd.php");
    $restaurante=$_GET ["restaurante"];
   consultar("select p.nombre, p.precio, p.ingredientes, p.categoria from productos p, restaurantes r, carta c where c.restaurante=$restaurante and c.restaurante = r.id and c.producto = p.id");

?>