import './StatisticsItem.css';
import { Loader } from '../../../../../components/Loader';

interface StatisticsItemProps {
  title: string;
  value: number;
  isPlusDay?: boolean;
  isLoading?: boolean;
  isPercentField: boolean;
}

export const StatisticsItem = ({
  title,
  value,
  isPlusDay,
  isLoading,
  isPercentField,
}: StatisticsItemProps) => {
  return (
    <div className="statistics-item">
      <div className="statistics-item__title">{title}</div>
      <div
        className={`statistics-item__label${
          isPercentField
            ? isPlusDay
              ? ' statistics-item__label_plus'
              : ' statistics-item__label_minus'
            : ''
        }`}
      >
        {isLoading ? (
          <div className="statistics-item__loader">
            <Loader />
          </div>
        ) : isPercentField ? (
          `${value}%`
        ) : (
          value
        )}
      </div>
    </div>
  );
};