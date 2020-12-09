// JavaScript Document

function soloNumeros(e) {
	var key = window.Event ? e.which : e.keyCode
	return (key >= 48 && key <= 57)
}

function soloLetras(e) {
	key = e.keyCode || e.which;
	tecla = String.fromCharCode(key).toLowerCase();
	letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
	especiales = "8-37-39-46";

	tecla_especial = false
	for (var i in especiales) {
		if (key == especiales[i]) {
			tecla_especial = true;
			break;
		}
	}

	if (letras.indexOf(tecla) == -1 && !tecla_especial) {
		return false;
	}
}


function quit_espacios(e) {
	if (e.target.value.trim() == "") {
		//alert("Debe ingresar un valor en el campo");
		e.target.value = "";
	}
}

function validarEmail(e) {
	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!expr.test(e.target.value)) {
		e.target.value= "";
	}
	if (e.target.value.trim() === "") {
		//alert("Debe ingresar un valor en el campo");
		e.target.value= "";
	}
}

function soloDecimal(e, field) {
	key = e.keyCode ? e.keyCode : e.which
		// backspace
	if (key == 8) return true
		// 0-9
	if (key > 47 && key < 58) {
		if (field.value == "") return true
		regexp = /.[0-9]{2}$/
		return !(regexp.test(field.value))
	}
	// .
	if (key == 46) {
		if (field.value == "") return false
		regexp = /^[0-9]+$/
		return regexp.test(field.value)
	}
	// other key
	return false

}
