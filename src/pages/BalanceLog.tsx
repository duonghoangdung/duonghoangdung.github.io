import React, { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import SearchInput from '../components/SearchInput';
import Select, { SelectType } from '../components/Select';
import Table, { ColumnType, RowType } from '../components/Table';


const BalanceLog = () => {
    const columns:ColumnType[] = [
        {
            label: "#",
            accessor: "stt"
        },
        {
            label: "Transaction type",
            accessor: "transaction_type"
        },
        {
            label: "Substance",
            accessor: "substance"
        },
        {
            label: "Price",
            accessor: "price"
        },
        {
            label: "Volatility",
            accessor: "volatility"
        },
        {
            label: "Date",
            accessor: "date"
        }
    ]; 
    const data:RowType[] = [
        {
            stt: '1',
            transaction_type: 'RefundBuyCode',
            substance: 'Refund Yahoo/582066254/303989413',
            price: '0.7',
            volatility: '1670.41 -> 1671.11',
            date: '2022-06-29 09:29:55'
        },
        {
            stt: '1',
            transaction_type: 'RefundBuyCode',
            substance: 'Refund Yahoo/582066254/303989413',
            price: '0.7',
            volatility: '1670.41 -> 1671.11',
            date: '2022-06-29 09:29:55'
        },
        {
            stt: '1',
            transaction_type: 'RefundBuyCode',
            substance: 'Refund Yahoo/582066254/303989413',
            price: '0.7',
            volatility: '1670.41 -> 1671.11',
            date: '2022-06-29 09:29:55'
        }
    ]; 
    const sortByDayOptions: SelectType[] = [
        {
            name: 'Last 28',
            value: 'dsds'
        },
        {
            name: 'Last 28',
            value: 'dsds'
        },
        {
            name: 'Last 28',
            value: 'dsds'
        }
    ]
    const [option1, setOption1] = useState<SelectType>();
    const [option2, setOption2] = useState<SelectType>();
    return (
        <Card title="Log">
            <div className='flex flex-wrap items-center gap-2 overflow-x-auto'> 
                <SearchInput />
                <select name="" id="" className='border-2 border-[#efefef] rounded-xl px-4 py-2 text-sm font-semibold text-[#6f767e]'>
                    <option value="">All Status</option>
                </select>
                <select name="" id="" className='border-2 border-[#efefef] rounded-xl px-4 py-2 text-sm font-semibold text-[#6f767e]'>
                    <option value="">Last 28 days</option>
                </select>
                {/* <Select options={sortByDayOptions} value={option1} onSelect={(option) => setOption1(option)}/>
                <Select options={sortByDayOptions} value={option2} onSelect={(option) => setOption2(option)}/> */}
                <Button buttonSize="sm" buttonStyle="primary">Search</Button>
            </div>
            <div className='overflow-x-auto'>
                <Table columns={columns} data={data}/>
                <Pagination />
            </div>
        </Card>
    )
};
export default BalanceLog;