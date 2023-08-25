import styled from 'styled-components';
import plus from '../../asset/darkPlus.svg';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import { PALETTE_COMPONENT } from '../../styles/colors';

const Button = styled.button`
  width: 115px;
  height: 40px;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 10px;
  background-color: #fff8e7;

  ${FONT_STYLE_V1.text.text_16_medium}
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: ${PALETTE_COMPONENT.primary_black};

  &:hover {
    box-shadow: 0 0 14px #66470020;
  }
  &:active {
    background-color: #fff0cc;
    box-shadow: 0 0 14px #66470020;
  }
`;

function PlusButton() {
  return (
    <Button type="button">
      <span>
        <img src={plus} alt="plus" />
      </span>
      <span>Button</span>
    </Button>
  );
}

export default PlusButton;
