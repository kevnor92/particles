var expresion = /\w+@\w+\.+[a-z]/;

$('#send').click(function(){
		var nombre = $('#form-name').val();
		var correo = $('#form-email').val();
		var mensaje = $('#form-message').val();
		//alert("Holaaa");
		
		if (nombre === "" || correo ==="" || mensaje === "") {
			alert("Todos los campos son obligatorios");
			return false;
		} else if(!expresion.test(correo)){
			alert("El correo no es valido");
			return false;
		}
		
	});

var controller = new ScrollMagic.Controller();

var Scene1Left = new ScrollMagic.Scene({
	triggerElement: '#traslateLeft1'
})
.setClassToggle('#traslateLeft1', 'fadeInLeftActive')
.addTo(controller);

var Scene1Right = new ScrollMagic.Scene({
	triggerElement: '#traslateRight1'
})
.setClassToggle('#traslateRight1', 'fadeInRightActive')
.addTo(controller);
