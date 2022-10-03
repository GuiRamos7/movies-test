import React from 'react';
import './styles.css';

const Loading = (props: any) => (
  <div className='lds-ring' {...props}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default React.forwardRef(Loading);
