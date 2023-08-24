import styled from 'styled-components';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';

const Button = styled.button`
  width: 80px;
  height: 40px;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #1a1200;
  border-radius: 10px;
  background-color: #fff8e7;

  ${FONT_STYLE_V1.text.text_16_medium}
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #1a1200;

  &:hover {
    box-shadow: 0 0 14px #66470020;
  }
  &:active {
    background-color: #fff0cc;
    box-shadow: 0 0 14px #66470020;
  }
`;

function FilledOutLineButton() {
  return <Button type="button">Button</Button>;
}

export default FilledOutLineButton;
