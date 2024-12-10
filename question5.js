// 5. (3p) Skapa en funktion, removeDuplicates, som tar en array
// med element och returnerar en ny array där alla duplicerade
// element har tagits bort och endast unika element finns kvar.


function removeDuplicates(array) {
    // Din kod här
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        if(!newArray.includes(array[i])) {
            newArray.push(array[i])
        }
        console.log(`Step ${i}: ` + newArray)
    }
    return newArray;
}


console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Ska logga [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Annan lösning
//return Array.from(new Set(array));

// också möjlig emd reduce