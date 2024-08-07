
//for (let index = 0; index < array.length; index++) {
    //const element = array[index];
    //console.log(element);
//}

let array = ["10", 10, true, [5, [55, "tom"]], ["!"], "d", [20, ["55"]]];



for(let index =0; index < array.length; index++){
    if(Array.isArray(array[index])==true){
        for(let index2 = 0; index2 < array[index].length; index2++){
            if(Array.isArray(array[index][index2])){
                for(let index3 = 0; index3 < array[index][index2].length; index3++){
                    console.log(array[index][index2][index3]);
                }
            }else{
                console.log(array[index][index2]);
            }
    }
    }else{
        console.log(array[index]);
    }
}






// function arraySort (arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//        arraySort(arr[i]);
//       } else {
//         console.log(arr[i]);
//       }
//     }
//   }
 
// arraySort(array)

// const arraySort2 = (arr) => {
//   arr.forEach(index => 
//     Array.isArray(index) ? arraySort2(index) : console.log(index)
//   );
// };


// arr3(array)


// const arr4 = (arr) => {
//   arr.map(element =>
//     Array.isArray(element) ? arr4(element): console.log(element)
//   )
// }
// arr4(array)
