import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import PageOne from '../components/register/pageOne';
import PageTwo from '../components/register/pageTwo';
import PageThree from '../components/register/pageThree';
import PageFour from '../components/register/pageFour';
import ProductTempSaveButton from '../components/register/ProductTempSaveButton';
import { useAtom } from 'jotai';
import { productIdAtom } from '../store/registerAtom';
import useProductTempInfo from '../components/register/useProductTempInfo';
import { RotatingLines } from 'react-loader-spinner';

const RegisterWrapper = styled.div`
  header {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    margin-bottom: 32px;
    button {
      width: 60px;
      height: 60px;
    }
    .title {
      width: calc(100% - 120px);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 500;
    }
    .save {
      color: var(--color-purple);
    }
  }
`;

const LoadingIndicatorWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuctionRegister = () => {
  const { pageNumber, productId } = useParams();
  const [itemId, setItemId] = useAtom(productIdAtom);
  const [pageName, setPageName] = useState('');
  const [loading, setLoading] = useState(true);

  const loadingFinish = () => {
    setLoading(false);
  };

  useProductTempInfo(String(productId), loadingFinish);

  useEffect(() => {
    switch (pageNumber) {
      case '1':
        setPageName('사진 업로드');
        break;
      case '2':
        setPageName('주요 정보 입력');
        break;
      case '3':
        setPageName('상세 정보 입력');
        break;
      default:
        setPageName('시작가 입력');
    }
  }, [pageNumber]);

  // product Id를 저장해줌
  useEffect(() => {
    setItemId(String(productId));
  }, []);

  if (loading) {
    return (
      <LoadingIndicatorWrapper>
        <RotatingLines
          strokeColor="black"
          strokeWidth="3"
          animationDuration="0.75"
          width="50"
          visible={true}
        />
      </LoadingIndicatorWrapper>
    );
  }

  return (
    <RegisterWrapper>
      <header>
        <button>
          <AiOutlineClose />
        </button>
        <div className="title">{pageName}</div>
        <ProductTempSaveButton />
      </header>
      {pageNumber === '1' && <PageOne />}
      {pageNumber === '2' && <PageTwo />}
      {pageNumber === '3' && <PageThree />}
      {pageNumber === '4' && <PageFour />}
    </RegisterWrapper>
  );
};

export default AuctionRegister;
