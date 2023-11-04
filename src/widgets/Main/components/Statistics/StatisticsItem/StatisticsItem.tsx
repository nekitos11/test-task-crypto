import './StatisticsItem.css';

interface StatisticsItemProps {
  title: string;
  label: string;
  isPlusDay?: boolean;
}

export const StatisticsItem = ({ title, label, isPlusDay }: StatisticsItemProps) => {
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
        {label}
      </div>
    </div>
  );
};