import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { differenceInSeconds } from "date-fns";
import { CycleI, NewCycleFormData } from "./";
import { cyclesStore } from "../../stores/Cycles.store";

export const useHome = () => {
  const newCycleValidationSchema = zod.object({
    task: zod.string().min(1, "Informe a tarefa"),
    minutesAmount: zod.number().min(1).max(60)
  });

  const [countdown, setCountdown] = useState(0);

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0
    }
  });

  const handleCreateNewCycle = ({ task, minutesAmount }: NewCycleFormData) => {
    const id = new Date().getTime().toString();
    const newCycle: CycleI = {
      createAt: new Date(),
      id,
      task,
      minutesAmount,
      status: "started"
    };
    const state = cyclesStore.getState().cycles;
    cyclesStore.setState({
      cycles: {
        ...state,
        [id]: newCycle
      }
    });
    setCountdown(0);
    reset();
  };

  const task = watch("task");
  const isSubmitDisabled = !task;

  const cycles = cyclesStore.getState().cycles;
  const currentCycle = Object.values(cycles).find(
    (cycle) => cycle.status === "started"
  );

  let timer: number;

  useEffect(() => {
    if (currentCycle) {
      timer = setInterval(() => {
        setCountdown(differenceInSeconds(new Date(), currentCycle.createAt));
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [currentCycle]);

  const handleStopCycle = () => {
    if (currentCycle) {
      const state = cyclesStore.getState().cycles;
      const id = currentCycle.id;
      cyclesStore.setState({
        cycles: {
          ...state,
          [id]: { ...currentCycle, status: "stopped" }
        }
      });
    }
    setCountdown(0);
  };

  const totalSeconds = (currentCycle?.minutesAmount || 0) * 60;
  const currentSeconds = (totalSeconds || 0) - countdown;
  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;
  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (countdown >= totalSeconds) {
      if (currentCycle) {
        const state = cyclesStore.getState().cycles;
        const id = currentCycle.id;
        cyclesStore.setState({
          cycles: {
            ...state,
            [id]: { ...currentCycle, status: "finished" }
          }
        });
      }
      clearInterval(timer);
      setCountdown(0);
    }
  }, [countdown]);

  useEffect(() => {
    if (currentCycle) document.title = `${minutes}:${seconds}`;
  }, [minutes, seconds]);

  return {
    currentCycle,
    handleCreateNewCycle,
    handleStopCycle,
    handleSubmit,
    isSubmitDisabled,
    minutes,
    register,
    seconds
  };
};
