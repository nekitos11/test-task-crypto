import './StatisticsItem.css';
import { Loader } from '../../../../../components/Loader';

interface StatisticsItemProps {
  title: string;
  label: string;
  isPlusDay?: boolean;
  isLoading?: boolean;
}

export const StatisticsItem = ({ title, label, isPlusDay, isLoading }: StatisticsItemProps) => {
  return (
    <div className="statistics-item">
      <div className="statistics-item__title">{title}</div>
      <div
        className={`statistics-item__label${
          isPlusDay !== undefined
            ? isPlusDay
              ? ' statistics-item__label_plus'
              : ' statistics-item__label_minus'
            : ''
        }`}
      >
          {isLoading ? <div className="statistics-item__loader"><Loader /></div> :label}
      </div>
    </div>
  );
};