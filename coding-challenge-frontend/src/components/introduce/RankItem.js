import React from 'react';
import styled from 'styled-components';

const RankItemBlock = styled.div`
    padding: 6px 12px;
    display: table-cell;
    &.text-center{
    text-align: center;
    }
`;

const RankTableItemBoxBlock = styled.div`
  display: table-row;
  background: #f6f6f6;
  &:nth-of-type(odd){
    background: #e9e9e9;
  }
  &.header{
    font-weight: 900;
    color: #ffffff;
    background: ${palette.Teal[5]};
  }
`;

const RankItem= () => {
    return (
        <RankTableItemBoxBlock>
            <RankItemBlock>
                
            </RankItemBlock>
        </RankTableItemBoxBlock>
    );
};

export default RankItem;