import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PdfViewer from "./PdfViewer";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdf-viewer" element={<PdfViewer file="" />} />
      </Routes>
    </Router>
  )
}

export default App;
