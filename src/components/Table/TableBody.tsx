import React from 'react';
import type { ColumnType, RowType } from './types';

type Props = {
	data: Array<RowType>;
	columns: Array<ColumnType>;
};

const TableBody: React.FC<Props> = ({data, columns, ...props}) => {
	return (
		<tbody className="text-sm font-normal text-[#1a1d1f]" {...props}>
            {data.map((dataRow, index) => (
                <tr key={index}>
    				{columns.map(({accessor, colspan}) => (
                        <td className="border-b border-[#efefef] p-4 text-center" colSpan={colspan || 1} key={accessor}>{dataRow?.[accessor]}</td>
                    ))}
    			</tr>
            ))}
		</tbody>
	);
};

export default TableBody;
