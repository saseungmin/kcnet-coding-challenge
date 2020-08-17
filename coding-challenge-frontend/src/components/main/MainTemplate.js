import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const MainFormBlock = styled(Responsive)`

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