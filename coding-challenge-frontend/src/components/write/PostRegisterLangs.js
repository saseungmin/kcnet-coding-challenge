import React from 'react';

import styled from 'styled-components';

const PostRegisterLangsBlock = styled.label`
  margin-right: 1rem;
  cursor: pointer;
`;
const PostRegisterLangs = ({ onChangeLangs, inputCheckBox }) => (
  <>
    <PostRegisterLangsBlock>
      <input
        type="checkbox"
        name="langs"
        value="Java"
        onChange={onChangeLangs}
        ref={inputCheckBox.current[0]}
      />
      Java
    </PostRegisterLangsBlock>
    <PostRegisterLangsBlock>
      <input
        type="checkbox"
        name="langs"
        value="JavaScript"
        onChange={onChangeLangs}
        ref={inputCheckBox.current[1]}
      />
      JavaScript
    </PostRegisterLangsBlock>
    <PostRegisterLangsBlock>
      <input
        type="checkbox"
        name="langs"
        value="Python"
        onChange={onChangeLangs}
        ref={inputCheckBox.current[2]}
      />
      Python
    </PostRegisterLangsBlock>
    <PostRegisterLangsBlock>
      <input
        type="checkbox"
        name="langs"
        value="C#"
        onChange={onChangeLangs}
        ref={inputCheckBox.current[3]}
      />
      C#
    </PostRegisterLangsBlock>
  </>
);

export default PostRegisterLangs;
