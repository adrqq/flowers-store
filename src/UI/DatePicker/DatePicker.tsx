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
    MuiInputBase: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "63px",
          overflow: "visible",
          "@media (max-width: 400px)": {
            maxWidth: "clamp(165px, 50vw, 300px)", // Gradually decrease width
          },
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
  const handleDateChange = (date: any) => {
    console.log(date);
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={["DatePicker"]}
          sx={{
            "& .MuiStack-root": {
              padding: "0", // Remove extra padding
              overflow: "visible",
              fontFamily: "inherit",
            },
          }}
        >
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
