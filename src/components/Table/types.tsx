type ColumnType = {
    label: string,
    colspan?: number,
    accessor: string
};

type RowType = {
    [key: string]: any;
}

export type { ColumnType, RowType }