import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Responsive from './Responsive';
import palette from '../../lib/styles/palette';
import openSourceLogo from '../../static/images/open_source-removebg.png';
import kcnetLogo from '../../static/images/kcnet_logo.png';

const FooterBlock = styled.div`
  width: 100%;
  background: ${palette.gray[7]};
  border-top: 0.1rem solid ${palette.gray[2]};
  padding-bottom: 10rem;
`;

const Wrapper = styled(Responsive)`
  height: 5rem;
  margin-top: 2rem;
  .logo {
    margin-left: 1rem;
    color: whitesmoke;
    font-weight: 800;
    letter-spacing: 2px;
    font-size: 20px;
    font-family: 'Cute Font', cursive;
  }
`;

const ChallengeInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: end;
  margin-top: 1rem;
  .link {
    margin-left: 1rem;
    color: ${palette.gray[5]};
    font-family: 'Jua', sans-serif;
    margin-bottom: 0.3rem;
    :hover {
      color: ${palette.gray[2]};
    }
    cursor: pointer;
  }
`;

const CompanyInfoBlock = styled.div`
  margin-top: 1rem;
  font-size: 12px;
  line-height: 1.5;
  color: #bdbdbd;
  border-top: 1px solid ${palette.gray[8]};
  display: flex;
  justify-content: space-between;
`;

const InfoCompany = styled.div`
  margin-left: 1rem;
  img {
    display: flex;
    margin: 1rem 0 10px 0;
  }
`;

const InfoCompanyDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const AHrefBlock = styled.a`
  text-decoration: underline;
  :hover {
    color: ${palette.gray[2]};
  }
`;

const OpenSourceBlock = styled.div`
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    margin-top: 2rem;
  }
  img {
    margin: 0;
  }
`;

const Footer = ({ user, onLogout }) => (
  <FooterBlock>
    <Wrapper>
      <Link to="/" className="logo">
        KCNET 코딩 챌린지
      </Link>
      <ChallengeInfoBlock>
        {user ? (
          <>
            <Link to="/myinfo" className="link">
              내정보
            </Link>
            <div onClick={onLogout} className="link">
              로그아웃
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="link">
              로그인
            </Link>
            <Link to="/register" className="link">
              회원가입
            </Link>
          </>
        )}
      </ChallengeInfoBlock>
      <CompanyInfoBlock>
        <InfoCompanyDiv>
          <InfoCompany>
            <AHrefBlock href="http://www.kcnet.co.kr">
              <img src={kcnetLogo} alt="kcnetLogo" width="60" height="20" />
            </AHrefBlock>
            (주) 케이씨넷
          </InfoCompany>
          <InfoCompany>
            우)08503 서울특별시 금천구 가산디지털로1로 165 가산비즈니스센터 1001호(가산동)
          </InfoCompany>
          <InfoCompany>
            <div>Copyright2020.©KCNET. All Right Reserved.</div>
          </InfoCompany>
        </InfoCompanyDiv>
        <OpenSourceBlock>
          <div>
            Create By. &nbsp;
            <AHrefBlock href="https://github.com/saseungmin">seungmin Sa</AHrefBlock>
          </div>
          <AHrefBlock href="https://github.com/saseungmin/kcnet-coding-challenge">
            <img src={openSourceLogo} alt="openSourceLogo" width="100" height="45" />
          </AHrefBlock>
        </OpenSourceBlock>
      </CompanyInfoBlock>
    </Wrapper>
  </FooterBlock>
);

export default Footer;
