import styled from 'styled-components';
import plus from '../../asset/darkPlus.svg';

const Button = styled.button`
  width: 115px;
  height: 40px;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid #1a1200;
  border-radius: 10px;
  background-color: #fff8e7;

  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #1a1200;
`;

function RFilledOutLinePlusButton() {
  return (
    <Button type="button">
      <span>Button</span>
      <span>
        <img src={plus} alt="plus" />
      </span>
    </Button>
  );
}

export default RFilledOutLinePlusButton;
