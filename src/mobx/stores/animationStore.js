import { makeObservable, observable, action } from 'mobx';
// import ArrayStore from "./arrayStore";

export class AnimationStore {

    // arrayStore;

    constructor(ArrayStore) {
        makeObservable(this, {
            generator: observable,
            generatorFunction: observable,
            // arrayStore: observable,
            startAnimation: action,
            pauseAnimation: action
        });

        this.arrayStore = ArrayStore;
    }

    // arr = [5, 20, 10, 14, 3, 2];
    // arrayStore = ArrayStore
    generator = null;
    generatorFunction = null

    startAnimation = (genFunc) => {

        if(genFunc !== this.generatorFunction){
            this.generatorFunction = genFunc;
            // console.log("ArrayStore", ArrayStore)
            console.log("arrayStore line30", this.arrayStore)

            // this.generator = genFunc(this.arrayStore);
        }

        // this.animation = setInterval(() => {

        //     const action = this.generator.next();
        //     console.log("🚀 ~ file: animationStore.js ~ line 29 ~ AnimationStore ~ this.animation=setInterval ~ action", action)

        //     if(action.done){

        //     }
        // }, 3000);
    }

        

        


    pauseAnimation = () => {

        console.log("PAUSING ANIMATION", this.animation)

        clearInterval(this.animation);
    }
}