import { styled } from 'styled-components';
import MainIconBackground from './MainIconBackground';
import MainIconList from './MainIconList';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

function MainIcon() {
  return (
    <Container>
      <MainIconBackground />
      <MainIconList />
    </Container>
  );
}

export default MainIcon;