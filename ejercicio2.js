const sumarNumerosDeUnString = (str) => {
  let suma;
  let numeros = str.split('');
  numeros.forEach((numero) => {
    suma += parseInt(numero);
  });

  console.log(suma);

  return suma;
}

console.log(sumarNumerosDeUnString('hola2hvj3hjhb5'));