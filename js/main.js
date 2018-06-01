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
	triggerElement: '#second_about'
})
.setClassToggle('#traslateLeft1', 'fadeInLeftActive')
.addTo(controller);

var Scene1Right = new ScrollMagic.Scene({
	triggerElement: '#second_about'
})
.setClassToggle('#traslateRight1', 'fadeInRightActive')
.addTo(controller);


var btnBurger = document.getElementById("nav-icon3");
var menu = document.querySelector(".menu");

btnBurger.addEventListener("click", toggleMenu);


function toggleMenu(){
	menu.classList.toggle("menu--visible")
	btnBurger.classList.toggle("open")
	// btnBurger.style.position='fixed'
}