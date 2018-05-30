function slide1(){
document.getElementById('Slides').src="img/slide01.png";
document.querySelector('.title-slide').innerHTML = "TITULO BANNER 1";
document.querySelector('.desc-slide').innerHTML = "DESCRIÇÃO 1";
setTimeout("slide2()", 6000);

}

function slide2(){
document.getElementById('Slides').src="img/slide02.png";
document.querySelector('.title-slide').innerHTML = "TITULO BANNER 3";
document.querySelector('.desc-slide').innerHTML = "DESCRIÇÃO 2";
setTimeout("slide3()", 6000);
}

function slide3(){
document.getElementById('Slides').src="img/slide03.png";
document.querySelector('.title-slide').innerHTML = "TITULO BANNER 2";
document.querySelector('.desc-slide').innerHTML = "DESCRIÇÃO 3";
setTimeout("slide1()", 6000);
}
