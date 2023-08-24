import styled from 'styled-components';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';

const Button = styled.button`
  width: 80px;
  height: 40px;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  background-color: #1a1200;

  ${FONT_STYLE_V1.text.text_16_medium}
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
  color: #fff8e7;

  &:hover {
    box-shadow: 0 0 14px #66470020;
  }
  &:active {
    box-shadow: 0 0 14px #66470020;
  }
`;

function DarkDefaultButton() {
  return <Button type="button">Button</Button>;
}

export default DarkDefaultButton;
