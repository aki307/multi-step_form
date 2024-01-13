import React, { useContext, useEffect } from 'react';
import BirthdateContext from '../context/BirthdateContext';

const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: currentYear - 1920 + 1 }, (_, i) => (
  <option key={i} value={1920 + i}>{1920 + i}年</option>
));
const monthOptions = Array.from({ length: 12 }, (_, i) => (
  <option key={i} value={i + 1}>{i + 1}月</option>
));

const BirthdateInput: React.FC = () => {
  const birthdateContext = useContext(BirthdateContext);

  console.log("Rendering BirthdateInput component");

  useEffect(() => {
    console.log("Current birthdate from context:", birthdateContext?.birthdate);
  }, [birthdateContext?.birthdate]);

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>, type: 'year' | 'month' | 'day') => {
    const value = parseInt(event.target.value);
    let newDate = new Date(
      type === 'year' ? value : birthdateContext.birthdate.year,
      type === 'month' ? value - 1 : birthdateContext.birthdate.month - 1,
      type === 'day' ? value : birthdateContext.birthdate.day
    );
    newDate.setMinutes(newDate.getMinutes() - newDate.getTimezoneOffset());
    const newDateString = newDate.toISOString().split('T')[0];
    console.log("New date string:", newDateString); 
    birthdateContext?.setBirthdate(newDateString);
  };

  const daysInMonth = new Date(birthdateContext?.birthdate.year || currentYear, birthdateContext?.birthdate.month - 1 || 0, 0).getDate();
  const dayOptions = Array.from({ length: daysInMonth }, (_, i) => (
    <option key={i} value={i + 1}>{i + 1}日</option>
  ));

  const { year, month, day } = birthdateContext?.birthdate || { year: currentYear, month: 1, day: 1 };

  return (
    <div className="field">
      <label className="label">-生年月日-</label>
      <div className="field is-grouped">
        <div className="control">
          <div className="select">
            <select value={year} onChange={e => handleDateChange(e, 'year')}>
              {yearOptions}
            </select>
          </div>
        </div>
        <div className="control">
          <div className="select">
            <select value={month} onChange={e => handleDateChange(e, 'month')}>
              {monthOptions}
            </select>
          </div>
        </div>
        <div className="control">
          <div className="select">
            <select value={day} onChange={e => handleDateChange(e, 'day')}>
              {dayOptions}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdateInput;
