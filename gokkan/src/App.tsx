import { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import GlobalStyle from './lib/styles/global';

const LayoutPage = lazy(() => import('./pages/LayoutPage'));
const MyPage = lazy(() => import('./pages/MyPage'));
const MainPage = lazy(() => import('./pages/MainPage'));
const LotDetailPage = lazy(() => import('./pages/LotDetailPage'));
const BidModal = lazy(() => import('./components/LotDetail/Bid/BidModal'));
const AuctionRegisterPage = lazy(() => import('./pages/AuctionRegisterPage'));
const ExpertWorkDetailPage = lazy(() => import('./pages/ExpertWorkDetailPage'));
const ExpertWorkListPage = lazy(() => import('./pages/ExpertWorkListPage'));
const SettingPage = lazy(() => import('./pages/SettingPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const TestPage = lazy(() => import('./pages/Testpage'));
const UserVerifyPage = lazy(() => import('./pages/UserVerifyPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const SignInSusPense = lazy(() => import('./components/SignIn/SignInCheck'));
const MyWritingProductPage = lazy(() => import('./pages/MyWritingProductPage'));
const ExaminePage = lazy(() => import('./pages/ExaminePage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const FilterPage = lazy(() => import('./pages/FilterPage'));

function App() {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyle />
      <Routes location={background || location}>
        <Route path="/" element={<LayoutPage />}>
          <Route path="/" element={<MainPage />} />
          <Route
            path="auction/:itemId/:auctionId"
            element={<LotDetailPage />}
          />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="signInCheck" element={<SignInSusPense />} />
          <Route path="myWritingProduct" element={<MyWritingProductPage />} />
          <Route path="expertWorkList" element={<ExpertWorkListPage />} />
          <Route
            path="expertWorkDetail/:itemId"
            element={<ExpertWorkDetailPage />}
          />
        </Route>
        <Route
          path="/register/:pageNumber/:productId"
          element={<AuctionRegisterPage />}
        />
      </Routes>
      {background && (
        <Routes>
          <Route path="/auction/1/bid" element={<BidModal />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/filter" element={<FilterPage />} />
          <Route path="/examine/:itemId" element={<ExaminePage />} />
        </Routes>
      )}
    </Suspense>
  );
}

export default App;
