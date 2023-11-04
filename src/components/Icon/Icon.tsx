import * as React from 'react';

export const Icon = ({ icon, className = '' }) => (
  <div className={className}>
    <img src={icon} />
  </div>
);
