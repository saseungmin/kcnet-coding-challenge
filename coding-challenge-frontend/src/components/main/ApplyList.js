import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import { useSelector } from 'react-redux';
import ApplyItem from './ApplyItem';

const ApplyListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const ApplyButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const ApplyList = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  return (
    <ApplyListBlock>
      <ApplyButtonWrapper>
        {user && user.userstatus === 'manager' ? (
          <Button to="/write">코딩 챌린지 등록</Button>
        ): (null)        
        }
      </ApplyButtonWrapper>
      <ApplyItem />
      <ApplyItem />
      <ApplyItem />
    </ApplyListBlock>
  );
};

export default ApplyList;
