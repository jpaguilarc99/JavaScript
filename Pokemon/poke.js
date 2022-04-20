var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

class Pokemon
{
  constructor(n, v, a)
  {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;

    this.imagen.src = imagenes[this.nombre];
  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<br /><strong>" + this.nombre + "</strong><br />");
    document.write("Vida: " + this.vida + "<br />");
    document.write("Ataque: " + this.ataque + "<hr />");
  }
}

var coleccion = [];
coleccion.push(Cauchin = new Pokemon("Cauchin", 100, 30));
coleccion.push(new Pokemon("Pokacho", 80, 50));
coleccion.push(Tocinauro = new Pokemon("Tocinauro", 100, 25));

for (i in coleccion) //EQUIVALENTE A LEN RANGE DE LA COLECCIÓN EN PYTHON
{
  coleccion[i].mostrar()
}
