<?php
function consultar($consulta) { 
    $bd = new mysqli("localhost", 'root', '', "restaurantes");
    $resultado = $bd->query($consulta);
    if ($resultado !== TRUE) {
        while($linea = $resultado->fetch_object()) 
        { 
            $json[] = $linea; 
        }
    }
    echo json_encode($json);
}
?>