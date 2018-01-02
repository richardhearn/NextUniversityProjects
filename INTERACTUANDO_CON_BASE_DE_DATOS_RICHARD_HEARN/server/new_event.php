<?php

require('db.php');
require('lib.php');
session_start();

if(isset($_SESSION['username'])){
  $con = new ConectorBD($host,$user,$pass);
  $response['conexion'] = $con->initConexion($databaseName);

  if($response["conexion"] == "OK"){
    $data['title'] = "'".$_POST['titulo']."'";
    $data['start'] = "'".$_POST['start_date']."'";
    $data['end'] = "'".$_POST['end_date']."'";
    $data['allDay'] = $_POST['allDay'];
    $data['hour_start'] = "'".$_POST['start_hour']."'";
    $data['hour_end'] = "'".$_POST['end_hour']."'";
    $data['fk_usuario'] = "'".$_SESSION['username']."'";

    if($con->insertData('evento', $data)){
      $response['msg']="OK";
      
    }else {
      $response['msg']= "Hubo un error y los datos no han sido cargados";
    }

  }
}

 echo json_encode($response);

 ?>
