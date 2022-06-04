let dimensionArreglo:number = Number(prompt("ingrese la dimension de los vectores"));
let arreglo1 : number[]= new Array (dimensionArreglo);
let arreglo2 : number[]= new Array (dimensionArreglo);
let arregloProductoEscalar : number[]= new Array (dimensionArreglo);

function cargarVector(arregloCargar : number[], cantidadCargar : number) {
  for (let indice:number = 0; indice<cantidadCargar; indice++) {;
    arregloCargar[indice] = Number(prompt("Ingrese el valor de la posición " + indice + ": "));
  }
};

function productoEscalar(v1 : number[], v2 : number[], vSalida : number []){
  for (let indice : number = 0; indice < dimensionArreglo; indice++){
    vSalida[indice] = v1[indice] * v2[indice]
  };
  let producto : number = 0;
  for (let indice =0; indice<dimensionArreglo; indice++){
    producto += vSalida[indice]
  };
  console.log("El valor del producto escalar es " + producto);

};

cargarVector(arreglo1, dimensionArreglo);
cargarVector(arreglo2, dimensionArreglo);
productoEscalar(arreglo1,arreglo2,arregloProductoEscalar);

