import styled from 'styled-components';
import z from 'zod';

const CountdownSchema = z.object({
  fontSize: z.number().optional(),
  backgroundColor: z.string().optional(),
});

export type CountdownProps = z.infer<typeof CountdownSchema>;

export const Countdown = styled.div<CountdownProps>`
  flex: 1;
  text-align: center;
  font-size: ${(props) => props.fontSize ?? 8}em;
`;

