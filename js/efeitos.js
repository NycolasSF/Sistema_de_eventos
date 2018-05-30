class Efeitos{
	abrir_menu(){
		document.getElementById("barra-menu").style.height = "100vh";
		document.getElementById("barra-menu").style.display = "flex";
	}
	fechar_menu(){
		document.getElementById("barra-menu").style.height = "0";
		document.getElementById("barra-menu").style.display = "none";
		document.body.style.backgroundColor = "rgb(255,255,255)";
	}
	linkClicado(){
			document.getElementById("barra-menu").style.display = "none";
			document.getElementById("icon-nav").style.display = "flex";
	}
	mostrarTodosEsportes(){
		var x = document.querySelectorAll(".close");
		for (var i = 0; i < x.length; i++) {
			if (x[i].style.display === "none") {
					x[i].style.display = "block";
			} else {
					x[i].style.display = "none";
			}
		}
	}
}
var efeitos = new Efeitos();
