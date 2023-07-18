
import {ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./scenes/UploadPage";
import DisplayPage from "./scenes/DisplayPage";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, Arial',
    },
  }); 
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<UploadPage />} />
          <Route exact path="/display" element={<DisplayPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
