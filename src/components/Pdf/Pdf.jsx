import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { Document, Page, pdfjs } from "react-pdf";
import ControlPanel from "./ControlPanel";
import "./pdf.css"; // Create a separate CSS file for styling

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReader = ({ path, file }) => {
  const corsProxy = `https://anywhere.synapssolutions.com/${path}`;

  const srcFile = path ? corsProxy : file;
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Set default zoom out to 70% when screen width is less than 768px
  //   const defaultZoom = window.innerWidth < 768 ? 0.7 : 1.0;
  //   setScale(defaultZoom);
  // }, [setScale]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= numPages; i++) {
      pages.push(<Page key={`page_${i}`} pageNumber={i} scale={scale} />);
    }
    return pages;
  };

  return (
    <div>
      <Loader isLoading={isLoading} />
      <section
        id="pdf-section"
        className="pdf-container d-flex flex-column align-items-center w-100"
      >
        <ControlPanel
          scale={scale}
          setScale={setScale}
          numPages={numPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          file={srcFile}
        />
        <Document
          file={srcFile}
          style={{ position: "relative", zIndex: 1111 }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {numPages && renderPages()}
        </Document>
      </section>
    </div>
  );
};

export default PDFReader;
