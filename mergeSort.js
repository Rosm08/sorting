function mergeSort(array) {
  if(array.length <= 1)  return array

  // let mitadDeArray = parseInt(array.length/2)

  // let arregloIzquierdo = array.slice(0,mitadDeArray)
  //   mergeSort(arregloIzquierdo)

  // let arregloDerecho = array.slice(mitadDeArray, array.length)
  //  mergeSort(arregloDerecho)

  let firstHalf ;
  let secondHalf ;

  function split(array) {
        let mitad;
    
        if (array.length % 2 == 0) {
          mitad = array.length / 2;
        } else {
          mitad = parseInt(array.length / 2);
        }
    
        firstHalf = array.slice(0, mitad);
        secondHalf = array.slice(mitad, array.length);
    
        return [firstHalf, secondHalf];
 }

   split(array)

  merge(firstHalf, secondHalf)
   
  mergeSort(firstHalf)
  mergeSort(secondHalf)




  let merge = function(firstHalf, secondHalf){
     
    let nums = [];

    while(firstHalf.length > 0 && secondHalf>0){
       if(firstHalf[0] <= secondHalf[0]){
            nums.push(secondHalf.shift())
       }else {
           nums.push(firstHalf.shift())
       }
    }
   return nums.concat(firstHalf).concat(secondHalf)

  }
 


 split(array)



 merge(firstHalf, secondHalf)
  
 mergeSort(firstHalf)
 mergeSort(secondHalf)

}
let array = [4, 2, 3, 1];

// function mergeSort(array) {
//   let firstHalf;
//   let secondHalf;
//   let arrayFinal = [];

//   split();
//   merge();
//   function split(array) {
//     let mitad;

//     if (array.length % 2 == 0) {
//       mitad = array.length / 2;
//     } else {
//       mitad = parseInt(array.length / 2);
//     }

//     firstHalf = array.slice(0, mitad);
//     secondHalf = array.slice(mitad, array.length);

//     return [firstHalf, secondHalf];
//   }

//   function merge(firstHalf, secondHalf) {
//     let j = 0;
//     while (j < firstHalf.length && j < secondHalf.length) {
//       if (firstHalf[j] > secondHalf[j]) arrayFinal.push(secondHalf[j]);
//       else if (firstHalf[j] < secondHalf[j]) arrayFinal.push(firstHalf[j]);

//       j++;
//     }
//     return arrayFinal;
//   }

//   let arrMerged = arrayFinal.concat(array);
//   return arrMerged;
// }

let arr = [1,90,67,3,5,,89,34,0,12,2,4]

console.log(mergeSort(arr))