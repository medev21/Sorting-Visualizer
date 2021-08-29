import { makeObservable, action, observable } from 'mobx';

class ArrayStore {


    constructor() {
        makeObservable(this, {
            arr: observable,
            swap: action
        });
    }

    arr = [5, 20, 10, 14, 3, 2];

    swap(prev, current) {
        const temp = this.arr[prev];
        this.arr[prev] = this.arr[current];
        this.arr[current] = temp;

    }

    compare(i, j, colorCompare) {
        // console.log(i, j , colorCompare)
    }
}

export default ArrayStore;