<?php
	require('db.php');
	require('lib.php');

	$username = $_POST['username'];
	$passw = $_POST['passw'];
	$con = new ConectorBD($host,$user,$pass);

  $response['conexion'] = $con->initConexion($databaseName);



    if ($response['conexion']=='OK') {
    $resultado_consulta = $con->consultar(['usuario'],
    ['correo', 'psw'], 'WHERE correo="'.$username.'"');

    if ($resultado_consulta->num_rows != 0) {
      $fila = $resultado_consulta->fetch_assoc();

      if (password_verify($passw, password_hash($fila['psw'], PASSWORD_DEFAULT))) {

        $response['acceso'] = 'concedido';
				session_start();
        $_SESSION['username']=$fila['correo'];
      }else {

        $response['motivo'] = 'Contraseña incorrecta';
        $response['acceso'] = 'rechazado';
      }
    }else{

      $response['motivo'] = 'Email incorrecto';
      $response['acceso'] = 'rechazado';
    }
  } else {
  	$response['acceso'] = 'Error al intentar conectar la base de datos';
  }

  echo json_encode($response);

  $con->cerrarConexion();

 ?>
