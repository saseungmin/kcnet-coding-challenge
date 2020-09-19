import React, { useState } from 'react';
import { setHours, setMinutes } from 'date-fns';
import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
registerLocale('ko', ko);

const DatePickerForm = ({ start, end }) => {
  const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 30), 16));
  const [endDate, setEndDate] = useState(setHours(setMinutes(new Date(), 30), 16));
  const onChanged = (date) => {
    setStartDate(date);
    console.log(date);
  };

  const onChangeds = (date) => {
    setEndDate(date);
    console.log(date.format());
  };

  const ExampleCustomInput = ({ value, onClick }) => (
    <input className="example-custom-input" onClick={onClick} value={value} />
  );

  return (
    <>
      <DatePicker
        locale="ko"
        selected={startDate}
        onChange={onChanged}
        selectsStart
        showTimeSelect
        name={start}
        minDate={new Date()}
        startDate={startDate}
        endDate={endDate}
        disabledKeyboardNavigation
        dateFormat="yyyy MM dd p"
      />
      ~
      <DatePicker
        locale="ko"
        selected={endDate}
        onChange={onChangeds}
        selectsEnd
        showTimeSelect
        name={end}
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        disabledKeyboardNavigation
        dateFormat="yyyy MM dd p"
      />
    </>
  );
};

export default DatePickerForm;
