import React from 'react';
import { BubbleSortStore } from './stores/bubbleSortStore';

export const Stores = {
    bubbleSortStore: BubbleSortStore
};

export const StoresContext = React.createContext(Stores);