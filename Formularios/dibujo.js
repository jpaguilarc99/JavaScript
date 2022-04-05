var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var x = parseInt(texto.value);
  var lineas = x;
  var l = 0;
  var yi, xf;
  var espacio = ancho / lineas;

  //Ciclo for en JavaScript
  for(l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("#AAF", 0, yi, xf, 300);
  }

  for(l = 0; l < lineas; l++)
  {
    xi = 300 - (espacio * l);
    yf = 300 - (espacio * (l+1));
    dibujarLinea("#AAF", xi, 0, 300, yf);
  }

  dibujarLinea("#AAF", 1, 1, 1, 300);
  dibujarLinea("#AAF", 1, 299, 299, 299);
}
