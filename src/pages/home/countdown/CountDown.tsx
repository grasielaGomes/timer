import { CountDownContainer, Separator, CountDownI } from "./";

export const CountDown = ({minutes, seconds, ...props}: CountDownI) => {
  return (
    <CountDownContainer {...props}>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountDownContainer>
  );
};
