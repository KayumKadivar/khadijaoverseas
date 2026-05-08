"use client";

import { Download } from "lucide-react";
import { pdfBase64 } from "@/data/websiteProductSpecifications";

export default function DownloadButton({ slug, className, text }) {
  const handleDownload = () => {
    if (!pdfBase64) return;
    const a = document.createElement("a");
    a.href = `data:application/pdf;base64,${pdfBase64}`;
    a.download = `${slug}-specifications.pdf`;
    a.click();
  };

  return (
    <button onClick={handleDownload} className={className || "pdp-btn pdp-btn--white"}>
      <Download className="pdp-btn__icon" />
      {text || "Download Specifications"}
    </button>
  );
}
