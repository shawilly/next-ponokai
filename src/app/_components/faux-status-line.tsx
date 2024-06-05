import Link from "next/link";

interface StatusLineProps {
  whereami: string;
}

const StatusLine = ({ whereami }: StatusLineProps) => {
  return (
    <div>
      <Link
        className="bg-bg4 font-jetbrains fixed bottom-0 left-0 right-0 flex items-center justify-between p-2 text-sm font-medium text-white"
        href="https://github.com/shawilly/ponokai"
        target="_blank"
      >
        <div className="hidden h-[100%] items-center space-x-4 md:flex">
          <span className="text-pblue">NORMAL</span>
          <span className="text-pyellow">
            {/* this emoji is a directory icon */}
            <span className="text-xl">🗀</span> {whereami}
          </span>
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
