export const bubbleSort = function*(arrStore) {

    const arr = arrStore.arr;
    // let temp;
    const colorCompare = 'red';

    for(let i = 0; i < arr.length; i++){

        for(let j=1; j < arr.length; j++){

            
            yield arrStore.compare(i,j, colorCompare)
            if(arr[j-1] > arrStore[j]){
                // temp = arr[j-1];
                // arr[j-1] = arr[j];
                // arr[j] = temp;
                yield arrStore.swap(j-1,j);
            }
        }

    }

    return arr;

};

// const animate = () => {};

// console.log(bubbleSort([5, 20, 10, 14, 3, 2]));