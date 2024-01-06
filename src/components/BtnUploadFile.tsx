import * as React from "react";
import { dialog } from "@tauri-apps/api";
import { readDir } from "@tauri-apps/api/fs";

export const ImportForm: React.FunctionComponent = () => {
  const readDirRecursive = async (path:any) => {
    const dirContents = await readDir(path);
  
    const recursivePromises = dirContents.map(async (item) => {
      if (item.children && item.children.length >= 0) {
        // Si el elemento tiene hijos, realizar una llamada recursiva
        item.children = await readDirRecursive(item.path);
      }
      return item;
    });
  
    return Promise.all(recursivePromises);
  };
  
  const handleFileChange = async () => {
    const result = await dialog.open({ directory: true });
  
    if (typeof result === "string") {
      var dirReaded = await readDirRecursive(result);
  
      if (dirReaded) {
        console.log(dirReaded,"esto se lee");
        window.location.href='/code';
      }
    } else {
      console.error("El resultado no es una cadena.");
    }
  }
  

  return (
    <>
      <button
        onClick={handleFileChange}
        className="flex items-center text-white space-x-2 transition-colors duration-200 rounded-lg overflow-hidden hover:bg-[#3C3C3E]"
      >
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
