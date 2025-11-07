import styled from "@emotion/styled";

// Интерфейс для пропсов стилизованного компонента BoxInfo
interface BoxInfoStyledProps {
  primary?: boolean;
}

export const BoxInfo = styled.div<BoxInfoStyledProps>`
  display: flex;
  align-items: center;
  padding: 20px;
  min-width: 300px;
  min-height: 300px;
  // Добавление логики через props для использования разных значений background
  /* background: rgb(6, 62, 65, 1); */
  background: ${({ primary }) =>
    primary ? "rgba(65, 22, 6, 1)" : "rgba(6, 62, 65, 1)"};
  border: 2px solid rgba(5, 88, 76, 1);
  color: white;
  font-size: ${({ primary }) =>
    primary ? "40" : "30px"};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: colum;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;
export const Image = styled.img`
  width: 30px;
`;
export const Text = styled.p``;
