const bubbleSort = (arr) => {

    let temp;

    for(let i = 0; i < arr.length; i++){

        for(let j=1; j < arr.length; j++){
            if(arr[j-1] > arr[j]){
                temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }

    }

    return arr;

};

// const animate = () => {};

console.log(bubbleSort([5, 20, 10, 14, 3, 2]));