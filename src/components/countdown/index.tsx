import React, { useEffect, useState } from 'react';
import { workerData } from 'worker_threads';
import { convertSecondsToString } from '../../utils';
import * as S from './styles';

export enum StepEnum {
  Working = 1,
  Stoped,
  ShortBreak,
  LongBreak,
};

interface ICountdownProps {
  initialCountdown: number,
  initialStep: StepEnum,
  shortBreakCountdown: number,
  shortBreakCycle: number,
  workCountdown: number,
  longBreakCountdown: number,
}

export default ({
    initialCountdown,
    initialStep,
    shortBreakCountdown,
    shortBreakCycle,
    workCountdown,
    longBreakCountdown,
  }: ICountdownProps) => {
  const [countdown, setCountdown] = useState<number>(initialCountdown);
  const [step, setStep] = useState<StepEnum>(initialStep);
  const [cycle, setCycle] = useState<number>(shortBreakCycle);

  useEffect(() => {
    if(countdown <= 0 && step === StepEnum.Working){
      setCountdown(cycle !== 0 ? shortBreakCountdown : longBreakCountdown);
      setStep(cycle !== 0 ? StepEnum.ShortBreak : StepEnum.LongBreak);
      return;
    }

    if(countdown <= 0 && (step === StepEnum.ShortBreak || step === StepEnum.LongBreak)){
      setCountdown(workCountdown);
      setStep(StepEnum.Working);
      setCycle(cycle === 0 ? shortBreakCycle : cycle - 1);

      return;
    }

    const timer = setTimeout(() => {
      setCountdown((oldState) => oldState - 1); 
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, initialStep]);

  return (
    <S.Countdown fontSize={8} background="#FF8989"  >
      <span>{convertSecondsToString(countdown)}</span>
    </S.Countdown>
  );
};

