type ColumnType = {
  label: string
  colspan?: number
  accessor: string
}

type RowType = {
  [key: string]: boolean
}

export type { ColumnType, RowType }
