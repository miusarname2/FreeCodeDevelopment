import { useState } from "react";
import { CommandLineIcon,DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import BtnOption from './OptionOfCreationProject';

export default function reqView() {
  const [appTypeSelect, setAppTypeSelect] = useState('');  
  const redirOrigin = ()=> window.location.href = "/";
  const cancelHref = (e:any)=>{
    e.preventDefault();
    window.location.href = '/';
}
  const redirnext = (e:any)=>{
    e.preventDefault();
    if (appTypeSelect != '') {
      console.log('pass');
      console.log(`/app/${appTypeSelect}`);
      window.location.href = `/app/${appTypeSelect}`;
    }else{
      alert("Please select an option");
    }
  }

  const backWin =()=>{
    window.history.back();
  }
  const selectType = (e:any,btnSelect :string) => {
    e.preventDefault();
    console.log(btnSelect)
    setAppTypeSelect(btnSelect);
  };

  return (
    <>
    <div className="bg-[#1e1e1e] text-white p-6 rounded-lg h-screen w-screen">
    <h1 className="text-lg font-semibold mb-4">
      Choose a template for your new project:
    </h1>
    <div className="flex gap-4 mb-4">
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#3a3a3a] text-white">
        Multiplatform
      </button>
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#3a3a3a] text-white">
        iOS
      </button>
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#3a3a3a] text-white">
        macOS
      </button>
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#3a3a3a] text-white">
        watchOS
      </button>
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#3a3a3a] text-white">
        tvOS
      </button>
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#3a3a3a] text-white">
        DriverKit
      </button>
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#3a3a3a] text-white">
        Other
      </button>
      <div className="flex items-center ml-auto">
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
          className="text-white mr-2"
        >
          <path d="M6 18h8" />
          <path d="M3 22h18" />
          <path d="M14 22a7 7 0 1 0 0-14h-1" />
          <path d="M9 14h2" />
          <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
          <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
        </svg>
        <input
          className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#3a3a3a] text-white"
          placeholder="Filter"
        />
      </div>
    </div>
    <div className="grid grid-cols-3 gap-3 mb-3">
      <BtnOption content="App" icon={<DevicePhoneMobileIcon className="bg-blue-600 p-1 rounded-lg mb-2 w-10"/>} onClickFunc={selectType} key={"a"}/>
      <button className="flex flex-col items-center hover:shadow-lg transition-shadow duration-200" onClick={(e)=>{
        selectType(e,"DocumentApp")
      }}>
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
          className="bg-blue-600 p-4 rounded-lg mb-2"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
        <span>Document App</span>
      </button>
      <button className="flex flex-col items-center hover:shadow-lg transition-shadow duration-200" onClick={(e)=>{
        selectType(e,"Game")
      }}>
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
          className="bg-blue-600 p-4 rounded-lg mb-2"
        >
          <line x1={6} x2={10} y1={12} y2={12} />
          <line x1={8} x2={8} y1={10} y2={14} />
          <line x1={15} x2="15.01" y1={13} y2={13} />
          <line x1={18} x2="18.01" y1={11} y2={11} />
          <rect width={20} height={12} x={2} y={6} rx={2} />
        </svg>
        <span>Game</span>
      </button>
      <button className="flex flex-col items-center hover:shadow-lg transition-shadow duration-200" onClick={(e)=>{
        selectType(e,"AugmentedRealityApp")
      }}>
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
          className="bg-blue-600 p-4 rounded-lg mb-2"
        >
          <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
          <path d="M4 6h.01" />
          <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
          <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
          <path d="M12 18h.01" />
          <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
          <circle cx={12} cy={12} r={2} />
          <path d="m13.41 10.59 5.66-5.66" />
        </svg>
        <span>Augmented Reality App</span>
      </button>
      <button className="flex flex-col items-center hover:shadow-lg transition-shadow duration-200" onClick={(e)=>{
        selectType(e,"AppPlayground")
      }}>
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
          className="bg-blue-600 p-4 rounded-lg mb-2"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        <span>App Playground</span>
      </button>
      <button className="flex flex-col items-center hover:shadow-lg transition-shadow duration-200" onClick={(e)=>{
        selectType(e,"StickerPackApp")
      }}>
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
          className="bg-blue-600 p-4 rounded-lg mb-2"
        >
          <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
          <path d="M15 3v6h6" />
          <path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1" />
          <path d="M8 13h0" />
          <path d="M16 13h0" />
        </svg>
        <span>Sticker Pack App</span>
      </button>
      <button className="flex flex-col items-center hover:shadow-lg transition-shadow duration-200" onClick={(e)=>{
        selectType(e,"iMessageApp")
      }}>
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
          className="bg-blue-600 p-4 rounded-lg mb-2"
        >
          <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
          <path d="M10 2c1 .5 2 2 2 5" />
        </svg>
        <span>iMessage App</span>
      </button>
      <button className="flex flex-col items-center hover:shadow-lg transition-shadow duration-200" onClick={(e)=>{
        selectType(e,"SafariExtensionApp")
      }}>
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
          className="bg-blue-600 p-4 rounded-lg mb-2"
        >
          <circle cx={12} cy={12} r={10} />
          <circle cx={12} cy={12} r={4} />
          <line x1="21.17" x2={12} y1={8} y2={8} />
          <line x1="3.95" x2="8.54" y1="6.06" y2={14} />
          <line x1="10.88" x2="15.46" y1="21.94" y2={14} />
        </svg>
        <span>Safari Extension App</span>
      </button>
    </div>
    <div className="grid grid-cols-3 gap-6 mb-6">
      <button className="flex flex-col items-center hover:shadow-lg transition-shadow duration-200" onClick={(e)=>{
        selectType(e,"Framework")
      }}>
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
          className="bg-blue-600 p-4 rounded-lg mb-2"
        >
          <line x1={22} x2={2} y1={6} y2={6} />
          <line x1={22} x2={2} y1={18} y2={18} />
          <line x1={6} x2={6} y1={2} y2={22} />
          <line x1={18} x2={18} y1={2} y2={22} />
        </svg>
        <span>Framework</span>
      </button>
      <button className="flex flex-col items-center hover:shadow-lg transition-shadow duration-200" onClick={(e)=>{
        selectType(e,"StaticLibrary")
      }}>
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
          className="bg-blue-600 p-4 rounded-lg mb-2"
        >
          <path d="m16 6 4 14" />
          <path d="M12 6v14" />
          <path d="M8 8v12" />
          <path d="M4 4v16" />
        </svg>
        <span>Static Library</span>
      </button>
      <button className="flex flex-col items-center hover:shadow-lg transition-shadow duration-200" onClick={(e)=>{
        selectType(e,"MetalLibrary")
      }}>
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
          className="bg-blue-600 p-4 rounded-lg mb-2"
        >
          <path d="m16 6 4 14" />
          <path d="M12 6v14" />
          <path d="M8 8v12" />
          <path d="M4 4v16" />
        </svg>
        <span>Metal Library</span>
      </button>
    </div>
    <div className="flex justify-between">
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#3a3a3a] text-white" onClick={cancelHref}>
        Cancel
      </button>
      <div className="flex gap-4">
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#3a3a3a] text-white" onClick={()=>{
          backWin()
        }}>
          Previous
        </button>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white" onClick={redirnext}>
          Next
        </button>
      </div>
    </div>
  </div>
</>
  )
}
