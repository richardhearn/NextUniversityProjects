<?php
  require('db.php');
  require('lib.php');
  session_start();
  
  if(isset($_SESSION['username'])){
  	$con = new ConectorBD($host,$user,$pass);
    $response['conexion'] = $con->initConexion($databaseName);

	if (substr($_POST['end_date'], 0, 7) == 'Invalid'){
	$_POST['end_date'] = "";
	$data['end'] = "'".$_POST['end_date']."'";
	}else {
	$data['end'] = "'".$_POST['end_date']."'";
	}

    $data['start'] = "'".$_POST['start_date']."'";
    
    $condicion = "id = ".$_POST['id'];

    if($response["conexion"] == "OK"){
    	if (isset($_POST['id'])){
    		$con->actualizarRegistro("evento", $data, $condicion);
    		$response['msg'] = 'OK';
    	}else{
    		$response['msg'] = 'No se pudo el evento';
    	}
    	

    }else{
    	$response['msg'] = 'No se pudo conectar a la base de datos';
    }


  }else {
  	$response['msg'] = 'Error de sesion';
  }
  

  echo json_encode($response);

 ?>
