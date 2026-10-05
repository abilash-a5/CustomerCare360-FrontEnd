import './Table.css'

const resolveCellValue = (row, column) => {
  if (typeof column.accessor === 'function') {
    return column.accessor(row)
  }

  if (column.key) {
    return row[column.key] ?? '—'
  }

  return '—'
}

const Table = ({
  columns = [],
  data = [],
  emptyMessage = 'No records available.',
  className = '',
}) => {
  if (!columns.length) {
    return null
  }

  if (!data.length) {
    return <div className={`table-empty ${className}`}>{emptyMessage}</div>
  }

  return (
    <div className={`table-wrapper ${className}`}>
      <table className="cc-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key || column.header} scope="col">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={row.id || rowIndex}>
              {columns.map((column) => {
                const cellContent =
                  typeof column.render === 'function'
                    ? column.render(row, rowIndex)
                    : resolveCellValue(row, column)

                return <td key={`${rowIndex}-${column.key || column.header}`}>{cellContent}</td>
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
