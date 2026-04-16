import Button from "../ui/Button";

type Column = {
  label: string;
  accessor?: string;
  isAction?: boolean; // For columns that contain buttons or actions
};

type TableProps = {
  columns: Column[];
  data: Record<string, any>[];
};

export default function Table({ columns, data }: TableProps) {
  return (
    <table className="w-full border-separate border-spacing-y-3">
      <thead>
        <tr>
          {columns.map((col, colIndex) => (
            <th
              key={colIndex}
              className="px-3 pt-2 text-left text-md font-semibold text-gray-700"
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="font-semibold">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => {
              const isFirst = colIndex === 0;
              const isLast = colIndex === columns.length - 1;

              return (
                <td
                  key={colIndex}
                  className={`px-3 text-sm text-gray-700 border border-2 
${isFirst ? "rounded-l-md rounded-r-none text-white border-[#383838]" : "border-l-0"}
                    ${colIndex === 5 ? "rounded-r-md rounded-l-none" : ""}
                    ${colIndex > 5 ? "bg-none border-none py-0" : isFirst ? "bg-[#0074CC] py-2" : "bg-white py-2"}
`}
                >
                  {col.isAction ? (
                    <div className="flex items-center gap-x-3 bg-none">
                      <Button
                        variant="secondary"
                        className="flex-1 text-gray-700 hover:underline inline-flex items-center justify-center h-9"
                      >
                        Use
                      </Button>
                      <Button
                        variant="secondary"
                        className="flex-1 text-gray-700 hover:underline inline-flex items-center justify-center h-9"
                      >
                        + sfx
                      </Button>
                      <Button
                        variant="secondary"
                        className="flex-1 text-gray-700 hover:underline inline-flex items-center justify-center h-9"
                      >
                        <ViewIcon />
                      </Button>
                    </div>
                  ) : (
                    (row[col.accessor!] ?? "-")
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ViewIcon() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
