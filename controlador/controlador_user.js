/*Función que obtiene los datos del formulario(vista:trabajadores) 
que seran enviados al modelo para ser insertardos en la BD
*/





$('#save').click(function(e){
	e.preventDefault()
	//Se obtiene los valores del formulario
	var nombre= $('#nombre').val();
	var sexo=$('#sexo').val();
	var archivoImg=$('#archivoImg').val();
	
	//Se accede al formulario
	var formData = new FormData(document.getElementById('datos'));


	//Si los campos no estan vacios.Se envian los datos al modelo							
	if( nombre.length>0 && 
		sexo.length>0 && 
		archivoImg!=""){
		$.ajax({
			url:'modelo/save.php',
			type:'post',
			data:formData,
			contentType: false,
			processData: false,
			error:function(){msm_error();},
			success:function(res){
				msm_final(res);
			}		
		});
	}else{
		msm_confimar();
	}
});



//El llamado de la función (llena la tabla)
$(document).ready(function(){
	llena_tabla();
});

function llena_tabla(){
		$.ajax({
		url:'modelo/slow_data.php',
		type:"post",
	
		
		error:function(){alert("error de archivo");},
		success:function(res){
		
			$("#resul_select").html(res);
		/* 	alert(res);
   		var js=JSON.parse(res);
	 	 var tabla;
	 	 for (var i = 0; i < js.length; i++) {
              tabla+='<tr><td>'+js[i].id+'</td><td>'+js[i].Imagen+'</td><td>'+js[i].Nombre+'</td><td>'+js[i].Sexo+'</td><td>'+js[i].Fecha+'</td></tr>';
		  
		  }
			
			*/
		
		}
	});
}

$(document).on("click","#Editar",function()
{


var Nombre =$(this).attr("dataNom");
var Sexo =$(this).attr("dataSexo");
var ID =$(this).attr("dataID");


 $('#enombre').val(Nombre);
 $('#esexo').val(Sexo);






 $('#update').click(function(){

	//Se obtiene los valores del formulario
	var nombre= $('#enombre').val();
	var sexo=$('#esexo').val();
	var img=$('#earchivoImg').val();

		//Se accede al formulario
	var formData = new FormData(document.getElementById('datosEditar'));
	//Se asigna identificadores
	//formData.append('accion','update');
	formData.append('id',ID);
					
	//Si los campos no estan vacios.Se envian los datos al modelo				
	if( nombre.length>0 && 
		sexo.length>0 
		){
		$.ajax({
			url:'modelo/Updata.php',
			type:'post',
			data:formData,
			contentType: false,
			processData: false,
			error:function(){msm_error();},
			success:function(res){
				msm_final(res);
			}		
		});
	}else{
		msm_confimar();
	}
	
	
});



});




//Función que muestra la tabla con los registros existentes


/*Función que obtiene los datos del formulario(vista:trabajadores) 
que seran enviados al modelo para ser editados en la BD
*/


/*Función que identifica la fila que se desea eliminar
atravez del ID
*/
$(document).on("click","#eliminar",function()
{

	var id= $(this).attr("data");
	
	fn_eliminar(id);
});
function fn_eliminar(id){
	$.confirm({
	  title: 'Eliminar',
	  content: 'Esta seguro de eliminar',
	  type: 'dark',
	  typeAnimated: true,
	  buttons: {
	  confirm: {
		 text: 'Ok',
		 btnClass: 'btn-dark',
		 action: function(){
		 	$.ajax({
		 		url:'modelo/delite.php',
				type:'post',
				data:{"id":id},
				error:function(){msm_error();},
				success:function(res){
					msm_final(res);
					
				}		

		 	});
			 	
        	}
		}
		, 
	  cancel:{
      text:'Cancelar',
      btnClass:'btn-red'
      }
	  }
 });

}


///Busquera 
$(document).on("keyup","#Caja_Busquera",function()
{

var valor= $(this).val();
 
if(valor !="")
{
	Busquera(valor);
}
else
{
	Busquera();
}



});

function Busquera(valor)
{
	$.ajax({
		url:'modelo/Search.php',
	   type:'GET',
	   data:{"valor":valor},
	
	   success:function(res){
		$("#resul_select").html(res);
		   
	   }		
	});
}

///*Vista previa de la iamgen*/
$(function()
{
   
  function FilePrevia(input)
      {
if(input.files && input.files[0])
{
var reader= new FileReader()

reader.onload=function(e)
{
$("#imgprevia").html("<img  width ='50' src='"+e.target.result+"' />");

}

reader.readAsDataURL(input.files[0]);
}
}
$("#archivoImg").change(function()
{
FilePrevia(this);
});

});


/*
///*Vista previa de la iamgen*/
$(function()
{
   
  function FilePrevia(input)
      {
if(input.files && input.files[0])
{
var reader= new FileReader()

reader.onload=function(e)
{

$("#imgpreviaEditar").html("<img  width ='50' src='"+e.target.result+"' />");
}

reader.readAsDataURL(input.files[0]);
}
}
$("#earchivoImg").change(function()
{
FilePrevia(this);
});

});

