"use client";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const theme = createTheme({
  palette: {
    primary: {
      main: '#956d84', // Change this to your desired color
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#956d84', // Change this to your desired color
            borderWidth: '1px', // Change this to your desired border width
          },
          '& .MuiOutlinedInput-input': {
            color: '#dddddd', // Change this to your desired default text color
            fontWeight: 300, // Change this to your desired default font weight
          },
          '&.Mui-focused .MuiOutlinedInput-input': {
            color: '#956d84', // Change this to your desired focused text color
            fontWeight: 300, // Change this to your desired focused font weight
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#956d84', // Change this to your desired focused border color
            borderWidth: '1px', // Change this to your desired focused border width
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#dddddd', // Change this to your desired label color
          fontWeight: 300, // Change this to your desired label font weight
        },
      },
    },
  },
});

export default function TextFieldSlotProps() {
  const handleDateChange = (date: any) => {
    console.log(date);
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            label="Дата доставки"
            slotProps={{ textField: { size: 'small' } }}
            onChange={handleDateChange}
          />
        </DemoContainer>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
