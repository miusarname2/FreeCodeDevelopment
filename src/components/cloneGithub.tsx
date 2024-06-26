import { Command } from "@tauri-apps/api/shell";
import { dialog } from "@tauri-apps/api";
import { join } from "@tauri-apps/api/path";

import { useState } from "react";

export default function cloneGithub() {
  const [urlRepo, setUrlRepo] = useState('');
  const cancelHref = (e:any)=>{
    e.preventDefault();
    window.location.href = '/';
}

const handleFileChange = async () => {
  //console.log(urlRepo);
  let getDric = await dialog.open({ directory: true });
  const result = typeof getDric == "string" ? getDric : ""
  let fileDirect= await join(result);
  console.log(fileDirect,"result");
   const echoss =  new Command('git',["clone",urlRepo,await fileDirect]); 
  const toResp = (await echoss.execute()).stderr;
  console.log(toResp);
  if (toResp.startsWith('Cloning' )) {
    alert("Todo ha ido bien");
    window.location.href='/code'
  }else{
    alert(`Algo ha ocurrido ${toResp}`);
  }
}
  return (
    <>
  <div className="bg-[#1E1E1E] w-full h-screen flex flex-col items-center justify-center">
    <div className="bg-[#252526] p-8 rounded-lg shadow-lg w-full h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-white text-2xl">Add Hosted Account</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <circle cx={12} cy={12} r={10} />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      </div>
      <p className="text-yellow-400 mb-6">
      When selecting a folder, make sure it is empty so that everything goes as expected.
      </p>
      <p className="text-gray-400 mb-6">
        Add a hosted account to view your starred, personal and organizational
        repositories
      </p>
      <div className="flex gap-4">
        <input
          className="flex h-10 w-full px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-grow text-white bg-[#3C3C3C] border border-[#3C3C3C] rounded"
          placeholder="Enter repository URL" 
          onChange={
            (e)=>{
              setUrlRepo(e.target.value);
            }
          }
        />
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-slate-400 text-white" onClick={cancelHref}>
          Cancel
        </button>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#007ACC] text-white" onClick={()=>{
          handleFileChange();
        }}>
          Clone
        </button>
      </div>
    </div>
  </div>
</>

  )
}
