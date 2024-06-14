import React, { useCallback, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useResizeObserver } from "@wojtekmaj/react-hooks";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";


import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";



import "./Experience.css"

// import type { PDFDocumentProxy } from "pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const resizeObserverOptions = {};

const maxWidth = 800;


const ExperienceCard = ({ experience }) => {
  const [numPages, setNumPages] = useState(0);
  const [containerRef, setContainerRef] = useState(null);
  const [containerWidth, setContainerWidth] = useState();

  const [pageNumber, setPageNumber] = useState(1);

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  function onDocumentLoadSuccess({numPages}){
    console.log("🚀 ~ file: Experience.jsx:30 ~ onDocumentLoadSuccess ~ numPages:", numPages)
    setNumPages(numPages);
  }

   const onResize =
     useCallback((entries) => {
       const [entry] = entries;

       if (entry) {
         setContainerWidth(entry.contentRect.width);
       }
     },
     []);

   useResizeObserver(containerRef, resizeObserverOptions, onResize);

     function onFileChange(event) {
       const { files } = event.target;

       if (files && files[0]) {
         setFile(files[0] || null);
       }
     }

    //  function onDocumentLoadSuccess({
    //    numPages: nextNumPages,
    //  }) {
    //    setNumPages(nextNumPages);
    //    console.log("🚀 ~ file: Experience.jsx:75 ~ ExperienceCard ~ nextNumPages:", nextNumPages)
    //  }

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <div>
        <div className="Example">
          <div className="Example__container">
            {experience.file && (
              <div
                className="Example__container__document"
                ref={setContainerRef}
              >
                <div>
                  <Document
                    file={experience.file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    options={options}
                  >
                    <Page
                      pageNumber={pageNumber}
                      width={
                        containerWidth
                          ? Math.min(containerWidth, maxWidth)
                          : maxWidth
                      }
                    />
                  </Document>
                  <div
                    style={{
                      gap: 10,
                      alignItems: "center",
                      textAlign: "center",
                      alignContent: "center",
                    }}
                  >
                    <button
                      style={{
                        margin: 5,
                      }}
                      onClick={handlePreviousPage}
                      disabled={pageNumber === 1}
                    >
                      <AiFillCaretLeft></AiFillCaretLeft>
                    </button>
                    <span
                      style={{
                        margin: 5,
                      }}
                    >
                      Page {pageNumber} of {numPages}
                    </span>
                    <button
                      style={{
                        margin: 5,
                      }}
                      onClick={handleNextPage}
                      disabled={pageNumber === numPages}
                    >
                      <AiFillCaretRight />
                    </button>
                    <br />
                    <a
                      href={experience.file}
                      download={experience.fileName + ".pdf"}
                    >
                      <button
                        style={{
                          margin: 5,
                        }}
                      >
                        Download PDF
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
       <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point) => (
          <li
            key={`experience-point-${point.fileName}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            <a href={point.file} download={point.fileName}>
              {point.title}
            </a>
            <br />
            <div className="Example">
              <div className="Example__container">
                {experience.file && (
                  <div
                    className="Example__container__document"
                    ref={setContainerRef}
                  >
                    <div>
                      <Document
                        file={point.file}
                        onLoadSuccess={onDocumentLoadSuccess}
                        options={options}
                      >
                        <Page
                          pageNumber={pageNumber}
                          width={
                            containerWidth
                              ? Math.min(containerWidth, maxWidth)
                              : maxWidth
                          }
                        />
                      </Document>
                      <div
                        style={{
                          gap: 10,
                          alignItems: "center",
                          textAlign: "center",
                          alignContent: "center",
                        }}
                      >
                        <button
                          style={{
                            margin: 5,
                          }}
                          onClick={handlePreviousPage}
                          disabled={pageNumber === 1}
                        >
                          <AiFillCaretLeft></AiFillCaretLeft>
                        </button>
                        <span
                          style={{
                            margin: 5,
                          }}
                        >
                          Page {pageNumber} of {numPages}
                        </span>
                        <button
                          style={{
                            margin: 5,
                          }}
                          onClick={handleNextPage}
                          disabled={pageNumber === numPages}
                        >
                          <AiFillCaretRight />
                        </button>
                        <br />
                        <a href={point.file} download={point.fileName + ".pdf"}>
                          <button
                            style={{
                              margin: 5,
                            }}
                          >
                            Download PDF
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul> 
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>   
      <div className="mt-20 flex flex-col">
         <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
