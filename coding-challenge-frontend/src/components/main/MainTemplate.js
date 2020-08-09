import React from 'react';
import styled from 'styled-components';
import palette from 'src/lib/styles/palette';
import Responsive from '../common/Responsive';

const MainFormBlock = styled.div`


`;


const MainTemplate = ({children}) => {
    return (
        <>
        <MainFormBlock>
            {children}
        </MainFormBlock>
        </>
    );
};

export default MainTemplate;