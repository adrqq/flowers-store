"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const theme = createTheme({
  palette: {
    primary: {
      main: "#956d84",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#956d84",
            borderWidth: "1px",
          },
          "& .MuiOutlinedInput-input": {
            color: "#dddddd",
            fontWeight: 300,
          },
          "&.Mui-focused .MuiOutlinedInput-input": {
            color: "#956d84",
            fontWeight: 300,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#956d84",
            borderWidth: "1px",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#dddddd",
          fontWeight: 300,
          transform: "translate(14px, 18px) scale(1)",
          fontSize: "1.2rem",
          lineHeight: "2.4375em",
          "&.MuiInputLabel-shrink": {
            transform: "translate(7px, -19px) scale(0.75)",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          width: "415px",
          height: "63px",
          overflow: "visible",
        },
        input: {
          fontSize: "1.3rem",
          lineHeight: "2.4375em",
          padding: 0,
        },
      },
    },
  },
});

export default function TextFieldSlotProps() {
  window.onload = function () {
    const elements2 = document.getElementsByClassName(
      "css-4jnixx-MuiStack-root"
    );
    for (let i = 0; i < elements2.length; i++) {
      (elements2[i] as HTMLElement).style.padding = "0";
      (elements2[i] as HTMLElement).style.overflow = "visible";
      (elements2[i] as HTMLElement).style.fontFamily = "inherit";
    }
  };

  const handleDateChange = (date: any) => {
    console.log(date);
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="Дата доставки"
            slotProps={{ textField: { size: "small" } }}
            onChange={handleDateChange}
          />
        </DemoContainer>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
