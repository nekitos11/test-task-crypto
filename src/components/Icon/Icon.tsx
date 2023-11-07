import * as React from 'react';
import { HTMLAttributes } from 'react';

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  icon: string;
}

export const Icon = ({ icon, className = '', ...rest }: IconProps) => (
  <div className={className} {...rest}>
    <img src={icon} />
  </div>
);
