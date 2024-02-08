import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PdfViewer from "./PdfViewer";
import greenCardPdf from "./assets/greenCard.pdf";
import redCardPdf from "./assets/redCard.pdf";
import { useState } from "react";
import About from "./About";

function App() {

  const [pageNumber, setPageNumber] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setPageNumber={setPageNumber}/>} />
        <Route path="/pdf-viewer-green" element={<PdfViewer pdf={greenCardPdf} setPageNumber={setPageNumber} pageNumber={pageNumber} />} />
        <Route path="/pdf-viewer-red" element={<PdfViewer pdf={redCardPdf} setPageNumber={setPageNumber} pageNumber={pageNumber} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App;
