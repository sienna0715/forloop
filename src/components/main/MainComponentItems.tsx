import { styled } from 'styled-components';
import MainComponentItem from './MainComponentItem';
import PlusButton from '../../library/button/PlusButton';
import InputDefault from '../../library/input/InputDefault';
import DefaultDropdown from '../../library/dropdown/DefaultDropdown';
import CheckboxRedLabel from '../../library/checkbox/label/CheckboxRedLabel';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function MainComponentItems() {
  const datas = [
    { title: 'checkbox', component: <CheckboxRedLabel /> },
    { title: 'button', component: <PlusButton /> },
    { title: 'input', component: <InputDefault /> },
    { title: 'dropdown', component: <DefaultDropdown /> },
  ];
  return (
    <Container>
      {datas.map((data) => {
        return (
          <MainComponentItem title={data.title}>
            {data.component}
          </MainComponentItem>
        );
      })}
    </Container>
  );
}

export default MainComponentItems;