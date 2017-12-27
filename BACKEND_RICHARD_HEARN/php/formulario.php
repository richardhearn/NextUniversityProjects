<?php

  $ciudad = $_POST['ciudad'];
  $tipo = $_POST['tipo'];
  $valorInicial = $_POST['valorInicial'];
  $valorFinal = $_POST['valorFinal'];

  $str = file_get_contents('../data-1.json');
  $obj = json_decode($str);
  $i=0;

    if ($ciudad == "" && $tipo != ""){
      foreach($obj as $element) {
      
      $precio = str_replace(',', '', $element->Precio);
      $precio = str_replace('$', '', $precio);
      $precio = intval($precio);
      if( ($element->Tipo != $tipo) || ($precio < $valorInicial || $precio > $valorFinal) ){
        
        unset($obj[$i]);
      }
      $i++;
  }
    }else if($tipo == "" && $ciudad != ""){
      foreach($obj as $element) {
      
      $precio = str_replace(',', '', $element->Precio);
      $precio = str_replace('$', '', $precio);
      $precio = intval($precio);
      if( ($element->Ciudad != $ciudad) || ($precio < $valorInicial || $precio > $valorFinal) ){
        unset($obj[$i]);
      }
      $i++;
  }
    }else if ($tipo == "" && $ciudad == "") {
      foreach($obj as $element) {
      
      $precio = str_replace(',', '', $element->Precio);
      $precio = str_replace('$', '', $precio);
      $precio = intval($precio);
      if( ($precio < $valorInicial || $precio > $valorFinal) ){
        
        unset($obj[$i]);
      }
      $i++;
  }

    }else {
      foreach($obj as $element) {
       
        $precio = str_replace(',', '', $element->Precio);
        $precio = str_replace('$', '', $precio);
        $precio = intval($precio);
        if( ($element->Ciudad != $ciudad) || ($element->Tipo != $tipo) || ($precio < $valorInicial || $precio > $valorFinal) ){
         
          unset($obj[$i]);
       }
   $i++;
}
    }

	$obj = array_values($obj);
	$arr = json_encode($obj);
	echo $arr;	

 ?>
