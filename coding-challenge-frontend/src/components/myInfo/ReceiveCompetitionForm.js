import React from 'react';
import styled from 'styled-components';

import ReceiveCompetitionItem from './ReceiveCompetitionItem';

const ReceiveCompetitionFormBlock = styled.div`
  margin-bottom: 1.2rem;
  &.empty {
    margin-left: 1rem;
  }
`;

const ReceiveCompetitionForm = ({ myInfoList, loading, seconds }) => {
  if (!(!!myInfoList && !!myInfoList.length) && !loading) {
    return (
      <ReceiveCompetitionFormBlock className="empty">
        접수한 대회가 없습니다.
      </ReceiveCompetitionFormBlock>
    );
  }
  return (
    <ReceiveCompetitionFormBlock>
      {!loading && myInfoList && (
        <>
          {myInfoList.map((receive) => (
            <ReceiveCompetitionItem key={receive._id} receive={receive.applyId} seconds={seconds} />
          ))}
        </>
      )}
    </ReceiveCompetitionFormBlock>
  );
};

export default ReceiveCompetitionForm;
