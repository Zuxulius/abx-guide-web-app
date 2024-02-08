import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfViewer({ pdf, pageNumber }) {

    const [file, setFile] = useState(pdf);
    const [numPages, setNumPages] = useState(null);
    const [pageWidth, setPageWidth] = useState(window.innerWidth * 0.7);
    const [zoomLevel, setZoomLevel] = useState(1);

    useEffect(() => {
        setFile(pdf); // Update the file state whenever the file changes
    }, [pdf]); // Depend on the file argument to trigger

    useEffect(() => {
        function handleResize() {
            setPageWidth(window.innerWidth * 0.7 * zoomLevel); // Update width when resizing window
        }
        window.addEventListener('resize', handleResize);

        // Remove the event listener when cleanup
        return () => window.removeEventListener('resize', handleResize);
    // depend on zoomLevel to run when changed
    }, [zoomLevel]);

    // When react-pdf successfully loads, set the page number
    function onDocumentLoadSuccess({ numPages }) {
         setNumPages(numPages);
        // Wait for document to load, then scroll the page number into view.
        setTimeout(() => {
            const pageElement = document.querySelector(`[data-page-number="${pageNumber}"]`)
            if (pageElement) {
            pageElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 500);
    }

    function zoomIn() {
        if (zoomLevel < 1.4) { // Don't allow eternal enlargement
            setZoomLevel(prevZoomLevel => prevZoomLevel * 1.1); // 10% zoom
        }
    };

    function zoomOut() {
        setZoomLevel(prevZoomLevel => prevZoomLevel / 1.1); // -10% zoom
    }

    return (
        <div className="pdf-container">
            <div className="pdf-toolbar">
                <button onClick={zoomOut}>-</button>
                <button onClick={zoomIn}>+</button>
            </div>
            {/* react-pdf stuff */}
            <div className="pdf__container__document">
                <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            width={pageWidth * zoomLevel} // Apply the page width with zoom level
                        />
                    ))}
        </Document>
            </div>
        </div>
    )
}

export default PdfViewer;
