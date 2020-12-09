<!DOCTYPE html>
<html lang="en">
<head>
  <?php require('baseAdmin/meta.php'); ?>
</head>
<body>
  <div id="main">
    <div class="container contenido">
      <div class="row">
        <div class="col-md-12 text-center">
          <h1>Trabajando con DataTables</h1>
          <hr>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table id="tbl_user" class="table table-striped table-bordered" cellspacing="0" width="100%">
            <div style="padding-bottom: 7px">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Nuevo</button>
            </div>
            <thead>
              <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Apellido paterno</th>
                <th>Apellido materno</th>
                <th>Edad</th>
                <th>Sexo</th>
                <th>Usario</th>
                <th>---</th>
                <th>---</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item of registros">
                <td>{{item.id}}</td>
                <td>{{item.nombre}}</td>
                <td>{{item.apellido_paterno}}</td>
                <td>{{item.apellido_materno}}</td>
                <td>{{item.edad}}</td>
                <td>{{item.sexo}}</td>
                <td><img :src="`${item.imagen}`" class="img-responsive"  height="50" width="50"></td>
                <td><button type='button' class='btn btn-success' id='Editar' @click="fn_editar(item.id,item.nombre,item.apellido_paterno,item.apellido_materno,item.edad,item.sexo,item.imagen)" data-toggle='modal' data-target='#editM' data-whatever='@mdo'>Editar</button></td>
                <td><button type=button' class='btn btn-danger' id='eliminar' @click="fn_eliminar(item.id)">Eliminar</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
   
    <!--========================================Moda Muevo================================-->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="exampleModalLabel">Agregar usuario</h4>
          </div>
          <div class="modal-body">
            <form id="datos" @submit.prevent="submit" enctype="multipart/form-data">
              <div class="row">
                <div class="form-group col-md-6 col-sm-6">
                  <label for="recipient-name" class="control-label">Nombre :</label>
                  <input type="text" class="form-control" id="nombre" name="nombre" v-model="js_nombre" maxlength="25" onKeyPress="return soloLetras(event)">
                </div>
                <div class="form-group col-md-6 col-sm-6">
                  <label for="recipient-name" class="control-label">Apellido paterno:</label>
                  <input type="text" class="form-control" id="apell_p" name="apell_p" v-model="js_apellidoPaterno" maxlength="25" onKeyPress="return soloLetras(event)">
                </div>
                <div class="form-group col-md-6 col-sm-6">
                  <label for="recipient-name" class="control-label">Apellido materno:</label>
                  <input type="text" class="form-control" id="apell_m" name="apell_m" v-model="js_apellidoMaterno" maxlength="25" onKeyPress="return soloLetras(event)">
                </div>
                <div class="form-group col-md-6 col-sm-6">
                  <label for="recipient-name" class="control-label">Edad:</label>
                  <input type="text" class="form-control" id="edad" v-model="js_edad" name="edad">
                </div>
                <div class="form-group col-md-6 col-sm-6">
                  <label for="recipient-name" class="control-label">Sexo: </label>
                  <select class="form-control" id="sexo" v-model="js_sexo" name="sexo">
                    <option value="" disabled selected>Elegir</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                  </select>
                </div>
                <div class="form-group col-md-6 col-sm-6">
                  <label for="recipient-name" class="control-label"> Cargar Img:</label>
                  <input type="file" id="archivoImg" name="image" v-model="js_foto" ><br>
                    <br>
                   <input type="button" value="Imagen" class='btn btn-info' onclick=" document.getElementById('archivoImg').click()">
                <br><br>
                <div id="imgpreviaEditar">  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--=======================================Moda Editar================================-->
    <div class="modal fade" id="editM" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="exampleModalLabel">Editar usuario</h4>
            </div>
            <div class="modal-body">
              <form id="datosEditar" @submit.prevent="inf_editar" enctype="multipart/form-data">
                <div class="row">

                  <div class="form-group col-md-6 col-sm-6">
                    <label for="recipient-name" class="control-label">Nombre completo:</label>
                    <input type="text" class="form-control" id="enombre" name="nombre"  v-model="edi_nombre" maxlength="25" onKeyPress="return soloLetras(event)">
                  </div>

                  
                  <div class="form-group col-md-6 col-sm-6">
                    <label for="recipient-name" class="control-label">Apellido paterno:</label>
                    <input type="text" class="form-control" id="eapell_p" name="apell_p" v-model="edi_apellidoPaterno"  maxlength="25" onKeyPress="return soloLetras(event)">
                  </div>
                  
                  <div class="form-group col-md-6 col-sm-6">
                    <label for="recipient-name" class="control-label">Apellido materno:</label>
                    <input type="text" class="form-control" id="eapell_m" name="apell_m"  v-model="edi_apellidoMaterno" maxlength="25" onKeyPress="return soloLetras(event)">
                  </div>
                  
                  <div class="form-group col-md-6 col-sm-6">
                    <label for="recipient-name" class="control-label">Edad:</label>
                    <input type="text" class="form-control"  name="edad" id="eedad"  v-model="edi_edad" >
                  </div>

                  <div class="form-group col-md-6 col-sm-6">
                    <label for="recipient-name" class="control-label">Sexo:</label>
                    <select id="esexo" class="form-control" v-model="edi_sexo"  name="sexo">
                      <option value="" disabled selected>Elegir</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                    </select>
                  </div>

                  <div class="form-group col-md-6 col-sm-6">
                    <label for="recipient-name" class="control-label">Cargar Img:</label>
                    <input type="file" id="ocultar_file"   v-model="edi_foto" @change="previewimg"  name="image" ><br>
                    
                    <input type="button" value="Imagen" class='btn btn-info' onclick=" document.getElementById('ocultar_file').click()">
                     <br><br>
                   <div class="position_img"> <img src="" alt="" id="imgUser"   width="80">  <img id="image"   width="80"></div>
                  </div>

                </div>
                <div class="modal-footer">
              <button type="submit" class="btn btn-primary">Guardar</button>
            </div>
              </form>
            </div>
          
          </div>
        </div>
      </div>
  </div>
  <!--=====================================SCRIPT==============================-->
<?php require('baseAdmin/script.php'); ?>
</body>
<!--==========================================-->
</html>