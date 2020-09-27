import React from 'react';
import Button from '../common/Button';

const LangTemplate = ({ langs }) => (
  <>
    {langs.map((val) => (val === 'C#' ? (
      <Button lang to="/?lang=C%23" key={val}>
        {val}
      </Button>
    ) : (
      <Button lang to={`/?lang=${val}`} key={val}>
        {val}
      </Button>
    )))}
  </>
);

export default LangTemplate;
