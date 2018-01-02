<?php
  require('db.php');
  require('lib.php');
  session_start();

  if(isset($_SESSION['username'])){

    $con = new ConectorBD($host,$user,$pass);
    $response['conexion'] = $con->initConexion($databaseName);

    if($response["conexion"] == "OK"){
      $resultado_consulta = $con->consultar(['evento'],
      ['id','title', 'start','end','allDay','hour_start','hour_end'], 'WHERE fk_usuario="'.$_SESSION['username'].'"');
      if (mysqli_num_rows($resultado_consulta) > 0) {
        $i=0;

        while($fila = $resultado_consulta->fetch_assoc()){
        $response['evento']["id"][$i] = $fila["id"];
        $response['evento']["title"][$i] = $fila["title"];
        $response['evento']["start"][$i] = $fila["start"];
        $response['evento']["end"][$i] = $fila["end"];
        $response['evento']["allDay"][$i] = $fila["allDay"];
        $response['evento']["hour_start"][$i] = $fila["hour_start"];
        $response['evento']["hour_end"][$i] = $fila["hour_end"];
        $i++;
        }

    }else {
      $response['msg'] = "Uusario no cuenta con eventos";
    }

    }else {
      $response['msg'] = "No se pudo conectar a la base de datos";
    }

  }else {
    $response['msg'] = 'ERROR';

  }

  echo json_encode($response["evento"]);


 ?>
