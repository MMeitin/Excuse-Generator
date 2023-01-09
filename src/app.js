/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btnExcusa").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = generarExcusa();
  });
};
let generarExcusa = () => {
  let sujeto = [
    `Marisa`,
    `Mi abuelo`,
    `La tía Luisa`,
    `El repartidor de Correos`
  ];
  let nucleo = [`rompió`, `deshizo`, `perdió`, `extravió`];
  let predicado = [`el regalo`, `mi llave`, `mis deberes`, `el cuadro`];
  let complemento = [`ayer`, `hoy`, `a la mañana`, `hace 5 minutos`];

  return (
    sujeto[Math.floor(Math.random() * sujeto.length)] +
    ` ` +
    nucleo[Math.floor(Math.random() * nucleo.length)] +
    ` ` +
    predicado[Math.floor(Math.random() * predicado.length)] +
    ` ` +
    complemento[Math.floor(Math.random() * complemento.length)]
  );
};
