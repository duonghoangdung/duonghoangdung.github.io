type ColumnType = {
  label: string
  colspan?: number
  accessor: string
  className?: string
  align?: string
}

type RowType = {
  [key: string]: string
}

export type { ColumnType, RowType }
