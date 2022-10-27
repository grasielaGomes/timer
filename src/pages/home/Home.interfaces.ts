type Status = "started" | "stopped" | "finished";

export type NewCycleFormData = { task: string; minutesAmount: number };

export interface CycleI {
  createAt: Date;
  id: string;
  minutesAmount: number;
  task: string;
  status: Status;
}
