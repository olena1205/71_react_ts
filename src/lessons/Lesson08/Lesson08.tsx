// Использование обычного css (стили прописываются в отдельном файле и
// добавляются классы в JSX)
import { BoxInfo, ContentContainer, Text, Image } from "./styles";
import "./styles.css";
import ImgLogo from "assets/logo.jpg";
import ImgAvatar from "assets/avatar.jpg";


function Lesson08() {
  // Объект для inline стилей (2 способ)
  const textStyle = {
    color: "blue",
    fontSize: "26px",
  };

  return (
    <div className="lesson08-wrapper">
      {/* 2 способ - inline styles (передача объекта стилей в атребут style) */}
      <div style={{ color: "blueviolet", fontSize: "24px" }}>
        Inline style example
      </div>
      <p style={textStyle}>Inline style example 2</p>
      <div style={textStyle}>Inline style example 3</div>
      {/* 3 способ - использование библиотеки emotion */}
      <BoxInfo primary>
        <ContentContainer>
          <Image src={ImgAvatar} />
          <Text>Emotion example 1</Text>
        </ContentContainer>
      </BoxInfo>
      <BoxInfo>
        <ContentContainer>
          <Image src={ImgLogo} />
          <Text>Emotion example 2</Text>
        </ContentContainer>
      </BoxInfo>
    </div>
  );
}

export default Lesson08;
