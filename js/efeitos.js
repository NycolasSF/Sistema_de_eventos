class Efeitos{
	abrir_menu(){
		document.getElementById("barra-menu").style.height = "100vh";
		document.getElementById("barra-menu").style.display = "flex";
		document.getElementById("icon-nav").style.display = "none";
		document.body.style.backgroundColor = "rgba(0,0,0,0.9)";
		document.href = "home";
	}
	fechar_menu(){
		document.getElementById("barra-menu").style.height = "0";
		document.getElementById("barra-menu").style.display = "none";
		document.getElementById("icon-nav").style.display = "flex";
		document.body.style.backgroundColor = "rgb(255,255,255)";
	}
	linkClicado(){
			document.getElementById("barra-menu").style.display = "none";
			document.getElementById("icon-nav").style.display = "flex";
	}
}
var efeitos = new Efeitos();
