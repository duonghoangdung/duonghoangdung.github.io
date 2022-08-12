import React from 'react'
import TableBody from './TableBody'
import TableHead from './TableHead'
import type { ColumnType, RowType } from './types'

type Props = {
  data: Array<RowType>
  columns: Array<ColumnType>
}

const Table: React.FC<Props> = ({ columns, data, ...props }) => {
  return (
    <table className='table-auto w-full' {...props}>
      <TableHead columns={columns} />
      <TableBody columns={columns} data={data} />
    </table>
  )
}

export type { ColumnType, RowType }
export default Table
