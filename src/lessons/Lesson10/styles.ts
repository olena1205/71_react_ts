import styled from "@emotion/styled";
import { css } from "@emotion/react";
const boxBasicStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Lesson10Wrapper = styled.div`
  ${boxBasicStyles}
  gap: 30px;
  flex: 1;
  padding: 50px;
  background: rgba(177, 209, 163, 1);
  font-size: 36px;
`;
export const InputsWrapper = styled.div`
  ${boxBasicStyles}
  gap: 20px;
  width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  
`;
export const Result = styled.div`
 font-size: 30px;
 color: rgba(40, 15, 86, 1);
`