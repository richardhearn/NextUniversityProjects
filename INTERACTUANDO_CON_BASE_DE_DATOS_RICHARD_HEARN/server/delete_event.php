<?php
	require('db.php');
	require('lib.php');
	session_start();

  if(isset($_SESSION['username'])){

    $con = new ConectorBD($host,$user,$pass);
    $condicion = "id = ".$_POST['id'];
    $response['conexion'] = $con->initConexion($databaseName);

    if ($response['conexion']=='OK') {

        $con->eliminarRegistro("evento", $condicion);
        $response['msg'] = "OK";

      } else { 

        $response['msg'] = "Error de conexion a la base de datos";

      }
    }else {

      $response['msg'] = "Error inesperado de sesion de usuario";

    }
  	
    echo json_encode($response);
 ?>
