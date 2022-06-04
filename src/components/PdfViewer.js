import React, { useState ,useEffect} from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import { getMaterial } from "../apiClient/apiClient";
  
//PDFjs worker from an external cdn
// const url = 
// "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf"
  
export default function PdfViewer() {

    const [material, setMaterial] = useState([]);
  
  useEffect(async () => {
    const res = await getMaterial();
    setMaterial(res.data);
  }, []);

      
    pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
     const [numPages, setNumPages] = useState(null);
      const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  return (
    <>
    <div className="main">
    {material.map((data) => (
      <Document
        file={data.material}
        onLoadSuccess={onDocumentLoadSuccess}
        >
        <Page pageNumber={pageNumber} />
      </Document>
    ))}
     </div>
    </>
  );
}