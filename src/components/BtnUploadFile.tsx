import * as React from "react";

export const ImportForm: React.FunctionComponent = () => {
  const folderInput = React.useRef(null);

  const handleFileChange = (event:any) => {
    console.log(event.target);
    alert(event.target.files[0].path);
  };

  return (
    <>
      <label className="flex items-center text-white space-x-2 transition-colors duration-200 rounded-lg overflow-hidden hover:bg-[#3C3C3E]">
        <FolderIcon className="text-[#8E8E93]" />
        <span>Open Existing Project...</span>
        <input
          type="file"
          directory=""
          webkitdirectory=""
          className="form-control"
          ref={folderInput}
          onChangeCapture={handleFileChange}
        />              
      </label>
    </>
  );
};

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    directory?: string;
    webkitdirectory?: string;
  }
}

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
