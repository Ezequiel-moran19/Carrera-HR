'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length === 1) return array;
  
  const leftArr = [];
  const rightArr = [];
  const pivot = array[array.length - 1];
  
  for(let i = 0; i < array.length - 1; i++){
    if (array[i] < pivot) leftArr.push(array[i]);
    else rightArr.push(array[i]);
  }
  if (leftArr.length > 0 && rightArr.length > 0)
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
   else if(leftArr.length > 0) return [...quickSort(leftArr), pivot];
   else return [pivot, ...quickSort(rightArr)];
  
}

const merge = (leftArr, rightArr) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
       const leftEl = leftArr[leftIndex];
       const rightEl = rightArr[rightIndex];

       if (leftEl < rightEl) {
         output.push(leftEl);
         leftIndex++;
       } else{
         output.push(rightEl);
         rightIndex++;
       }
    }
    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length === 1) return array;

  const medio = Math.floor(array.length / 2);
  const left =  array.slice(0, medio);
  const right = array.slice(medio);
  return merge( mergeSort(left), mergeSort(right));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
