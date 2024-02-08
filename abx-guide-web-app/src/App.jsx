import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PdfViewer from "./PdfViewer";
import greenCardPdf from "./assets/greenCard.pdf";
import redCardPdf from "./assets/redCard.pdf";
import { useState } from "react";

function App() {

  const [pageNumber, setPageNumber] = useState(1);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setPageNumber={setPageNumber}/>} />
        <Route path="/pdf-viewer-green" element={<PdfViewer pdf={greenCardPdf} pageNumber={pageNumber} />} />
        <Route path="/pdf-viewer-red" element={<PdfViewer pdf={redCardPdf} pageNumber={pageNumber} />} />
      </Routes>
    </Router>
  )
}

export default App;
