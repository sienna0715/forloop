import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { PALETTE_COMPONENT } from '../../styles/colors';
import arrowB from '../../asset/arrow.svg';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  position: absolute;
  margin-bottom: 35%;
  font-size: 100px;
  font-weight: 400;
  line-height: 40px;
  color: ${PALETTE_COMPONENT.primary_beige};
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SideList = styled.div`
  position: absolute;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45%;
`;

const SideListContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 80px;
`;

const SideListContentItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const SideListContentItemIcon = styled.div`
  width: 160px;
  height: 160px;
  border: 2px solid ${PALETTE_COMPONENT.primary_beige};
  border-radius: 50%;
`;

const SideListContentItemText = styled.div`
  height: 30px;
  font-size: 24px;
  font-weight: 400;
  color: ${PALETTE_COMPONENT.primary_beige};
`;

const ArrowButton = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25%;
`;

const SelectIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SelectIconImg = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: ${PALETTE_COMPONENT.primary_beige};
`;

const SelectIconText = styled.div`
  position: absolute;
  height: 570px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  font-size: 50px;
  font-weight: 400;
  color: ${PALETTE_COMPONENT.primary_beige};
`;

const ArrowButtonBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftArrowButtonBorder = styled(ArrowButtonBorder)`
  transform: rotate(0.5turn);
`;

function MainIconList() {
  const [page, setPage] = useState<number>(2);
  const [data, setData] = useState<string[]>([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
  ]);
  const [prevDatas, setPrevDatas] = useState<string[]>([]);
  const [selectDatas, setSelectDatas] = useState('');
  const [nextDatas, setNextDatas] = useState<string[]>([]);

  useEffect(() => {
    const pre = data.slice(page - 4);

    if (pre.length < 4) {
      pre.push(...data.slice(0, 4 - pre.length));
    }

    setPrevDatas(pre);

    setSelectDatas(data[page]);

    const next = data.slice(page + 1, page + 5);

    if (next.length < 4) {
      next.push(...data.slice(0, 4 - next.length));
    }

    setNextDatas(next);
  }, [data, page]);

  console.log(prevDatas, selectDatas, nextDatas);

  return (
    <Container>
      <Title>ICON</Title>
      <ListContainer>
        <SideList>
          <SideListContent>
            <SideListContentItem>
              <SideListContentItemIcon />
              <SideListContentItemText>텍스트</SideListContentItemText>
            </SideListContentItem>
            <SideListContentItem>
              <SideListContentItemIcon />
              <SideListContentItemText>텍스트</SideListContentItemText>
            </SideListContentItem>
          </SideListContent>
          <SideListContent>
            <SideListContentItem>
              <SideListContentItemIcon />
              <SideListContentItemText>텍스트</SideListContentItemText>
            </SideListContentItem>
            <SideListContentItem>
              <SideListContentItemIcon />
              <SideListContentItemText>텍스트</SideListContentItemText>
            </SideListContentItem>
          </SideListContent>
        </SideList>
        <ArrowButton>
          <ArrowButtonBorder>
            <img src={arrowB} alt="right arrowButton" />
          </ArrowButtonBorder>
          <LeftArrowButtonBorder>
            <img src={arrowB} alt="left arrowButton" />
          </LeftArrowButtonBorder>
        </ArrowButton>
        <SelectIcon>
          <SelectIconImg />
          <SelectIconText>텍스트</SelectIconText>
        </SelectIcon>
      </ListContainer>
    </Container>
  );
}

export default MainIconList;
