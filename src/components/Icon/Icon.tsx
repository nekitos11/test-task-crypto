import * as React from 'react';

export const Icon = ({ icon, className = '', ...rest }) => (
  <div className={className} {...rest}>
    <img src={icon} />
  </div>
);
