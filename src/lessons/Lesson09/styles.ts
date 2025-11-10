import styled from "@emotion/styled";
import { css } from "@emotion/react";

const boxBasicStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Lesson09Wrapper = styled.div`
  ${boxBasicStyles}
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  gap: 30px;
  flex: 1;
  padding: 50px;
  background: rgba(235, 220, 175, 1);
  font-size: 36px;
`;

export const BoxInfo = styled.div`
  ${boxBasicStyles}
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  padding: 20px;
  border: 2px solid rgba(39, 4, 57, 1);
  background: rgba(252, 166, 255, 1);
  color: rgba(38, 6, 40, 1);
`;

export const AnimalBox = styled.div`
  ${boxBasicStyles}
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  padding: 30px;
  background: rgba(172, 236, 232, 1);
  border-radius: 10px;
  font-size: 28px;

  & > p {
    text-decoration: underline;
  }
`;

export const InputsWrapper = styled.div`
  ${boxBasicStyles}
  gap: 20px;
  width: 400px;
`;

export const Result = styled.div`
  font-size: 30px;
  color: rgba(40, 15, 86, 1);
`;
