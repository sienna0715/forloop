import { styled } from 'styled-components';
// components
import { PALLETTE_MAIN } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import { BREAKPOINTDESKTOP } from '../../breakpoint';
import IntroSVG from './IntroSVG';
import ArrowButton from '../ArrowButton';

const IntroWrap = styled.div`
  width: 100%;
  margin-top: 8rem;
  display: flex;
  justify-content: center;
  position: relative;
`;
const IntroContainer = styled.div`
  max-width: 1800px;
  max-height: max-content;
  margin: 0 10rem;
  padding: 5rem;
  border: 3px solid ${PALLETTE_MAIN.sub_main};
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 450px;
`;
const TextContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    flex-direction: column;
    align-items: center;
  }
`;
const TitleBox = styled.div`
  padding-bottom: 5rem;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Title = styled.div`
  ${FONT_STYLE_V1.text.text_100_medium};
  width: max-content;
  &:nth-child(2) {
    padding-left: 2rem;
  }
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    font-size: 60px;
  }
`;
const Content = styled.span`
  ${FONT_STYLE_V1.text.text_24_medium};
  min-width: 500px;
  letter-spacing: 2px;
  line-height: 1.5;
  padding-left: 5rem;
  padding-top: 2rem;
  @media screen and (max-width: ${BREAKPOINTDESKTOP}px) {
    padding: 0;
  }
`;

function Intro() {
  return (
    <IntroWrap>
      <IntroSVG />
      <IntroContainer>
        <TextContainer>
          <TitleBox>
            <Title>for designer;</Title>
            <Title>for developer;</Title>
          </TitleBox>
          <Content>
            폴룹에서 제공하는 재사용 컴포넌트를 사용하여 쉽고 간편하게 적용할 수
            있어 작업을 빠르게 진행할 수 있도록 도와주는 라이브러리 입니다.
            <br />
            <br />
            재사용 컴포먼트뿐만 아니라 폴룹만의 아이콘, 색상으로 웹사이트를 쉽고
            빠르게 제작해보세요.
          </Content>
        </TextContainer>
        <ButtonBox>
          <ArrowButton />
        </ButtonBox>
      </IntroContainer>
    </IntroWrap>
  );
}

export default Intro;