import { ReactNode } from 'react';
import './GradientBlock.css';

interface GradientBlockProps {
  children?: ReactNode;
  className?: string;
}

export const GradientBlock = ({ children, className }: GradientBlockProps) => {
  return <div className={`gradient-block ${className ? className : ''}`}>{children}</div>;
};