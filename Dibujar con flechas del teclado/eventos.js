var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);
var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var color = "red";
  var movimiento = 10;

  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(color, x, y, x, y - movimiento, papel);
      y -= movimiento;
    break;

    case teclas.DOWN:
      dibujarLinea(color, x, y, x, y + movimiento, papel);
      y += movimiento;
    break;

    case teclas.RIGHT:
      dibujarLinea(color, x, y, x + movimiento, y, papel);
      x += movimiento;
    break;

    case teclas.LEFT:
      dibujarLinea(color, x, y, x - movimiento, y, papel);
      x -= movimiento;
    break;

    default:
      console.log("OTRA TECLA")
    break;
  }
}
