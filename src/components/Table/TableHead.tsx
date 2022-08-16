import React from 'react'
import type { ColumnType } from './types'

type Props = {
  columns: Array<ColumnType>
}

const TableHead: React.FC<Props> = ({ columns, ...props }) => {
  return (
    <thead className='text-sm font-semibold text-[#6f767e]' {...props}>
      <tr>
        {columns.map(({ label, accessor, colspan }) => (
          <th className='p-4 text-center' colSpan={colspan || 1} key={accessor}>
            {label}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead