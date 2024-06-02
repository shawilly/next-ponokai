import Link from "next/link";

const StatusLine = () => {
  return (
    <div>
      <Link
        className="bg-bg4 fixed bottom-0 left-0 right-0 flex items-center justify-between p-2 font-mono text-sm text-white"
        href="https://github.com/shawilly/ponokai"
        target="_blank"
      >
        <div className="hidden h-[100%] items-center space-x-4 md:flex">
          <span className="text-pblue">NORMAL</span>
          <span className="text-pyellow">[next-ponokai.tsx]</span>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <span className="text-pgreen">CREATED BY</span>
          <span className="text-pfg">SHAWILLY</span>
        </div>
        <div className="hidden items-center space-x-4 md:flex">
          <span className="text-pblue">96%</span>
          <span className="text-porange">Ln 42, Col 7</span>
        </div>
      </Link>
    </div>
  );
};

export default StatusLine;
