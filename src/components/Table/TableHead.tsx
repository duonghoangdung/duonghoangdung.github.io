import React from 'react'
import type { ColumnType } from './types'

type Props = {
  columns: Array<ColumnType>
}

const TableHead: React.FC<Props> = ({ columns, ...props }) => {
  return (
    <thead {...props}>
      <tr>
        {columns.map(({ label, accessor, colspan, className, align }) => (
          <th
            className={`text-sm font-semibold text-[#6f767e] p-4 text-left
              ${className && ` ${className}`}
              ${align && ` text-${align}`}`}
            colSpan={colspan || 1}
            key={accessor}
          >
            {label}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead
