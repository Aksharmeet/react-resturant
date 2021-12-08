
import React, { useState } from 'react';
import LuxonUtils from '@date-io/luxon';
import {
  DatePicker, MuiPickersUtilsProvider,
} from '@material-ui/pickers'


function Calender() {
    function addDays(date, number) {
        const newDate = new Date(date);
        return new Date(newDate.setDate(newDate.getDate() + number));
    }
    const [selectedDate, handleDateChange] = useState(new Date());
    return (
       
    
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <DatePicker minDate={new Date()} maxDate={addDays(new Date(), 45)}  value={selectedDate} onChange={handleDateChange} />
    
      
    </MuiPickersUtilsProvider>
    )

       
   
}

export default Calender;
