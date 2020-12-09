<?php

include_once 'connection.php';


$objeto = new Conexion();
$conexion = $objeto->Conectar();



$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';    
$nombre=(isset($_POST['nombre'])) ? $_POST['nombre'] : '';
$apelli_pater=(isset($_POST['apell_p'])) ? $_POST['apell_p'] : '';
$apelli_mater=(isset($_POST['apell_m'])) ? $_POST['apell_m'] : '';
$edad=(isset($_POST['edad'])) ? $_POST['edad'] : '';
$sexo=(isset($_POST['sexo'])) ? $_POST['sexo'] : '';

switch($opcion){
    case 1:
        $foto=$_FILES["image"]["name"];
        if($foto!="")
        {
            $ruta=$_FILES["image"]["tmp_name"];
            $destino ="pinture/".$foto;
            copy($ruta,$destino);
            $ruta_Final="modelo/".$destino;
        }
        $consulta = "INSERT INTO tb_datosusuarios (nombre, apellido_paterno, apellido_materno,edad,sexo,imagen) VALUES('$nombre', '$apelli_pater', '$apelli_mater','$edad','$sexo','$ruta_Final') ";	
        $resultado = $conexion->query($consulta);
        echo "se a guardado correctamete";
        break;
    case 2:
        $php_id=(isset($_POST['id_delite'])) ? $_POST['id_delite'] : '';
      
        $consulta = "DELETE FROM tb_datosusuarios WHERE id =  $php_id ";
        $resultado = $conexion->query($consulta);
        echo "Eliminacion correcta";
    
        break;        
    case 3:
        $id=(isset($_POST['id_edi'])) ? $_POST['id_edi'] : '';
     
        $foto=$_FILES["image"]["name"];
        if($foto!="")
        {
            $ruta=$_FILES["image"]["tmp_name"];
            $destino ="pinture/".$foto;
            copy($ruta,$destino);
            $ruta_Final="modelo/".$destino;
            $consulta = "UPDATE tb_datosusuarios SET nombre='$nombre', apellido_paterno='$apelli_pater', apellido_materno='$apelli_mater', edad='$edad', sexo='$sexo', imagen='$ruta_Final'  WHERE id='$id' ";	
           // $consulta = "UPDATE tb_datosusuarios SET nombre='$nombre', apellido_paterno='$apelli_pater', apellido_materno='$apelli_mater',edad='$edad, sexo='$sexo', imagen='$ruta_Final' WHERE  id='$id' ";		
            $resultado = $conexion->query($consulta);
        }
        else{
            $consulta = "UPDATE tb_datosusuarios SET nombre='$nombre', apellido_paterno='$apelli_pater', apellido_materno='$apelli_mater', edad='$edad', sexo='$sexo' WHERE id='$id' ";	
            // $consulta = "UPDATE tb_datosusuarios SET nombre='$nombre', apellido_paterno='$apelli_pater', apellido_materno='$apelli_mater',edad='$edad, sexo='$sexo', imagen='$ruta_Final' WHERE  id='$id' ";		
             $resultado = $conexion->query($consulta);
        }
           echo "Se Edito correctamente";
        break;
    case 4:
        $consulta = "SELECT id,nombre,apellido_paterno,apellido_materno,edad,sexo,imagen FROM `tb_datosusuarios`";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        print json_encode($data, JSON_UNESCAPED_UNICODE);
        break;
}

//$conexion = NULL;
