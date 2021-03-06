//Creamos la clase billete
class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

//Función algoritmica para calcular el cambio del dinero
function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

  for (var bi of caja)
  {
    if (dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);
      //If anidado
      if (div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }
      entregado.push(new Billete(bi.valor, papeles));
      dinero -= (bi.valor * papeles);
    }
  }

  if (dinero > 0)
  {
    resultado.innerHTML = "Cabra, no hay billetes suficientes en la caja para retirar dicha cantidad.";
  }
  else
  {
    for (var e of entregado)
    {
      if (e.cantidad > 0)
      {
        resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
      }
    }
  }

}

//Definición de variables y elementos
var caja = [];
var entregado = [];
caja.push(new Billete(100, 5));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 30));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 5))
var dinero;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
