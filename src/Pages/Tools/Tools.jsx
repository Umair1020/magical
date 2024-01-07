// import "./tools.css"
// import Header from '../../components/Header/Header'
// import { Link } from "react-router-dom"
// import Footer from "../../components/Footer/Footer"

// const Tools = () => {
//   return (
//     <div>
//       <main>
//         <div className="sc-f192d1c1-0 jVcJrB" style={{ backgroundColor: "#eaeaea" }} bis_skin_checked="1"><div className="sc-f192d1c1-1 zZeIa" bis_skin_checked="1"><div className="sc-f192d1c1-2 fUWXpu" bis_skin_checked="1"> <Header /></div></div></div><div className=" text-black" style={{ backgroundColor: "#eaeaea" }} bis_skin_checked="1"><div className="container mx-auto py-20 space-y-5" bis_skin_checked="1"><div className="flex flex-col text-center items-center justify-center space-y-3" bis_skin_checked="1"><h1 className="text-5xl">Free PDF Tools</h1><p className="mt-2 max-w-3xl">All PDF tools are 100% FREE and run in your browser for complete privacy. Our AI tools, powered by OpenAI, processes externally to ensure best results. No signup needed!</p></div>
//           <div className="rowflex flex-wrap justify-center !mt-16" bis_skin_checked="1"><Link className=" col-lg-3 relative inline-flex" to="/resumescanner" style={{ flex: "0 0 400px" }}><div className="flex flex-col shadow bg-white rounded-md text-black p-8 m-3 space-y-5 w-full hover:bg-gray-50" bis_skin_checked="1">
//             <img src="/img1.png" alt="Resume Checker" className="h-12 w-auto flex-none bg-white object-contain border-none self-start" /><span className="text-xl font-semibold">Resume Checker</span><span className="text-gray-700">From legal agreements to financial reports, brings yo.</span></div></Link><a  className="col-lg-3 relative inline-flex" href="/tools/resume-ai-scanner" style={{ flex: "0 0 400px" }}>
//               <div className="flex flex-col shadow bg-white rounded-md text-black p-8 m-3 space-y-5 w-full hover:bg-gray-50" bis_skin_checked="1"><img src="/img1.png" alt="Resume Scanner" className="h-12 w-auto flex-none bg-white object-contain border-none self-start" /><span className="text-xl font-semibold">Resume Scanner</span><span className="text-gray-700">Scan resume using AI and get overview &amp; questions to assess candidates effectively</span></div></a><a className="col-lg-3 relative inline-flex" href="/tools/invoice-ai-scanner" style={{ flex: "0 0 400px" }}>
//               <div className="flex flex-col shadow bg-white rounded-md text-black p-8 m-3 space-y-5 w-full hover:bg-gray-50" bis_skin_checked="1"><img src="/img2.png" alt="Invoice Scanner" className="h-12 w-auto flex-none bg-white object-contain border-none self-start" /><span className="text-xl font-semibold">Invoice Scanner</span><span className="text-gray-700">Scan invoice and get the data in JSON format</span></div></a><a className=" col-lg-3 relative inline-flex" href="/tools/quiz-ai-generator" style={{ flex: "0 0 400px" }}>
//               <div className="flex flex-col shadow bg-white rounded-md text-black p-8 m-3 space-y-5 w-full hover:bg-gray-50" bis_skin_checked="1"><img src="/img3.png" alt="Quiz Generator" className="h-12 w-auto flex-none bg-white object-contain border-none self-start" /><span className="text-xl font-semibold">Quiz Generator</span><span className="text-gray-700">Create a quiz from educational content using AI</span></div>
//               </a><a className=" col-lg-3 relative inline-flex" href="/tools/merge-pdf" style={{ flex: "0 0 400px" }}><div className="flex flex-col shadow bg-white rounded-md text-black p-8 m-3 space-y-5 w-full hover:bg-gray-50" bis_skin_checked="1"><img src="/img4.png" alt="Merge PDFs" className="h-12 w-auto flex-none bg-white object-contain border-none self-start" /><span className="text-xl font-semibold">Merge PDFs</span><span className="text-gray-700">Merge any amount of PDFs in the order you choose into a single PDF</span></div></a><a className=" col-lg-3 relative inline-flex" href="/tools/split-pdf" style={{ flex: "0 0 400px" }}>
//               <div className="flex flex-col shadow bg-white rounded-md text-black p-8 m-3 space-y-5 w-full hover:bg-gray-50" bis_skin_checked="1">
//                 <img src="/img4.png" alt="Split a PDF" className="h-12 w-auto flex-none bg-white object-contain border-none self-start" /><span className="text-xl font-semibold">Split a PDF</span><span className="text-gray-700">Split a PDF's pages into multiple PDFs or simply remove pages from an existing one</span></div></a><a className="col-lg-3 relative inline-flex" href="/tools/pdf-to-png" style={{ flex: "0 0 400px" }}><div className="flex flex-col shadow bg-white rounded-md text-black p-8 m-3 space-y-5 w-full hover:bg-gray-50" bis_skin_checked="1"><img src="/img5.avif" alt="PDF to PNG" className="h-12 w-auto flex-none bg-white object-contain border-none self-start" /><span className="text-xl font-semibold">PDF to PNG</span><span className="text-gray-700">Export each PDF page as a PNG image or extract individual images from the PDF to PNGs</span></div></a><a className="col-lg-3 relative inline-flex" href="/tools/pdf-to-jpeg" style={{ flex: "0 0 400px" }}><div className="flex flex-col shadow bg-white rounded-md text-black p-8 m-3 space-y-5 w-full hover:bg-gray-50" bis_skin_checked="1"><img src="/img6.avif" alt="PDF to JPEG" className="h-12 w-auto flex-none bg-white object-contain border-none self-start" /><span className="text-xl font-semibold">PDF to JPEG</span><span className="text-gray-700">Export each PDF page as a JPEG image or extract individual images from the PDF to JPEGs</span></div></a><a className="col-lg-3 relative inline-flex" href="/tools/png-to-pdf" style={{ flex: "0 0 400px" }}><div className="flex flex-col shadow bg-white rounded-md text-black p-8 m-3 space-y-5 w-full hover:bg-gray-50" bis_skin_checked="1">
//                   <img src="/img7.avif" alt="PNG to PDF" className="h-12 w-auto flex-none bg-white object-contain border-none self-start" /><span className="text-xl font-semibold">PNG to PDF</span><span className="text-gray-700">Convert PNG images to PDF online</span></div></a><a className=" col-lg-3 relative inline-flex" href="/tools/jpeg-to-pdf" style={{ flex: "0 0 400px" }}><div className="flex flex-col shadow bg-white rounded-md text-black p-8 m-3 space-y-5 w-full hover:bg-gray-50" bis_skin_checked="1">
//                     <img src="/img8.avif" alt="JPEG to PDF" className="h-12 w-auto flex-none bg-white object-contain border-none self-start" /><span className="text-xl font-semibold">JPEG to PDF</span><span className="text-gray-700">Convert JEPG images to PDF online</span></div></a><a className=" col-lg-3 relative inline-flex" href="/tools/heic-to-pdf" style={{ flex: "0 0 400px" }}><div className="flex flex-col shadow bg-white rounded-md text-black p-8 m-3 space-y-5 w-full hover:bg-gray-50" bis_skin_checked="1">
//                       <img src="/img9.avif" alt="HEIC to PDF" className="h-12 w-auto flex-none bg-white object-contain border-none self-start" /><span className="text-xl font-semibold">HEIC to PDF</span><span className="text-gray-700">Convert HEIC images to PDF online</span></div></a><a className="col-lg-3 relative inline-flex" href="/tools/pdf-to-html" style={{ flex: "0 0 400px" }}><div className="flex flex-col shadow bg-white rounded-md text-black p-8 m-3 space-y-5 w-full hover:bg-gray-50" bis_skin_checked="1"><img src="/img10.avif" alt="PDF to HTML" className="h-12 w-auto flex-none bg-white object-contain border-none self-start" /><span className="text-gray-700">Convert a PDF to HTML while keeping layout structure and images</span></div></a><a className="col-lg-3 relative inline-flex" href="/tools/ocr-pdf" style={{ flex: "0 0 400px" }}><div className="flex flex-col shadow bg-white rounded-md text-black p-8 m-3 space-y-5 w-full hover:bg-gray-50" bis_skin_checked="1"><img src="/img11.png" alt="OCR PDF" className="h-12 w-auto flex-none bg-white object-contain border-none self-start" /><span className="text-xl font-semibold">OCR PDF</span><span className="text-gray-700">OCR a scanned PDF document so you can easily select and search text</span></div></a><a className="col-lg-3 relative inline-flex" href="/tools/compress-pdf" style={{ flex: "0 0 400px" }}><div className="flex flex-col shadow bg-white rounded-md text-black p-8 m-3 space-y-5 w-full hover:bg-gray-50" bis_skin_checked="1"><img src="/img12.avif" alt="Compress PDF" className="h-12 w-auto flex-none bg-white object-contain border-none self-start" /><span className="text-xl font-semibold">Compress PDF</span><span className="text-gray-700">Reduce the size of a PDF by compressing the text and embedded images</span></div></a><a className="col-lg-3 relative inline-flex" href="/tools/rotate-pdf" style={{ flex: "0 0 400px" }}><div className="flex flex-col shadow bg-white rounded-md text-black p-8 m-3 space-y-5 w-full hover:bg-gray-50" bis_skin_checked="1">
//                         <img src="/img13.png" alt="Rotate PDF" className="h-12 w-auto flex-none bg-white object-contain border-none self-start" /><span className="text-xl font-semibold">Rotate PDF</span><span className="text-gray-700">Rotate all or individual pages in a PDF</span></div></a></div></div></div><div className="sc-d1bc8500-0 kIWyxL" bis_skin_checked="1"><div className="sc-d1bc8500-1 bBiduW" bis_skin_checked="1">
//                           <div className="sc-d1bc8500-2 hMPCkn" bis_skin_checked="1"><h3>Get started</h3><p>Upload a document and start chatting with it today. No credit card required.</p><div className="sc-d1bc8500-3 idESwB" bis_skin_checked="1"><a href="/auth/sign-in" style={{ background: "blue" }}>Sign up for free</a><a href="/demo">Try the demo →</a></div></div></div></div><Footer /></main>
//     </div>
//   )
// }

// export default Tools



import "./tools.css";
import Header from '../../components/Header/Header';
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Tools = () => {
  const ToolCard = ({ href, imgSrc, altText, title, description }) => {
    return (
      <a className="col-lg-3 relative inline-flex " href={href}>
        <div className="flex  flex-row shadow bg-white rounded-md text-black p-3 m-3 space-x-5 w-full hover:bg-gray-50" bis_skin_checked="1">
          <img src={imgSrc} alt={altText} className="h-12 w-auto flex-none bg-white object-contain border-none self-start mx-3" />
          <div className="flex flex-col">
            <span className="font-semibold" style={{fontSize: "15px"}}>{title}</span>
            <span className="text-gray-700 " style={{fontSize: "10px"}}>{description}</span>
          </div>
        </div>
      </a>
    );
  };

  return (
    <div>
      <main>
        <Header />
        <div className=" container row flex flex-wrap justify-center !mt-16" bis_skin_checked="1">
          <h1 className="text-center fw-bold" style={{fontFamily: "Inter"}}>Free PDF Tools</h1>
          <p className="text-center text-secondary">All PDF tools are 100% FREE and run in your browser for complete </p>
          <ToolCard
            href="/tools/resumescanner"
            imgSrc="/tool1.svg"
            altText="Resume Checker"
            title="Resume Checker"
            description="From legal agreements to financial reports, brings yo."
          />
          <ToolCard
            href="/tools/resumescanner"
            imgSrc="/tool2.svg"
            altText="Resume Checker"
            title="Resume Checker"
            description="From legal agreements to financial reports, brings yo."
          />
          <ToolCard
            href="/tools/resumescanner"
            imgSrc="/tool3.svg"
            altText="Resume Checker"
            title="Resume Checker"
            description="From legal agreements to financial reports, brings yo."
          /> <ToolCard
            href="/tools/resumescanner"
            imgSrc="/tool4.svg"
            altText="Resume Checker"
            title="Resume Checker"
            description="From legal agreements to financial reports, brings yo."
          /> <ToolCard
            href="/tools/resumescanner"
            imgSrc="/tool5.svg"
            altText="Resume Checker"
            title="Resume Checker"
            description="From legal agreements to financial reports, brings yo."
          /> <ToolCard
            href="/tools/resumescanner"
            imgSrc="/tool5.svg"
            altText="Resume Checker"
            title="Resume Checker"
            description="From legal agreements to financial reports, brings yo."
          /><ToolCard
            href="/tools/resumescanner"
            imgSrc="/tool5.svg"
            altText="Resume Checker"
            title="Resume Checker"
            description="From legal agreements to financial reports, brings yo."
          /><ToolCard
            href="/tools/resumescanner"
            imgSrc="/tool5.svg"
            altText="Resume Checker"
            title="Resume Checker"
            description="From legal agreements to financial reports, brings yo."
          /><ToolCard
            href="/tools/resumescanner"
            imgSrc="/tool5.svg"
            altText="Resume Checker"
            title="Resume Checker"
            description="From legal agreements to financial reports, brings yo."
          /><ToolCard
            href="/tools/resumescanner"
            imgSrc="/tool5.svg"
            altText="Resume Checker"
            title="Resume Checker"
            description="From legal agreements to financial reports, brings yo."
          /><ToolCard
            href="/tools/resumescanner"
            imgSrc="/tool5.svg"
            altText="Resume Checker"
            title="Resume Checker"
            description="From legal agreements to financial reports, brings yo."
          /><ToolCard
            href="/tools/resumescanner"
            imgSrc="/tool5.svg"
            altText="Resume Checker"
            title="Resume Checker"
            description="From legal agreements to financial reports, brings yo."
          />
        </div>
    <br /> <br />
        <Footer />
      </main>
    </div>
  );
};

export default Tools;
