interface BtnOptionI {
  content: string;
  icon: any;
  onClickFunc?: (event: any, content: string) => void;
}

export default function OptionOfCreationProject({ content, icon,onClickFunc }: BtnOptionI) {
  if (onClickFunc) {
    return (
      <>
        <button className="flex flex-col items-center hover:shadow-lg transition-shadow duration-200" onClick={(e:any)=>{
          onClickFunc(e,content.replace(/\s/g, ""));
        }}>
          {/* <svg
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
            <rect x={2} y={4} width={20} height={16} rx={2} />
            <path d="M10 4v4" />
            <path d="M2 8h20" />
            <path d="M6 4v4" />
          </svg> */}
          {icon}
          <span className="text-white">{content}</span>
        </button>
      </>
    );
  }else{
    return (
      <>
        <button className="flex flex-col items-center hover:shadow-lg transition-shadow duration-200" >
          {/* <svg
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
            <rect x={2} y={4} width={20} height={16} rx={2} />
            <path d="M10 4v4" />
            <path d="M2 8h20" />
            <path d="M6 4v4" />
          </svg> */}
          {icon}
          <span className="text-white">{content}</span>
        </button>
      </>
    );
  }
}
