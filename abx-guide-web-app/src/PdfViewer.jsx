import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfViewer(file) {
    return (
        <div className="pdf-container">
            <div className="pdf-toolbar">
                <button>-</button><button>+</button>
            </div>
        </div>
    )
}

export default PdfViewer;
