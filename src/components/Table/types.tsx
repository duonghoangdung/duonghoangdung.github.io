type ColumnType = {
  label: string
  colspan?: number
  accessor: string
}

type RowType = {
  [key: string]: string
}

export type { ColumnType, RowType }
