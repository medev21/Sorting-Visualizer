import { makeAutoObservable, runInAction, flow } from 'mobx';

export class BubbleSortStore {


    constructor() {
        makeAutoObservable(this);
    }

    currentElement = 0;
    currentIdx = 0;
    sortedArray = [];
    initial = [];


    setCurrentElement(el, idx) {

        this.currentIdx = idx;
    }

    setSortedArray(arr) { this.sortedArray = arr }

    setBubbleSort = flow(function*(arr) {
        let temp;
    
        for(let i = 0; i < arr.length; i++){
    
            for(let j=1; j < arr.length; j++){
    
                // this.setCurrentElement(arr[j], j);
                if(arr[j-1] > arr[j]){
                    temp = arr[j-1];
                    arr[j-1] = arr[j];
                    arr[j] = temp;
                }
            }

            yield this.setSortedArray(arr)
    
        }
    });

    setBubbleSortTEST(arr) {

        // let temp;
    
        // for(let i = 0; i < arr.length; i++){

        //     for(let j=1; j < arr.length; j++){
    
        //         if(arr[j-1] > arr[j]){
        //             temp = arr[j-1];
        //             arr[j-1] = arr[j];
        //             arr[j] = temp;
        //         }
        //     }

        //     this.setSortedArray(arr);
    
        // }

        ///////////////////////////////////////////

        // setTimeout(() => {

        //     let arr = this.sortedArray;

        //     let temp;
        
        //     for(let i = 0; i < arr.length; i++){
        
        //         for(let j=1; j < arr.length; j++){
        
        //             this.setCurrentElement(arr[j], j);
        //             if(arr[j-1] > arr[j]){
        //                 temp = arr[j-1];
        //                 arr[j-1] = arr[j];
        //                 arr[j] = temp;
        //             }
        //         }

        //         this.setSortedArray(arr);
        //         console.log("🚀 ~ file: bubbleSortStore.js ~ line 37 ~ BubbleSortStore ~ setBubbleSort ~ arr", arr)
        
        //     }
        // }, 1000);

        ////////////////////////////////////////////

        let temp;
    
        for(let i = 0; i < arr.length; i++){
    
            for(let j=1; j < arr.length; j++){
    
                // this.setCurrentElement(arr[j], j);
                if(arr[j-1] > arr[j]){
                    temp = arr[j-1];
                    arr[j-1] = arr[j];
                    arr[j] = temp;
                }
            }

            setTimeout(runInAction(() => {
                this.setSortedArray(arr);
            }), 700);
    
        }
    
    
    };
}