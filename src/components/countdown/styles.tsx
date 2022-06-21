import styled from 'styled-components';

interface ICountdownProps {
  fontSize: number,
  background: string,
}

export const Countdown = styled.div<ICountdownProps>`
  flex: 1;
  text-align: center;
  background: ${(props) => props.background};
  font-size: ${(props) => props.fontSize}em;
`;

