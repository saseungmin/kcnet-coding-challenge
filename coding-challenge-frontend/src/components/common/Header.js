import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 5;
`;

const Wrapper = styled(Responsive)`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-weight: 800;
    letter-spacing: 2px;
    font-size: 30px;
    font-family: 'Cute Font', cursive;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 5rem;
`;

const UserInfo = styled.div`
  font-weight: 500;
  margin-right: 1rem;
  font-family: 'Do Hyeon', sans-serif;
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            KCNET 코딩 챌린지
          </Link>
          {user ? (
            <div className="right">
              <UserInfo>
                {user.userid}
                {`(${user.username})`}
              </UserInfo>
              <Button to="/myinfo" cyan style={{ marginRight: '0.5rem' }}>
                내 정보
              </Button>
              <Button onClick={onLogout}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login" style={{ marginRight: '0.5rem' }}>
                로그인
              </Button>
              <Button to="/register">회원가입</Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
