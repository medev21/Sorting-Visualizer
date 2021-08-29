import { makeObservable, observable, action } from 'mobx';
// import ArrayStore from "./arrayStore";

export class AnimationStore {

    generator =  null
    genFunc = null;
    delay = 500;

    constructor(genFunc, generator, delay) {
        makeObservable(this, {
            genFunc: observable,
            generator: observable,
            delay: observable,
            startAnimation: action,
            pauseAnimation: action,
        })

        this.generator = generator;
        this.genFunc = genFunc;
        this.delay = delay;
    }

    startAnimation = (genFunc, arrStore) => {
        console.log(genFunc)
        if(genFunc !== this.genFunc) {
            this.genFunc = genFunc;
            console.log("arrayStore line30", arrStore.arr);
            // this.generator = this.generatorFunction(arrStore);
            this.generator = genFunc(arrStore);
            console.log(this)
        }

        this.animation = setInterval(() => {
            console.log(this.generator.next())
            const action = this.generator.next();
            if(action.done){
                this.pauseAnimation();
            }
        }, this.delay);

    }

    pauseAnimation() {

        console.log("PAUSING ANIMATION", this.animation)

        clearInterval(this.animation);
    }
}