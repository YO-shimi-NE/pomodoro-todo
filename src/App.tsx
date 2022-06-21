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
          shortBreakCountdown={5}
          initialCountdown={10}
          shortBreakCycle={1}
          workCountdown={15}
          longBreakCountdown={35}
          />
      </S.Container>
    </div>
  );
}

export default App;
