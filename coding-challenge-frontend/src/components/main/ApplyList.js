import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import ApplyItem from './ApplyItem';

const ApplyListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const ApplyButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const ApplyList = ({applys, error, loading, user, seconds}) => {
  if(error){
    return <ApplyListBlock> 에러가 발생했습니다. </ApplyListBlock>
  }

  return (
    <ApplyListBlock>
      <ApplyButtonWrapper>
        {user && user.userstatus === 'manager' ? (
          <Button to="/write">코딩 챌린지 등록</Button>
        ): (null)        
        }
      </ApplyButtonWrapper>
      {!loading && applys && (
        <>
         {applys.map(apply => (
           <ApplyItem apply={apply} key={apply._id} seconds={seconds}/>
         ))
         }
        </>
      )}
    </ApplyListBlock>
  );
};

export default ApplyList;
