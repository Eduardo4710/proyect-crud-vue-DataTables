

function msm_error(){
$.confirm({
	title: 'Error !',
	content: 'Se produjo un error.',
	type: 'dark',
	typeAnimated: true,
	buttons: {
	tryAgain: {
		 text: 'Ok',
		 btnClass: 'btn-dark'
	}
	}
});
}

function msm_confimar(){
$.confirm({
	  title: 'Error !',
	  content: 'Verifique hay campos vacíos.',
	  type: 'dark',
	  typeAnimated: true,
	  buttons: {
	  tryAgain: {
				 text: 'Ok',
				 btnClass: 'btn-dark'
			}
	  }
 });
}
function pruebaU()
{
	alert("jjjj");
}

function msm_final(mensaje){
$.confirm({
	  title: 'Proceso Con Éxito',
	  content: mensaje,
	  type: 'dark',
	  typeAnimated: true,
	  buttons: {
	  tryAgain: {
		 text: 'Ok',
		 btnClass: 'btn-dark',
		 action: function(){
			 	location.reload();
        	}
		}
	  }
 });
}