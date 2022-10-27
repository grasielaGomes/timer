import { differenceInMinutes } from "date-fns";
import { cyclesStore } from "@/stores";

export const useHistory = () => {
  const cycles = cyclesStore.getState().cycles;

  const cyclesSorted = Object.values(cycles).sort(
    (a, b) =>
      differenceInMinutes(new Date(), a.createAt) -
      differenceInMinutes(new Date(), b.createAt)
  );
  return { cyclesSorted };
};
