import React from "react";
import { BubbleSortStore } from "./stores/bubbleSortStore";
import { AnimationStore } from "./stores/animationStore";
import ArrayStore from "./stores/arrayStore";

export const Stores = {
    bubbleSortStore: new BubbleSortStore(),
    arrayStore: new ArrayStore(),
    animationStore: new AnimationStore()
};

export const StoresContext = React.createContext(Stores);