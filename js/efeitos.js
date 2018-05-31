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
			// document.getElementById("barra-menu").classList.add('.close');
			var element, name, arr;
				element = document.getElementById("barra-menu");
				name = "close";
				arr = element.className.split(" ");
				if (arr.indexOf(name) == -1) {
						element.className += " " + name;
		}
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

function loader() {
	setTimeout(slide1(), 1000);
	setTimeout(showPage, 3000);

}
function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById('home').style.display = "flex";
	document.getElementById('main').style.display = "block";
	document.getElementById('rodape').style.display = "block";
}
