import React, { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import SearchInput from '../components/SearchInput';
import Select from '../components/Select';
import Table, { ColumnType, RowType } from '../components/Table';


const BalanceLog:React.FC = () => {
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
    return (
        <Card title="Log">
            <div className='grid grid-cols-6 items-center gap-2 overflow-x-auto'> 
                <div className='col-span-3'>
                    <SearchInput />
                </div>
                <div className='col-span-1'>
                    <Select className='w-full'>
                        <option value="">All Status</option>
                    </Select>
                </div>
                <div className='col-span-1'>
                    <Select className='w-full'>
                        <option value="">Last 28 days</option>
                    </Select>
                </div>
                <div className='col-span-1'>
                    <Button buttonStyle="primary" className='w-full'>Search</Button>
                </div>
            </div>
            <div className='overflow-x-auto'>
                <Table columns={columns} data={data}/>
                <Pagination />
            </div>
        </Card>
    )
};
export default BalanceLog;