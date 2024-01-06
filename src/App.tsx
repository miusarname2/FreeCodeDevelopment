import {ImportForm} from "./components/BtnUploadFile";

export default function index() {
  const handleFileChange = async (event:any) => {
    const files = event.target.files;
    const len = files.length;

    for (let i = 0; i < len; i += 1) {
      console.log(files[i]);
    }
  };
  return (
    <div
      key="1"
      className="bg-[#202124] h-screen flex justify-center items-center"
    >
      <div className="bg-[#2C2C2E] p-8 rounded-lg shadow-lg flex h-screen w-screen items-center justify-center">
        <div className="flex flex-col items-center mr-12">
          <img
            alt="FreeCode Icon"
            className="mb-4"
            height="128"
            src="/logoF.svg"
            style={{
              aspectRatio: "128/128",
              objectFit: "cover",
            }}
            width="128"
          />
          <h1 className="text-white text-3xl font-bold mb-1">FreeCode</h1>
          <p className="text-[#8E8E93] mb-6">Version 0.1</p>
          <div className="space-y-4">
            <button
              className="flex items-center text-white space-x-2 transition-colors duration-200 rounded-lg overflow-hidden hover:bg-[#3C3C3E]"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/welcome";
              }}
            >
              <PencilIcon className="text-[#8E8E93]" />
              <span>Create New Project...</span>
            </button>
            <button
              className="flex items-center text-white space-x-2 transition-colors duration-200 rounded-lg overflow-hidden hover:bg-[#3C3C3E]"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/clone";
              }}
            >
              <GitBranchIcon className="text-[#8E8E93]" />
              <span>Clone Git Repository...</span>
            </button>
            <ImportForm/>
          </div>
        </div>
        <div className="bg-[#3C3C3E] p-4 rounded-lg">
          <h2 className="text-white font-semibold mb-4">Landmarks</h2>
          <ul className="text-[#8E8E93]">
            <li className="mb-2 flex items-center space-x-2 hover:bg-[#3C3C3E] rounded-lg">
              <img
                alt="Swift logo"
                className="w-5 h-5"
                height="20"
                src="/swift File.svg"
                style={{
                  aspectRatio: "20/20",
                  objectFit: "cover",
                }}
                width="20"
              />
              <div>
                <p className="text-xs">
                  ~/Desktop/swift intro/intro to swiftui
                </p>
                <p>MyPlayground</p>
              </div>
            </li>
            <li className="mb-2 flex items-center space-x-2">
              <img
                alt="Swift logo"
                className="w-5 h-5"
                height="20"
                src="/Swift Project.svg"
                style={{
                  aspectRatio: "20/20",
                  objectFit: "cover",
                }}
                width="20"
              />
              <div>
                <p className="text-xs">~/Desktop/swift intro</p>
                <p>Project 2</p>
              </div>
            </li>
            <li className="mb-2 flex items-center space-x-2">
              <img
                alt="Swift logo"
                className="w-5 h-5"
                height="20"
                src="/App Project.svg"
                style={{
                  aspectRatio: "20/20",
                  objectFit: "cover",
                }}
                width="20"
              />
              <div>
                <p className="text-xs">~/Desktop</p>
                <p>Project 3</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
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

function GitBranchIcon(props: any) {
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
      <line x1="6" x2="6" y1="3" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

function PencilIcon(props: any) {
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}
