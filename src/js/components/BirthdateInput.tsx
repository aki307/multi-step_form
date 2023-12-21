import React, { useState } from 'react';

const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: currentYear - 1920 + 1 }, (_, i) => (
  <option key={i} value={1920 + i}>{1920 + i}年</option>
));
const monthOptions = Array.from({ length: 12 }, (_, i) => (
  <option key={i} value={i + 1}>{i + 1}月</option>
));

const BirthdateInput: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(currentYear);
  const [selectedMonth, setSelectedMonth] = useState<number>(1);

  const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
  const dayOptions = Array.from({ length: daysInMonth }, (_, i) => (
    <option key={i} value={i + 1}>{i + 1}日</option>
  ));
  return (
    <div className="field">
      <label className="label">-生年月日-</label>
      <div className="field is-grouped">
        <div className="control">
          <div className="select">
          <select value={selectedYear} onChange={e => setSelectedYear(parseInt(e.target.value))}>
            {yearOptions}
          </select>
          </div>
        </div>
        <div className="control">
          <div className="select">
          <select value={selectedMonth} onChange={e => setSelectedMonth(parseInt(e.target.value))}>
            {monthOptions}
          </select>
          </div>
        </div>
        <div className="control">
          <div className="select">
          <select>
            {dayOptions}
          </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdateInput;
