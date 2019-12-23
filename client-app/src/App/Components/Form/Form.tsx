import React from 'react';
import TextField from '@material-ui/core/TextField';
import "./Form.scss";
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const Form = () => {
 const [selectedDate, setSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));

  const handleDateChange = (date: any)  => {
    setSelectedDate(date);
  };

//   console.log(selectedDate.toISOString());

    return (
        <div className="form-container">
            <div className="form-title">Create an Event</div>
            <div className="row">
                <div className="col-lg-4">
                    <TextField
                        id="outlined-full-width"
                        label="Event Title"
                        style={{ margin: 6, fontSize: `1.2rem` }}
                        placeholder="Event Title"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </div>
                <div className="col-lg-4">
                    <TextField
                        id="outlined-full-width"
                        label="Event City"
                        style={{ margin: 8, fontSize: `1.2rem` }}
                        placeholder="Event City"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </div>
                <div className="col-lg-4">
                <TextField
                        id="outlined-full-width"
                        label="Event Venue"
                        style={{ margin: 8, fontSize: `1.2rem` }}
                        placeholder="Event Venue"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </div>
            </div>

            <div className="row" style={{marginTop: `2rem`}}>
                <div className="col-12">
                <TextField
                    id="outlined-multiline-static"
                    label="Event description"
                    multiline
                    rows="4"
                    fullWidth
                    placeholder="Event description"
                    variant="outlined"
                 />
                </div>
            </div>

            
            <div className="row" style={{marginTop: `2rem`}}>
                <div className="col-lg-4">
                <TextField
                        id="outlined-full-width"
                        label="Event Category"
                        style={{ margin: 8, fontSize: `1.2rem` }}
                        placeholder="Event Category"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </div>
            </div>
            
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className="row" style={{marginTop: `2rem`}}>
                <div className="col-lg-6">
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Event Date"
                    format="dd/MM/yyyy"
                    fullWidth
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                    
                </div>

                <div className="col-lg-6">
                <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Event Time"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                    />
                </div>
            </div>
            </MuiPickersUtilsProvider>
        </div>
    )
}

export default Form;
