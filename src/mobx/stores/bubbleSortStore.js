import { makeAutoObservable } from 'mobx';

export class BubbleSortStore {


    constructor() {
        makeAutoObservable(this);
    }

    currentElement = 2;


    setCurrentElement(el) {
        console.log(el);
    }

    setBubbleSort(arr) {

        let temp;
    
        for(let i = 0; i < arr.length; i++){
    
            for(let j=1; j < arr.length; j++){
    
                this.setCurrentElement(arr[j]);
                if(arr[j-1] > arr[j]){
                    temp = arr[j-1];
                    arr[j-1] = arr[j];
                    arr[j] = temp;
                }
            }
    
        }
    
        return arr;
    
    };
}