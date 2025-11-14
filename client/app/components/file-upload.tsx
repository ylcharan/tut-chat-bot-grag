"use client";
import { Upload } from "lucide-react";

const FileUpload = () => {
  const handleFileUpload = () => {
    const el = document.createElement("input");
    el.setAttribute("type", "file");
    el.setAttribute("accept", "application/pdf");
    el.addEventListener("change", (e) => {
      if (el.files && el.files.length > 0) {
        const file = el.files.item(0);
        if (file) {
          const formData = new FormData();
          formData.append("pdf", file);

          fetch("http://localhost:9000/upload/pdf", {
            method: "POST",
            body: formData,
          });
          console.log("File successfully uploaded");
        }
      }
    });
    el.click();
  };
  return (
    <div className="cursor-pointer bg-gray-900 text-white shadow-2xl flex justify-center items-center p-4 rounded-lg border-blue-200 border">
      <div
        onClick={handleFileUpload}
        className="flex gap-2 justify-center items-center flex-col"
      >
        <h3>Upload file</h3>
        <Upload />
      </div>
    </div>
  );
};
export default FileUpload;
