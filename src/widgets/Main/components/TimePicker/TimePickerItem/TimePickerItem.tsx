import './TimePickerItem.css';

interface TimePickerItemProps {
  label: string;
  onChange: () => void;
  isItemChecked: boolean;
}

export const TimePickerItem = ({ label, onChange, isItemChecked }: TimePickerItemProps) => {
  return (
    <div
      onClick={onChange}
      className={`timePickerItem${isItemChecked ? ' timePickerItem_checked' : ''}`}
    >
      {label}
    </div>
  );
};