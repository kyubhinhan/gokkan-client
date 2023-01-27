import styled from 'styled-components';
import MainList from '../components/Main/MainList';
import {
  endTimeAuctionItemListAtom,
  newEnrollAuctionItemListAtom,
} from '../store/auctionQueryAtom';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .banner {
    width: calc(100% + 32px);
    height: calc(100vw * 0.6);
    background-color: var(--color-brown100);
    margin-bottom: 64px;
    margin-left: -16px;
    margin-right: -16px;
    margin-top: -32px;
  }
`;

export default function MainPage() {
  return (
    <MainWrapper>
      <div className="banner" />
      <MainList title="마감임박 경매" queryAtom={endTimeAuctionItemListAtom} />
      <MainList
        title="신규 등록 경매"
        queryAtom={newEnrollAuctionItemListAtom}
      />
    </MainWrapper>
  );
}
