import { styled } from 'styled-components';
import MainComponentTitle from './MainComponentTitle';
import MainComponentItems from './MainComponentItems';

const Container = styled.div`
  width: 100%;
  padding: 0 5.625rem;
  margin-bottom: 20.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MainComponent() {
  return (
    <Container>
      <MainComponentTitle />
      <MainComponentItems />
    </Container>
  );
}

export default MainComponent;