import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { convertSecondsToString } from '../../utils';
import * as S from './styles';

export enum StepEnum {
  Working = 1,
  Stoped,
  ShortBreak,
  LongBreak,
};

export const useStepColor = (initialStep: StepEnum): [string, StepEnum, Dispatch<SetStateAction<StepEnum>>] => {
  const [stepState, setStepState] = useState<StepEnum>(() => initialStep);
  
  const color = useMemo(() => ({
    Working: '#F67280',
    Stoped: '#F8B184',
    ShortBreak: '#D6F8B8',
    LongBreak: '#ACDEAA',
  }[StepEnum[stepState]]) as string, [stepState]);

  return [color, stepState, setStepState];
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
  const [color, step, setStep] = useStepColor(initialStep);
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
    <S.Countdown fontSize={8} background={color}  >
      <span>{convertSecondsToString(countdown)}</span>
    </S.Countdown>
  );
};

