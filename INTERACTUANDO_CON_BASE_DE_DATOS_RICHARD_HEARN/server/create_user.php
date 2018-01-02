<?php
	/*script para agregar los 3 usuarios a la base de datos*/
	require('db.php');

	$con = new mysqli($host, $user, $pass, $databaseName);
	if($con->connect_error){
		echo "Error: " .$con->connect_error ;
	}else{
		echo "conexion exitosa";
	}

	$datos['correo'][0] = "'mario@gmail.com'";
    $datos['nombre'][0] = "'mario gonzalez'";
    $psw='123';
    $datos['psw'][0] = "'".password_hash($psw, PASSWORD_DEFAULT)."'";
    $datos['fecha'][0] = "'1995-07-11'";
    $datos['correo'][1] = "'raul@gmail.com'";
    $datos['nombre'][1] = "'Raul Jimenez'";
    $psw='1234';
    $datos['psw'][1] = "'".password_hash($psw, PASSWORD_DEFAULT)."'";
    $datos['fecha'][1] = "'1990-03-11'";
    $datos['correo'][2] = "'paris@gmail.com'";
    $datos['nombre'][2] = "'Paris Hilton'";
    $psw='12345';
    $datos['psw'][2] = "'".password_hash($psw, PASSWORD_DEFAULT)."'";
    $datos['fecha'][2] = "'1989-09-21'";

	$sql = "INSERT INTO usuario
	VALUES (".$datos['correo'][0].",".$datos['nombre'][0].",".$datos['psw'][0].",".$datos['fecha'][0]."),
	(".$datos['correo'][1].",".$datos['nombre'][1].",".$datos['psw'][1].",".$datos['fecha'][1]."),
	(".$datos['correo'][2].",".$datos['nombre'][2].",".$datos['psw'][2].",".$datos['fecha'][2].");";

	if ($con->query($sql) === TRUE) {
    	echo "Se ingresaron los datos correctamente";
	} else {
    	echo "Error: " . $sql . "<br>" . $con->error;
	}

	$con->close();


 ?>
