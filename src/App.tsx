import React from 'react';
import './App.css';
import Countdown, { CountdownEnum } from './components/countdown';
import { DEFAULT_COUNTDOWN_TIME } from './configs';
import * as S from './styles/containers';
import { PlayIcon } from './styles/icons';

function App() {
  return (
    <div className="App">
      <S.Container>
        <Countdown initialCountdown={DEFAULT_COUNTDOWN_TIME} initialStep={CountdownEnum.Values.Stoped}/>
      </S.Container>
    </div>
  );
}

export default App;
