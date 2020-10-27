import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import PDF from "./pub_menu.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Menu = () => (
    <Document file={PDF}>
        <Page pageNumber={1} />
        <Page pageNumber={2} />
    </Document>
);

export default Menu;
//----------------------------
// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


// function Menu(props) {
//     const [numPages, setNumPages] = useState(2);
//     // const [pageNumber, setPageNumber] = useState(1);

//     function onDocumentLoadSuccess({ numPages }) {
//         setNumPages(numPages);
//     }

//     return (
//         <div>
//             <Document
//                 file="./pub_menu.pdf"
//                 onLoadSuccess={onDocumentLoadSuccess}
//             >
//                 <Page pageNumber={1} />
//                 <Page pageNumber={2} />
//             </Document>
//             {/* <p>Page {pageNumber} of {numPages}</p> */}
//         </div>
//     );
// }

// export default Menu;