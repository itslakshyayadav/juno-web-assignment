export default function BaseTable({ columns, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="text-left">
        <thead className="w-full bg-zinc-100">
          <tr>
            {columns.map((headItem, hIndex) => {
              return (
                <th
                  key={"thead-" + hIndex}
                  className="px-5 py-3 w-60 text-sm font-medium text-gray-800"
                >
                  {headItem.name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y w-full border">
          {rows.map((rowItem, rIndex) => {
            return (
              <tr key={"row-" + rIndex} className="">
                {columns.map((colItem, cIndex) => {
                  return (
                    <td key={"row-column-" + cIndex} className="px-5 py-3 w-64">
                      {colItem.cell
                        ? colItem.cell(rowItem)
                        : rowItem[colItem.model]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
