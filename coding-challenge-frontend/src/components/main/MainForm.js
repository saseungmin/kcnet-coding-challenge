import React from 'react';
import styled from 'styled-components';

const MainFormBlock = styled.div``;

const MainForm = ({children}) => {
    return (
        <MainFormBlock>
            {children}
        </MainFormBlock>
    );
};

export default MainForm;