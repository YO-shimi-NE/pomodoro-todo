import React from 'react';
import './App.css';
import Countdown, { StepEnum } from './components/countdown';
import { DEFAULT_COUNTDOWN_TIME } from './configs';
import * as S from './styles/containers';
import { PlayIcon } from './styles/icons';

function App() {
  return (
    <div className="App">
      <S.Container>
        <Countdown
          initialStep={StepEnum.Working}
          shortBreakCountdown={5 * 60}
          initialCountdown={DEFAULT_COUNTDOWN_TIME}
          shortBreakCycle={3}
          workCountdown={DEFAULT_COUNTDOWN_TIME}
          longBreakCountdown={15 * 60}
        />
      </S.Container>
    </div>
  );
}

export default App;
