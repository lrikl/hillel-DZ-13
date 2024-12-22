'use strict';

const array = [1, 3, 4, 4, 6, 2, 5, 4, 7];

function removeElement(userArray, itemRemove) {

    if (!Array.isArray(userArray) || userArray.length === 0) {
        return "задайте не порожній масив";
    }
    else {
        let i = 0;

        while(i < userArray.length) {
            if(itemRemove === userArray[i]) {
                userArray.splice(i, 1);
            }
            else {
                i++;
            }
        }  
        
        return userArray;
    }
    
}

removeElement(array, 4);
console.log(array);


