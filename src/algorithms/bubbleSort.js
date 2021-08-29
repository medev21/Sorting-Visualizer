export const bubbleSort = function *(arrStore) {

    const arr = arrStore.arr;
    // let temp;
    const colorCompare = 'red';

    for(let i = 0; i < arr.length; i++){
    console.log("🚀 ~ file: bubbleSort.js ~ line 8 ~ arr.length", arr.length)

        for(let j=1; j < arr.length; j++){

            yield arrStore.compare(i,j, colorCompare)
            if(arr[j-1] > arr[j]){
                // temp = arr[j-1];
                // arr[j-1] = arr[j];
                // arr[j] = temp;
                yield arrStore.swap(j-1,j);
            }
        }

    }
};

// export default bubbleSort;