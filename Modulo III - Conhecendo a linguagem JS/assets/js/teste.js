function returnEvenValues(array){
    let evenNums = [];
    for (let i = 0; i < array.length; i++)
        if(array[i] %2 ===0) {
            evenNums.push(array[i]);
        }
        console.log(evenNums); 
    }
let array = [56, 1, 2, 3, 4, 5, 6, 5, 5, 8, 9, 65, 5, 6, 5, 5, 6, 1, 32, 32, 11, 65, 165, 65, 65, 18, 498, 495, 16, 549, 84, 951, 65, 1];

returnEvenValues(array);