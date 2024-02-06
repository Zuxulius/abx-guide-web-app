import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PdfViewer from "./PdfViewer";
import greenCardPdf from "./assets/greenCard.pdf";
import redCardPdf from "./assets/redCard.pdf";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdf-viewer-green" element={<PdfViewer pdf={greenCardPdf} />} />
        <Route path="/pdf-viewer-red" element={<PdfViewer pdf={redCardPdf} />} />
      </Routes>
    </Router>
  )
}

export default App;
