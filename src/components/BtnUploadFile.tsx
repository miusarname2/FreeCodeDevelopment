import * as React from "react";
import { dialog } from "@tauri-apps/api";

export const ImportForm: React.FunctionComponent = () => {
  const handleFileChange = async () => {
    const result = await dialog.open({ directory: true });
    console.log(result);
  };

  return (
    <>
      <button onClick={handleFileChange} className="flex items-center text-white space-x-2 transition-colors duration-200 rounded-lg overflow-hidden hover:bg-[#3C3C3E]">
        <FolderIcon className="text-[#8E8E93]" />
        <span>Open Existing Project...</span>
      </button>
    </>
  );
};

function FolderIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    </svg>
  );
}
