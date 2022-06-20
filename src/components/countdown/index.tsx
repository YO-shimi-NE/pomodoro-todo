import React, { useEffect, useState } from 'react';
import z from 'zod';
import { DEFAULT_COUNTDOWN_TIME } from '../../configs';
import { convertSecondsToString } from '../../utils';
import * as S from './styles';

export const CountdownEnum = z.enum(['Working', 'Stoped', 'ShortBreak', 'LongBreak']);

const CountdownProps = z.object({
  initialCountdown: z.number().optional().default(DEFAULT_COUNTDOWN_TIME),
  initialStep: CountdownEnum.default(CountdownEnum.Values.Stoped),
});

type CountdownProps = z.infer<typeof CountdownProps>;

export default ({ initialCountdown, initialStep }: CountdownProps) => {
  const [timer, setTimer] = useState(initialCountdown);
 debugger;
  useEffect(() => {
    const st = setTimeout(() => {
      setTimer((oldState) => oldState - 1); 
    }, 1000);

    return () => clearInterval(st);
  }, [timer]);

  return (
    <S.Countdown>
      <span>{convertSecondsToString(timer)}</span>
    </S.Countdown>
  );
};

