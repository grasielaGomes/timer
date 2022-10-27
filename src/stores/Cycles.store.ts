import { createStore } from "./CreateStore";
import { CycleI } from "../pages/home/Home.interfaces";

const cycles: { [key: string]: CycleI } = {};

export const cyclesStore = createStore({
  cycles
});
