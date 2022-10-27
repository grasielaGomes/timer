import {
  FormContainer,
  TaskInput,
  MinutesAmountInput,
  FormI
} from "./";

export const Form = ({cycle, register}: FormI) => {
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        disabled={Boolean(cycle)}
        list="task-suggestions"
        placeholder="Dê um nome para seu projeto"
        {...register("task")}
      />
      <datalist id="task-suggestions">
        <option value="task 1"></option>
      </datalist>
      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        disabled={Boolean(cycle)}
        placeholder="00"
        step="5"
        min="1"
        max="60"
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  );
};
