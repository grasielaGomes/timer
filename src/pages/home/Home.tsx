import { Pause, Play } from "phosphor-react";

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
  CountDown,
  Form,
  useHome
} from "./";

export const Home = () => {
  const {
    currentCycle,
    handleCreateNewCycle,
    handleStopCycle,
    handleSubmit,
    isSubmitDisabled,
    minutes,
    register,
    seconds
  } = useHome();
  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <Form cycle={currentCycle} register={register} />
        <CountDown minutes={minutes} seconds={seconds} />
        {currentCycle ? (
          <StopCountdownButton type="button" onClick={handleStopCycle}>
            <Pause size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
};
