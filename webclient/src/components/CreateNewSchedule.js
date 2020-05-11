import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import $ from 'jquery';
import {
  MuiPickersUtilsProvider,
  // KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

function MaterialUIPickers() {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-05-13T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
    saveStartDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Start Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

function saveStartDate(startDate) {
  $.ajax({
    type: "POST",
    url: "http://127.0.0.1:5000/create-new-schedule",
    data: {
      date: startDate,
      schedType: 'none'
    },
    success: function(response) {
      console.log(response);
    }
  });
}

function SelectDateDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <StyledButton onClick={handleClickOpen}>
        Select Start Date
      </StyledButton>
      <Dialog onClose={handleClose} open={open}>
        <DialogContent>
          <MaterialUIPickers/>
        </DialogContent>
        <DialogActions>
          {/* <DateDoneDialog onClick={handleClose}/> */}
          <Button autoFocus onClick={handleClose} color="primary">
              Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

// function DateDoneDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button autoFocus onClick={handleClickOpen}>
//         Done
//       </Button>
//       <Dialog onClose={handleClose} open={open}>
//         <DialogTitle id="customized-dialog-title" onClose={handleClose}>
//           Success
//         </DialogTitle>
//         <DialogContent dividers>
//           <Typography gutterBottom>
//             Your start date has been selected. Now you can move on to the next step: creating your block schedule.
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button autoFocus onClick={handleClose} color="primary">
//             Done
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   )
// }

function runBlockSchedule() {
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:5000/create-new-schedule",
        data: {
          schedType: 'block',
          date: 'none'
        },
        success: function(response) {
          console.log(response)
        }
    });
}

function CreateBlockDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    runBlockSchedule();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <StyledButton onClick={handleClickOpen}>
        Create Block Schedule
      </StyledButton>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Success
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Your block schedule has been created for the next 6 months. You can view it on the Schedule Page. Once the residents have given you their requested week off you can input it in the Week Off field on the Residents Page.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function runFullSchedule() {
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:5000/create-new-schedule",
        data: {
          schedType: 'full',
          date: 'none'
        },
        success: function(response) {
          // if (response.startsWith('full schedule was not run')) {
          // }
          console.log(response)
        }
    });
}

function CreateFullDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    // ajax?
    runFullSchedule();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <StyledButton onClick={handleClickOpen}>
        Create Full Schedule
      </StyledButton>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Success
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Your full schedule has been created for the next 6 months. You can view it on the Schedule Page.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #28547A 30%, #28547A 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export default class CreateNewSchedule extends Component {
    render() {
        return (
            <div className="App">
                <Header>
                    <h1>CreateNewSchedule Page </h1>
                </Header>
                <p className="Create-schedule-title">Creating Your Schedule</p>
                <div className="Welcome-body">
                    <div className="Create-schedule-card">
                        <h2>STEP 1</h2>
                        <h3>Choose 6 month block start date</h3>
                        <SelectDateDialog className="Select-date"/>
                    </div>
                    {/* arrow icon */}
                    <div className="Create-schedule-card">
                        <h2>STEP 2</h2>
                        <h3>Create 6 month block schedule</h3>
                        <CreateBlockDialog/>
                    </div>
                    {/* arrow icon */}
                    <div className="Create-schedule-card">
                        <h2>STEP 3</h2>
                        <h3>Create 6 month full schedule</h3>
                        <CreateFullDialog/>
                    </div>
                </div>
            </div>
        )
    }
}
