import { UseFormRegister } from "react-hook-form";
import { CycleI } from "../";

export interface FormI {
  cycle?: CycleI;
  register: UseFormRegister<{
    task: string;
    minutesAmount: number;
  }>;
}