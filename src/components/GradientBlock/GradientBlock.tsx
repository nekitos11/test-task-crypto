import { ReactNode } from 'react';
import './GradientBlock.css'
interface GradientBlockProps {
  children?: ReactNode;
}

export const GradientBlock = ({ children }: GradientBlockProps) => {
  return <div className="gradient-block">{children}</div>;
};